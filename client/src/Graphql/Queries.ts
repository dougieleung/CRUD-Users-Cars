import { gql } from "@apollo/client";

export const GET_USERS_ONLY = gql`
  query getAllUsersCars {
    getAllUsersCars {
      id
      name
      username
    }
  }
`;
