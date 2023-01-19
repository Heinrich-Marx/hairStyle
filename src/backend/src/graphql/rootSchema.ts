import {GraphQLSchema} from "graphql/type";
import {rootQuery} from "./rootQuery";

const schema = new GraphQLSchema({
	query: rootQuery,
});

export {schema};