import {gql} from '@apollo/client';

export const CONTINENT_QUERY = gql`
  query {
    continents {
      name
    }
  }
`;
