import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./user/user.module";
import * as dotenv from "dotenv";
import { GraphqlModule } from "./graphql/graphql.module";
dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL), UserModule, GraphqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
