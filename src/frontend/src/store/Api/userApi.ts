import {apolloClient} from "../apollo";
import {createUserQuery} from "../../graphql/query/createUserQuery";

const createUserApi = async (email: string, password: string) => await apolloClient.query({
	query: createUserQuery,
	variables: {
		email,
		password
	}
});

export {createUserApi};