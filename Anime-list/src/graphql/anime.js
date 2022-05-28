import { gql } from "@apollo/client";

export const TEST = gql`
  query (
    $season: MediaSeason
    $seasonYear: Int
    $nextSeason: MediaSeason
    $nextYear: Int
  ) {
    trending: Page(page: 1, perPage: 6) {
      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
    season: Page(page: 1, perPage: 6) {
      media(
        season: $season
        seasonYear: $seasonYear
        sort: POPULARITY_DESC
        type: ANIME
        isAdult: false
      ) {
        ...media
      }
    }
    nextSeason: Page(page: 1, perPage: 6) {
      media(
        season: $nextSeason
        seasonYear: $nextYear
        sort: POPULARITY_DESC
        type: ANIME
        isAdult: false
      ) {
        ...media
      }
    }
    popular: Page(page: 1, perPage: 6) {
      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
    top: Page(page: 1, perPage: 10) {
      media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
  }
  fragment media on Media {
    id
    title {
      userPreferred
    }
    coverImage {
      extraLarge
      large
      color
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    bannerImage
    season
    seasonYear
    description
    type
    format
    status(version: 2)
    episodes
    duration
    chapters
    volumes
    genres
    isAdult
    averageScore
    popularity
    mediaListEntry {
      id
      status
    }
    nextAiringEpisode {
      airingAt
      timeUntilAiring
      episode
    }
    studios(isMain: true) {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
  }
`;

const GET_ANIME_BANNER = gql`
  query getAnimeBanner($id: Int!) {
    Media(id: $id, type: ANIME) {
      ...AnimeBanner
    }
  }
`;

const getAnimeInfo = gql`
  query getAnimeInfo($id: Int) {
    Media(id: $id, type: ANIME) {
      ...AnimeInfo
    }
  }
`;

export const GET_ANIME_BY_ID = gql`
  query getAnimeByIds($perPage: Int, $page: Int, $ids: [Int]) {
    Page(perPage: $perPage, page: $page) {
      media(id_in: $ids) {
        ...AnimeInfo
      }
    }
  }
`;

export const GET_ANIME_TITLE = gql`
  query getAnimeTitle($id: Int) {
    Media(id: $id, type: ANIME) {
      title {
        romaji
        english
      }
    }
  }
`;

export const GET_POPULAR_BANNER = gql`
  query getPopularBanner($seasonYear: Int) {
    Media(type: ANIME, sort: POPULARITY_DESC, seasonYear: $seasonYear) {
      ...AnimeBanner
    }
  }
`;

export const SEARCH_ANIME = gql`
  query searchAnime($page: Int, $perPage: Int, $keyword: String) {
    Page(perPage: $perPage, page: $page) {
      media(type: ANIME, search: $keyword) {
        ...AnimeInfo
      }
    }
  }
`;

export const SEARCH_GENRE = gql`
  query searchGenre($page: Int, $perPage: Int, $genre: String) {
    Page(perPage: $perPage, page: $page) {
      media(type: ANIME, genre: $genre, sort: POPULARITY_DESC) {
        ...AnimeInfo
      }
    }
  }
`;
