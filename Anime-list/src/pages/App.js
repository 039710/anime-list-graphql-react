import React, { useContext, useEffect } from "react";
import { appContext } from "../store";
import { useQuery } from "@apollo/client";
import { TEST } from "../graphql/anime";
function App() {
  const [state, dispatch] = useContext(appContext);
  //GET_LIST
  const { loading, error, data } = useQuery(TEST, {
    variables: {
      nextSeason: "SUMMER",
      nextYear: 2020,
      season: "WINTER",
      seasonYear: 2019,
    },
  });
  useEffect(() => {}, []);
  return <div></div>;
}

export default App;
