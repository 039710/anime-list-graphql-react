export const initialState = {
  anime_list: [],
  anime_detail: [],
  top_10_anime: [],
  status : "",
  page: 1,
  search_anime: "",
  year: new Date().getFullYear +"%",
  season: "",
  pageInfo:{

  },
  collection : []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case "SET_TOP_10_ANIME":
      return {
        ...state,
        top_10_anime: action.payload,
      };
    case "SET_COLLECTION":
      return {
        ...state,
        collection: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_SEARCH_ANIME":
      return {
        ...state,
        search_anime: action.payload,
      };
    case "SET_PAGE_INFO":
      return {
        ...state,
        pageInfo: action.payload,
      };
    case "SET_YEAR":
      return {
        ...state,
        year: action.payload + "%",
      };
    case "SET_SEASON":
      return {
        ...state,
        season: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
