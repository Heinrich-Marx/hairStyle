import {gql} from "@apollo/client";

const createUSerMutation = gql(`
	mutation($email: String!, $password: String!){
  		userCreator(email: $email, password: $password){
    		user{
     			email
     			id
     			isActivated
  				activationLink
   			}
			accessToken
			refreshToken
  		}
	}
`);

export {createUSerMutation};