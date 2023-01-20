import {gql} from "@apollo/client";

const createUserQuery = gql(`
	query($email: String!, $password: String!) {
  		user(email: $email, password: $password) {
    		user{
      			email
      			id
    		}
  		}
	}
`);

export {createUserQuery};