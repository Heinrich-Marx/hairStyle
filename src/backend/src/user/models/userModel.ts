import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserModel {
  @Field(type => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  isActivated: boolean;

  @Field()
  activationLink: string

  @Field()
  userRole: string
}