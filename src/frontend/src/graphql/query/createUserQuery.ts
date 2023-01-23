import {gql} from "@apollo/client";

const createUSerMutation = gql(`
mutation($email: String!, $password: String!){
  addUser(email: $email, password: $password){
    user{
      email
      id
    }
    accessToken
  }
}
`);

export {createUSerMutation};