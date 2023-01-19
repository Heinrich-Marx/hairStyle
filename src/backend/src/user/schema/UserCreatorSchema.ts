import {GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql/type";
import {registrationUserService} from "../services/userService";
import {TAny} from "../../../../utils/types";

const UserCreatorType = new GraphQLObjectType({
	name: "user",
	fields: {
		email: {
			type: GraphQLNonNull(GraphQLString)
		},
		id: {
			type: GraphQLNonNull(GraphQLID)
		},
		isActivated: {
			type: GraphQLNonNull(GraphQLBoolean)
		}
	}
});

const UserCreatorQuery = new GraphQLObjectType({
	name: "createdUser",
	fields: {
		user: {
			type: UserCreatorType
		},
		accessToken: {
			type: GraphQLString
		},
		refreshToken: {
			type: GraphQLString
		}
	}
});

const UserCreatorSchema = {
	user: {
		type: UserCreatorQuery,
		args: {
			email: {
				type: GraphQLNonNull(GraphQLString)
			},
			password: {
				type: GraphQLNonNull(GraphQLString)
			}
		},
		resolve: (parent:TAny, args: TAny) => registrationUserService(args.email, args.password)
	}
};

export {UserCreatorSchema};
