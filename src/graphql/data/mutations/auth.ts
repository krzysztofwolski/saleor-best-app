import { gql } from "@apollo/client"

export const verifyToken = gql`
  mutation VerifyToken($token: String!) {
    tokenVerify(token: $token) {
      user {
        firstName
      }
      isValid
    }
  }
`
