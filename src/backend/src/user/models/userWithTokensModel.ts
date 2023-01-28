import { Field, ObjectType } from "@nestjs/graphql";
import { UserModel } from "./userModel";

@ObjectType()
export class UserWithTokensModel {
  @Field()
  refreshToken: string;

  @Field()
  accessToken: string;

  @Field(type => UserModel)
  user: UserModel
}