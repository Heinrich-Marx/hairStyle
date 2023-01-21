import {GraphQLObjectType} from "graphql/type";
import {getAllUsersSchema} from "../user/schema/UserSchemas";

const rootQuery = new GraphQLObjectType({
	name: "Query",
	fields: {
		...getAllUsersSchema,
	}
});

export {rootQuery};