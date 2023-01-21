import {apolloClient} from "../apollo";
import {createUSerMutation} from "../../graphql/query/createUserQuery";

const createUserApi = async (email: string, password: string) => await apolloClient.mutate({
	mutation: createUSerMutation,
	variables: {
		email,
		password
	}
});

export {createUserApi};