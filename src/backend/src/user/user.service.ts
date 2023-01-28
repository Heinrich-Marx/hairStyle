import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";
import { TokenService } from "../token/token.service";
import { MailService } from "../mail/mail.service";
import { ValidateTokenService } from "../token/validateToken.service";
import { UserError } from "./userError";
import { isNil, isNotNil } from "../utils/nil";
import { UserDto } from "../utils/dto";
import { TAny } from "../utils/types";
import { User, UserDocument } from "./models/user.schema";
import { Model } from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import * as dotenv from "dotenv";
import * as uuid from "uuid"
dotenv.config();

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => TokenService))private readonly tokenService: TokenService,
    @Inject(forwardRef(() => MailService))private readonly mailService: MailService,
    @Inject(forwardRef(() => ValidateTokenService))private readonly validateTokenService: ValidateTokenService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {
    this.tokenService = tokenService
    this.mailService = mailService
    this.validateTokenService = validateTokenService

  }

  async registration (email: string, password: string, userRole: string) {
    const candidate = await this.userModel.findOne({email});

    if (isNotNil(candidate)) {
      throw UserError.BadRequest(`User with email ${email} already exist`);
    }

    const hashPassword = await hash(password, 3);

    const activationLink = uuid.v4();

    const newUser = await this.userModel.create({email, password: hashPassword, activationLink, userRole});
    await this.mailService.sendActivationLink(email, `${process.env.API_URL}/api/activate/${activationLink}`);
    const userDto = new UserDto(newUser);

    const tokens = await this.tokenService.generateToken({...userDto});

    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto};
  }

  async activate (activationLink: string)  {
      const user = await this.userModel.findOne({activationLink});

      if (isNil(user)) {
      throw UserError.BadRequest("Incorrect activation link");
      }
      user.isActivated = true;
      await user.save();
  }

  async delete (id: string) {
    const user = this.getUserById(id)

    if (isNil(user)) {
      throw UserError.BadRequest("Incorrect user Id");
    }
    return this.userModel.deleteOne({_id: id}, (err, res) => {
      if (err) {
        throw UserError.ServerError("Error with deleted");
      }

      return res
    })
  }

  async login (email: string, password: string) {
    const user = await this.userModel.findOne({email});

    if (isNil(user)) {
    throw UserError.BadRequest("User not find");
    }

    const isPathEqual = await compare(password, user.password);

    if (!isPathEqual) {
      throw UserError.BadRequest("Incorrect password");
    }

    const userDto = new UserDto(user);

    const tokens = await this.tokenService.generateToken({...userDto});

    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {...tokens, user: userDto};
  }

  async logout (token: string) {
    return this.tokenService.removeToken(token);
  }

  async refreshToken (token: string) {
    if (isNil(token)) {
      throw UserError.UnauthorizedError();
    }

    const userToken = this.validateTokenService.validateRefreshToken(token);

    const dbToken = this.tokenService.findToken(token);

    if (isNil(userToken) || isNil(dbToken)) {
      throw UserError.UnauthorizedError();
    }

    return token;
  }

  async getAllUsers ():Promise<TAny> {
   return this.userModel.find({});
  }

  async getUserById (id: string) {
    return this.userModel.findById(id)
  }
}