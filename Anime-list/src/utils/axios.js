import axios from "axios";
const anilistInsance = axios.create({
  baseURL: "https://graphql.anilist.co",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

module.exports = anilistInsance;
