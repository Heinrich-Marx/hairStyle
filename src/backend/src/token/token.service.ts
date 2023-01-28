import { Injectable } from "@nestjs/common";
import * as dotenv from "dotenv";
import { sign } from "jsonwebtoken";
import { isNotNil } from "../utils/nil";
import { TAny } from "../utils/types";
import { InjectModel } from "@nestjs/mongoose";
import { Token, TokenDocument } from "./models/token.schema";
import { Model } from "mongoose";
dotenv.config();

@Injectable()
export class TokenService {

  constructor(@InjectModel(Token.name) private tokenModel: Model<TokenDocument>){}
  async generateToken<P extends Record<string, TAny> = Record<string, TAny>> (payload: P) {

    const accessToken = sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "15m"});
    const refreshToken = sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "15d"});

    return ({
      accessToken,
      refreshToken
    });
  }

  async saveToken (userId:string, refreshToken: string):Promise<TAny> {
      const tokenData = await this.tokenModel.findOne({user: userId});
      //
       if (isNotNil(tokenData)) {
         tokenData.refreshToken = refreshToken;
         return tokenData.save();
       }

       return await this.tokenModel.create({user: userId, refreshToken});
  }

  async removeToken (refreshToken: string) {
    return this.tokenModel.deleteOne({refreshToken});
  }

  async findToken (refreshToken: string): Promise<TAny> {
    return this.tokenModel.findOne({refreshToken});
  }
}