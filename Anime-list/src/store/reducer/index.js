export const initialState = {
  anime_list: [],
  anime_detail: [],
  top_10_anime: [],
  page: 1,
  search_anime: {

  },
  genre: [],
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
    case "SET_GENRE":
      return {
        ...state,
        genre: action.payload,
      };
      
    default:
      return state;
  }
};
