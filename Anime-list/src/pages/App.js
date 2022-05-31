import React, { useContext, useEffect,useState } from "react";
import { appContext } from "../store";
import { useQuery } from "@apollo/client";
import { LIST } from "../graphql/query/anime";
import { Row} from "../styled/AppStyled";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import List from "../components/list/List";


function App() {
  const [state, dispatch] = useContext(appContext);
  const {page,search_anime,year,season,status,pageInfo} = state;
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
      console.log("masyk");
      dispatch({
        type: "SET_ANIME_LIST",
        payload: dataList.Page.media,
      });
      dispatch({
        type: "SET_PAGE_INFO",
        payload: dataList.Page.pageInfo,
      });
    }
  }, [dataList]);
  useEffect(() => {
    if (season) {
      setVariables({
        ...variables,
        season: season,
      });
    } else if (!status) {
      delete variables.status;
      if (variables.seasonYear) delete variables.seasonYear;
    }
    refetchList({ variables: variables });
  }, [season]);
  useEffect(() => {
    if (year) {
      setVariables({
        ...variables,
        year: year,
      });
    } else if (!year) {
      delete variables.year;
      if (variables.seasonYear) delete variables.seasonYear;
    }
    refetchList({ variables: variables });
  }, [year]);
  useEffect(() => {
    if (status) {
      setVariables({
        ...variables,
        status: status,
      });
    } else if (!status) {
      delete variables.status;
    }
    refetchList({ variables: variables });
  }, [status]);
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
          <Navbar />
          <List refetch={refetchList}/>
          <Sidebar />
        </>
      )}
    </Row>
  );
}

export default App;
