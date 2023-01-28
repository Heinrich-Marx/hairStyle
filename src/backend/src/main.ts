import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";
dotenv.config();

async function start() {
  const PORT = process.env.PORT_BACKEND;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(PORT);
}
start();
