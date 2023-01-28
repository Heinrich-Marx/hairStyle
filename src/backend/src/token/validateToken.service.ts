import {verify} from "jsonwebtoken";
import * as dotenv from "dotenv";
import { Injectable } from "@nestjs/common";
dotenv.config();

@Injectable()
export class ValidateTokenService {
  validateAccessToken (token: string) {
    try {
      return verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken (token: string) {
    try {
      return verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (e) {
      return null;
    }
  }
}
