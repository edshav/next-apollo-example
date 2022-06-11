import { gql } from '@apollo/client';

export const CONTINENTS = gql`
  query ExampleQuery {
    continents {
      code
      name
    }
  }
`;
