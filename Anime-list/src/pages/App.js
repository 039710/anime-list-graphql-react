import React, { useContext, useEffect } from "react";
import { appContext } from "../store";
import { useQuery } from "@apollo/client";
import { LIST } from "../graphql/query/anime";
import { Row} from "../styled/AppStyled";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import List from "../components/list/List";


function App() {
  const [state, dispatch] = useContext(appContext);
  const {page,search_anime,genre} = state;
  const {
    loading: loadingList,
    error: errorList,
    data: dataList,
  } = useQuery(LIST, {
    variables: {
      page: page,
      sort: "SCORE_DESC",
      type: "ANIME",
    },
  });
  
  useEffect(() => {
    if (dataList) {
      dispatch({
        type: "SET_ANIME_LIST",
        payload: dataList.Page.media,
      });
    }
  }, [dataList]);
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
          <List />
          <Sidebar />
        </>
      )}
    </Row>
  );
}

export default App;
