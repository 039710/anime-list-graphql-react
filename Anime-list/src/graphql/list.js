import { gql } from "@apollo/client";

export const GET_LIST = gql`
  query getList($perPage: Int, $page: Int, $sort: [MediaSort]) {
    Page(perPage: $perPage, page: $page) {
      media(sort: $sort, type: ANIME) {
        ...AnimeInfo
      }
    }
  }
`;
