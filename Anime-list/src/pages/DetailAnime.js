import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { appContext } from "../store";
import { useContext } from "react";
import { useQuery } from "@apollo/client";
import Navbar from "../components/headerbar/Navbar";
import { DETAIL } from "../graphql/query/detail";
import {
  Row,
  Column,
  Button,
  Search,
  Line,
  ItemLink,
  Span,
  Image,
  Modal,
  Banner,
  Badge,
} from "../styled/AppStyled";
function DetailAnime() {
  const [state, dispatch] = useContext(appContext);
  const { anime_detail } = state;
  const location = useLocation();
  const { loading, error, data, refetch } = useQuery(DETAIL, {
    variables: {
      id: location.pathname.split("/")[2],
      type: "ANIME",
    },
  });
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_ANIME_DETAIL", payload: data.Media });
    }
  }, [data]);
  return (
    <Column
      background={"darkGray"}
      height={"100%"}
      width={"100%"}
      color={"lightGray"}
      padding={"0px"}
    >
      <Navbar />
      {/* Banner */}
      {!loading && !error && data && (
        <Column
          width={"100%"}
          height={"auto"}
          padding={"0px"}
          background={"white"}
        >
          <Banner src={anime_detail.bannerImage} opacity={0.8} />
          <Row padding={"-60px auto"} position={"relative"} width={"100%"}>
            <Image
              src={anime_detail?.coverImage?.large}
              height={"250px"}
              width={"200px"}
              top={"-60px"}
              left={"10px"}
            />
            <Column padding={"20px 20px"} width={"100%"}>
              <Span fontSize={"24px"} fontWeight={"bold"}>
                {anime_detail?.title?.userPreferred}
              </Span>
              <Span fontSize={"18px"} margin={"5px 0px"} fontStyle={"italic"}>
                {anime_detail?.title?.userPreferred + " "}
                <Span fontSize={"18px"} margin={"5px 0px"}>
                  {anime_detail?.description?.split("</i>")[1]}
                </Span>
              </Span>
              <Row wrap={"wrap"}>
                <Span margin={"5px 5px"}>
                  Duration : {anime_detail.duration + "mins"}
                </Span>
                <Span margin={"5px 5px"}>
                  Episode : {anime_detail.episodes}
                </Span>
              </Row>
              <Row wrap={"wrap"}>
                <Span margin={"5px 5px"}>Status : {anime_detail.status}</Span>
                <Span margin={"5px 5px"}>
                  Score : {anime_detail.averageScore}
                </Span>
              </Row>
              <Row wrap={"wrap"}>
                <Span margin={"5px 5px"}>
                  Country Origin : {anime_detail.countryOfOrigin}
                </Span>
                <Span margin={"5px 5px"}>
                  Studio : {anime_detail?.studios?.edges[0].node.name}
                </Span>
              </Row>
            </Column>
          </Row>
          {/* List of all Character */}
          <Column overflowY={"scroll"} height={"auto"}>
            <Span fontWeight={"bold"} fontSize={"20px"} margin={"5px 5px"}>
              Characters
            </Span>
            <Row wrap={"wrap"}>
              {anime_detail?.characterPreview?.edges.map((item, index) => {
                return (
                  <Row key={item.id} width={"auto"}>
                    <Image
                      src={item.node.image?.large}
                      width={"100px"}
                      height={"100px"}
                    />
                    <Column padding={"5px"} width={"300px"} height={"100%"}>
                      <Span margin={"5px 5px"}>Role : {item.role}</Span>
                      <Span margin={"5px 5px"}>
                        Name : {item.node?.name?.userPreferred}
                      </Span>
                    </Column>
                  </Row>
                );
              })}
            </Row>
          </Column>
          {/* Add to list */}
          {/* <Row padding={"20px"}>
            <Button
              background={"#f5f5f5"}
              color={"black"}
              width={"100px"}
              height={"40px"}
              margin={"5px"}
              >
                Add to collection
              </Button>
            </Row> */}
        </Column>
      )}
    </Column>
  );
}

export default DetailAnime;
