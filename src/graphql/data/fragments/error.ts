import { gql } from '@apollo/client';

export const errorFragment = gql`
  fragment ErrorFragment on Error {
    field
    message
  }
`;
