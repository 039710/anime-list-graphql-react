import { gql } from "@apollo/client";

export const INDEX_PAGE = gql`
  query indexPage($perPage: Int, $page: Int, $seasonYear: Int) {
    banner: Media(type: ANIME, sort: POPULARITY_DESC, seasonYear: $seasonYear) {
      ...AnimeBanner
    }

    trending: Page(perPage: $perPage, page: $page) {
      media(sort: TRENDING_DESC, type: ANIME) {
        ...AnimeInfo
      }
    }

    popular: Page(perPage: $perPage, page: $page) {
      media(sort: POPULARITY_DESC, type: ANIME) {
        ...AnimeInfo
      }
    }

    topRated: Page(perPage: $perPage, page: $page) {
      media(sort: SCORE_DESC, type: ANIME) {
        ...AnimeInfo
      }
    }
  }
`;

export const ANIME_PAGE = gql`
  query animePage($id: Int, $perPage: Int) {
    Media(id: $id, type: ANIME) {
      ...AnimeInfo
      ...AnimeBanner
    }

    recommended: Page(perPage: $perPage) {
      recommendations(mediaId: $id, sort: RATING_DESC) {
        mediaRecommendation {
          ...AnimeInfo
        }
      }
    }
  }
`;

export const WATCH_PAGE = gql`
  query watchPage($id: Int, $perPage: Int) {
    anime: Media(id: $id) {
      ...AnimeBanner
      ...AnimeInfo
    }

    recommended: Page(perPage: $perPage) {
      recommendations(mediaId: $id, sort: RATING_DESC) {
        mediaRecommendation {
          ...AnimeBanner
          ...AnimeInfo
        }
      }
    }
  }
`;
