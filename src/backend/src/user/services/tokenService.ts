import {TAny} from "../../../../utils/types";
import {sign} from "jsonwebtoken";
import * as dotenv from "dotenv";
import {tokenModel} from "../models/tokenModel";
import {isNotNil} from "../../../../utils/nil";
dotenv.config();

const generateTokenService =<P extends Record<string, TAny> = Record<string, TAny>> (payload: P) => {
	// TODO fix process env jwt
	const accessToken = sign(payload, process.env.JWT_ACCESS_SECRET || "JWT_ACCESS_SECRET", {expiresIn: "15m"});
	const refreshToken = sign(payload, process.env.JWT_REFRESH_SECRET || "JWT_REFRESH_SECRET", {expiresIn: "15d"});

	return ({
		accessToken,
		refreshToken
	});
};

const saveTokenService = async (userId:string, refreshToken: string) => {
	const tokenData = await tokenModel.findOne({user: userId});

	if (isNotNil(tokenData)) {
		tokenData.refreshToken = refreshToken;
		return tokenData.save();
	}

	return await tokenModel.create({user: userId, refreshToken});
};

const removeTokenService = async (refreshToken: string) => await tokenModel.deleteOne({refreshToken});

const findTokenService = async (refreshToken: string) => await tokenModel.findOne({refreshToken});



export {generateTokenService ,saveTokenService, removeTokenService, findTokenService};