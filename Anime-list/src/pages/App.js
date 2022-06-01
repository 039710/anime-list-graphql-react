import React, { useContext, useEffect,useState } from "react";
import { appContext } from "../store";
import { useQuery } from "@apollo/client";
import { LIST } from "../graphql/query/anime";
import { Row} from "../styled/AppStyled";
import List from "../components/list/List";


function App() {
  const [state, dispatch] = useContext(appContext);
  const {page,search_anime} = state;
  const [variables, setVariables] = useState({
    page: page,
    sort: "SCORE_DESC",
    type : "ANIME",
  });
  const {
    loading: loadingList,
    error: errorList,
    data: dataList,
    refetch: refetchList,
  } = useQuery(LIST, {
    variables: variables,
  });
  
  useEffect(() => {
    if (dataList) {
      dispatch({
        type: "SET_ANIME_LIST",
        payload: dataList.Page.media,
      });
      dispatch({
        type: "SET_PAGE_INFO",
        payload: dataList.Page.pageInfo,
      });
    }
    // if(localStorage.getItem('collection')){
    //   dispatch({
    //     type: "SET_COLLECTION",
    //     payload: JSON.parse(localStorage.getItem('collection')),
    //   });
    // }
    
  }, [dataList]);

  useEffect(() => {
    if (search_anime) {
      setVariables({
        ...variables,
        search: search_anime,
      });
    } else if (!search_anime) {
      delete variables.search;
    }
    refetchList({ variables: variables });
  }, [search_anime]);
  useEffect(() => {
    if (page) {
      setVariables({
        ...variables,
        page: page,
      });
    } else if (!page) {
      delete variables.page;
    }
    refetchList({ variables: variables });
  }, [page]);
  return (
    <Row
      background={"darkGray"}
      height={"100%"}
      width={"100%"}
      color={"lightGray"}
      padding={"0px"}
    >

      {errorList ? (
        <div>Error on querying</div>
        ) : (
          <>
          
          <List refetch={refetchList} />
        </>
      )}
    </Row>
  );
}

export default App;
