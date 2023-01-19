import {GraphQLObjectType} from "graphql/type";
import {UserCreatorSchema} from "../user/schema/UserCreatorSchema";

const rootQuery = new GraphQLObjectType({
	name: "Query",
	fields: {
		...UserCreatorSchema
	}
});

export {rootQuery};