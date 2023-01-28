import { Module } from "@nestjs/common";
import * as dotenv from "dotenv";
import { TokenController } from "./token.controller";
import { TokenService } from "./token.service";
import { ValidateTokenService } from "./validateToken.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Token, TokenSchema } from "./models/token.schema";

dotenv.config();

@Module({
  controllers: [TokenController],
  providers: [TokenService, ValidateTokenService],
  imports: [MongooseModule.forFeature([{name: Token.name,schema: TokenSchema}])],
  exports: [TokenService, ValidateTokenService]
})
export class TokenModule {}
