import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
// import AnimeProvider
import { appContext, AnimeProvider } from "./store/index";
import { ApolloProvider } from "@apollo/client/react";
import client from "./graphql/config/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AnimeProvider>
        <App />
      </AnimeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
