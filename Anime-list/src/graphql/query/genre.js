import { gql } from "@apollo/client";

export const GET_GENRE = gql`
  query {
    genres: GenreCollection
  }
`;