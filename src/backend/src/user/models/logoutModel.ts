import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LogoutModel {
  @Field()
  acknowledged: boolean;

  @Field()
  deletedCount: number;

}