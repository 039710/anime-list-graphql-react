export const initialState = {
  anime_list: [],
  anime_detail: [],
  top_10_anime: [],
  page: 1,
  search_anime: "",
  year: new Date().getFullYear + "%",
  pageInfo: {},
  collection: [
    
    
  ],
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
    
    case "ADD_COLLECTION":
      return {
        ...state,
        collection: [...state.collection, action.payload],
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
   
    default:
      return state;
  }
};
