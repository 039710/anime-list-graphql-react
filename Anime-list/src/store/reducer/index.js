export const initialState = {
  anime_list: [],
  anime_detail: [],
  top_10_anime: [],
  page: 1,
  search_anime: "",
  year: new Date().getFullYear + "%",
  pageInfo: {},
  collection: [
    {
      name: "test1",
      data: [
        {
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124194-IB2X2IdALUYB.jpg",
          coverImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124194-pWfBqp3GgjOx.jpg",
          title: "Fruits Basket: The Final",
          averageScore: 91,
          id: 124194,
          season: "SPRING",
          seasonYear: 2021,
          format: "TV",
          genres: [
            "Comedy",
            "Drama",
            "Psychological",
            "Romance",
            "Slice of Life",
            "Supernatural",
          ],
          episodes: 13,
          studio: "TMS Entertainment",
        },
      ],
    },
    {
      name: "test2",
      data: [],
    },
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
