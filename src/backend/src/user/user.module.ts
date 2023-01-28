import * as dotenv from "dotenv";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { MailModule } from "../mail/mail.module";
import { TokenModule } from "../token/token.module";
import { UserResolver } from "./user.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/user.schema";
import {Module} from "@nestjs/common";
dotenv.config();

@Module({
  controllers: [UserController],
  providers: [UserService, UserResolver],
  imports: [MailModule, TokenModule, MongooseModule.forFeature([{name: User.name,schema: UserSchema}])],
})
export class UserModule {}
