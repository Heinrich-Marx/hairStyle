import { Module } from "@nestjs/common";
import * as dotenv from "dotenv";
import { MailService } from "./mail.service";
import { MailController } from "./mail.controller";

dotenv.config();

@Module({
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
