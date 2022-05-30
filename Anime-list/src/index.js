import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import {AnimeProvider } from "./store/index";
import { ApolloProvider } from "@apollo/client/react";
import client from "./graphql/config/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailAnime from "./pages/DetailAnime";
import Collection from "./pages/Collection";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    {/* Context */}
    <AnimeProvider>
      {/* Router */}
      <Router>
        <Routes>
          <Route exact path="/detail/:id" element={<DetailAnime />} />
          <Route path="detail" element={<DetailAnime />} />
          <Route path="/collection" element={<Collection />} />
          <Route path = '/' element={<App />} />
        </Routes>
      </Router>
    </AnimeProvider>
  </ApolloProvider>
);
