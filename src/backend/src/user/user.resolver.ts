import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserModel } from "./models/userModel";
import { UserService } from "./user.service";
import { UserWithTokensModel } from "./models/userWithTokensModel";
import { LogoutModel } from "./models/logoutModel";

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService,
  ) {}

  @Query(() => [UserModel])
  async getAllUser() {
    return this.userService.getAllUsers()
  }

  @Query(() => UserModel)
  async getUserById(
    @Args("id") id: string,
  ) {
    return this.userService.getUserById(id)
  }

  @Mutation(() => UserWithTokensModel)
  async addUser(
    @Args("email") email: string,
    @Args("password") password: string,
    @Args("userRole") userRole: string
  ) {
    return this.userService.registration(email, password, userRole)
  }

  @Mutation(() => UserModel)
  async deleteUser(
    @Args("id") id: string,
  ) {
    return this.userService.delete(id)
  }

  @Query(() => UserWithTokensModel)
  async login(
    @Args("email") email: string,
    @Args("password") password: string
  ) {
    return this.userService.login(email, password)
  }

  @Query(() => LogoutModel)
  async logOut(@Args("token") token: string) {
    return this.userService.logout(token)
  }

  @Query(() => Boolean!, {nullable: true})
  async activate(
    @Args("activationLink") activationLink: string,
  ) {
    return this.userService.activate(activationLink)
  }

  @Query(() => String)
  async refreshToken(
    @Args("token") token: string,
  ) {
    return this.userService.refreshToken(token)
  }
}