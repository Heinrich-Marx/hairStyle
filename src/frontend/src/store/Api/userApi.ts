import {client} from "../apollo";
import {createUserQuery} from "../../graphql/query/createUserQuery";

const createUserApi = async (email: string, password: string) => {
	return await client.query({
		query: createUserQuery,
		variables: {
			email,
			password
		}
	});
};

export {createUserApi};