import {GraphQLObjectType} from "graphql/type";
import {getAllUsersSchema, UserCreatorSchema} from "../user/schema/UserCreatorSchema";

const rootQuery = new GraphQLObjectType({
	name: "Query",
	fields: {
		...UserCreatorSchema,
		...getAllUsersSchema,
	}
});

export {rootQuery};