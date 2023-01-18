import {verify} from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const validateAccessToken = (token: string) => {
	try {
		return verify(token, process.env.JWT_ACCESS_SECRET || "");
	} catch (e) {
		return null;
	}
};

const validateRefreshToken = (token: string) => {
	try {
		return verify(token, process.env.JWT_REFRESH_SECRET || "");
	} catch (e) {
		return null;
	}
};

export {validateAccessToken, validateRefreshToken};