import React, { useEffect, useState } from "react";
import { Row, Column, Button, Search, Span } from "../../styled/AppStyled";
import { appContext } from "../../store";
import { useContext } from "react";
import Card from "../anime/Card";
import Navbar from "../headerbar/Navbar";
import Pagination from "../pagination/Pagination";

function List() {
  const [state, dispatch] = useContext(appContext);
  const { search: toSearch, anime_list,collection } = state;
  const [search, setSearch] = useState("");

  useEffect(() => {}, [anime_list]);

  return (
    <Column padding={"0px"}>
      <Navbar />
      <Column
        background={"#E8F9FD"}
        justify={"center"}
        align={"center"}
        padding={"0px"}
      >
        <Row
          justify={"flex-start"}
          align={"flex-start"}
          height={"auto"}
          width={"auto"}
          wrap={"wrap"}
        >
          <Span
            color={"lightGreen"}
            fontWeight={"bold"}
            fontSize={"24px"}
            textAlign={"center"}
            width={"200px"}
            padding={"10px 0 0 0"}
          >
            All time popular
          </Span>
          <Row
            justify={"flex-end"}
            align={"center"}
            width={"auto"}
            height={"auto"}
            padding={"5px 15px"}
            wrap={"wrap"}
          >
            <Span fontSize={"18px"} margin={"0 10px 0 0"}>
              Search anime{" "}
            </Span>
            <Search
              placeholder="naruto"
              background={"white"}
              focusBackground={"#E8F9FD"}
              width={"200px"}
              padding={"5px 10px"}
              type="text"
              onChange={(e) =>
                dispatch({ type: "SET_SEARCH_ANIME", payload: e.target.value })
              }
            ></Search>
          </Row>
        </Row>
        {/* End of Navbar */}
        <Column
          width={"75%"}
          height={"auto"}
          position={"relative"}
          border={"1px solid gray"}
          overflowY={"scroll"}
        >
          <Row
            wrap={"wrap"}
            justify={"flex-start"}
            align={"flex-start"}
            width={"100%"}
          >
            {anime_list.length > 0 ? (
              anime_list.map((anime, index) => {
                return (
                  <Card
                    data={{
                      bannerImage: anime.bannerImage,
                      coverImage: anime?.coverImage?.large,
                      title: anime.title.userPreferred,
                      averageScore: anime.averageScore,
                      id: anime.id,
                      season: anime.season,
                      seasonYear: anime.seasonYear,
                      format: anime.format,
                      genres: anime.genres,
                      episodes: anime.episodes,
                      studio: anime?.studios?.edges[0]?.node.name,
                    }}
                    key={index}
                    size={"big"}
                  />
                );
              })
            ) : (
              <>Querying</>
            )}
          </Row>
          {anime_list.length > 0 && <Pagination />}
        </Column>
      </Column>
    </Column>
  );
}

export default List;
