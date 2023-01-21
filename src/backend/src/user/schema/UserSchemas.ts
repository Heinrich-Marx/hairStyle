import {GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql/type";
import {getAllUsersService, registrationUserService} from "../services/userService";
import {TAny} from "../../../../utils/types";

const UserCreatorType = new GraphQLObjectType({
	name: "user",
	fields: {
		email: {type: GraphQLNonNull(GraphQLString)},
		id: {type: GraphQLNonNull(GraphQLID)},
		isActivated: {type: GraphQLBoolean},
		activationLink: {type:GraphQLString}
	}
});

const UserCreatorQuery = new GraphQLObjectType({
	name: "newUser",
	fields: {
		user: {type: UserCreatorType},
		accessToken: {type: GraphQLString},
		refreshToken: {type: GraphQLString}
	}
});

const addUserMutation = {
	userCreator: {
		type: UserCreatorQuery,
		args: {
			email: {type: GraphQLNonNull(GraphQLString)},
			password: {type: GraphQLNonNull(GraphQLString)}
		},
		resolve: (parent:TAny, args: TAny) => registrationUserService(args.email, args.password)
	}
};

const getAllUsersSchema = {
	users: {
		type: GraphQLList(UserCreatorType),
		resolve: () => getAllUsersService()
	}
};





export {addUserMutation, getAllUsersSchema};
