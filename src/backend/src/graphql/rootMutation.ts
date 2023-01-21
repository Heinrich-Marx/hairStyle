import {GraphQLObjectType} from "graphql/type";
import {addUserMutation} from "../user/schema/UserSchemas";

const rootMutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		...addUserMutation,
	}
});

export {rootMutation};