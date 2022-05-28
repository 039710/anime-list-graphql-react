export const initialState = {
  anime: [],
  anime_list: [],
  anime_detail: [],
  popular_anime: [],
  trending_anime: [],
  top_rated_anime: [],
  upcoming_anime: [],
  search_anime: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIME":
      console.log("anjayyyyyy");
      return {
        ...state,
        anime: action.payload,
      };
    case "SET_ANIME_LIST":
      return {
        ...state,
        anime_list: action.payload,
      };
    case "SET_ANIME_DETAIL":
      return {
        ...state,
        anime_detail: action.payload,
      };
    case "SET_POPULAR_ANIME":
      return {
        ...state,
        popular_anime: action.payload,
      };
    case "SET_TRENDING_ANIME":
      return {
        ...state,
        trending_anime: action.payload,
      };
    case "SET_TOP_RATED_ANIME":
      return {
        ...state,
        top_rated_anime: action.payload,
      };
    case "SET_UPCOMING_ANIME":
      return {
        ...state,
        upcoming_anime: action.payload,
      };
    case "SET_SEARCH_ANIME":
      return {
        ...state,
        search_anime: action.payload,
      };

    default:
      return state;
  }
};
