import {userModel} from "../models/userModel";
import {isNil, isNotNil} from "../../../../utils/nil";
import {compare, hash} from "bcrypt";
import * as uuid from "uuid";
import {sendActivationMailService} from "./mailService";
import {findTokenService, generateTokenService, removeTokenService, saveTokenService} from "./tokenService";
import {UserDto} from "../Types/dto";
import {ApiError} from "../exceptions/error";
import {validateRefreshToken} from "../utils/validateTokens";

const registrationUserService = async (email: string, password: string) => {
	const candidate = await userModel.findOne({email});

	if (isNotNil(candidate)) {
		throw ApiError.BadRequest(`User with email ${email} already exist`);
	}

	const hashPassword = await hash(password, 3);

	const activationLink = uuid.v4();

	const newUser = await userModel.create({email, password: hashPassword, activationLink});

	await sendActivationMailService(email, `${process.env.API_URL}/api/activate/${activationLink}`);

	const userDto = new UserDto(newUser);

	const tokens = generateTokenService({...userDto});

	await saveTokenService(userDto.id, tokens.refreshToken);

	return {...tokens, user: userDto};
};

const activateUserService = async (activationLink: string) => {
	const user = await userModel.findOne({activationLink});

	if (isNil(user)) {
		throw ApiError.BadRequest("Incorrect activation link");
	}

	if (isNotNil(user)) {
		user.isActivated = true;
		await user.save();
	}
};

const loginUserService = async (email: string, password: string) => {
	const user = await userModel.findOne({email});

	if (isNil(user)) {
		throw ApiError.BadRequest("User not find");
	}

	const isPathEqual = await compare(password, user.password);

	if (!isPathEqual) {
		throw ApiError.BadRequest("Incorrect password");
	}

	const userDto = new UserDto(user);

	const tokens = generateTokenService({...userDto});

	await saveTokenService(userDto.id, tokens.refreshToken);

	return {...tokens, user: userDto};
};

const logoutUserService = async (token: string) => await removeTokenService(token);

const refreshTokenUserService = async (token: string) => {
	if (isNil(token)) {
		throw ApiError.UnauthorizedError();
	}

	const userToken = validateRefreshToken(token);

	const dbToken = findTokenService(token);

	if (isNil(userToken) || isNil(dbToken)) {
		throw ApiError.UnauthorizedError();
	}

	return token;
};

const getAllUsersService = async () => userModel.find();

export {registrationUserService, activateUserService, loginUserService, logoutUserService, refreshTokenUserService, getAllUsersService};