import React, { useEffect } from "react";
import {
  Row,
  Column,
  Button,
  Search,
  Line,
  Profile,
  Span,
  Image,
} from "../../styled/AppStyled";
import StarRatings from "react-star-ratings";

function Anime({size}) {
  console.log(size)
  return (
    <>
      {size === "small" ? (
        <Row justify={"center"} align={"center"} height={"180px"}>
          <Column height={"auto"}>
            <Image
              src={
                "https://i1.wp.com/oploverz.asia/wp-content/uploads/2022/04/Tate-no-Yuusha-no-Nariagari-S2.jpg"
              }
              width={"130px"}
              height={"165px"}
            />
          </Column>
          <Column height={"100%"} padding={"10px 0 0 0"}>
            <Span
              cursor={"pointer"}
              fontSize={"18px"}
              fontWeight={"bold"}
              color={"white"}
            >
              Tate no Yuusha no Nariagari S2
            </Span>
            <Span color={"lightGray"} fontSize={"14px"} margin={"5px 0px"}>
              Action, Comedy, Drama, Sci-fi
            </Span>
            <StarRatings
              rating={3.5}
              starRatedColor="yellow"
              starEmptyColor="grey"
              numberOfStars={5}
              name="rating"
              starSpacing="2.5px"
              starDimension="25px"
            />
          </Column>
        </Row>
      ) : (
        <Row justify={"flex-start"} height={"280px"} width={"auto"}>
          <Column height={"auto"}>
            <Image
              src={
                "https://i1.wp.com/oploverz.asia/wp-content/uploads/2022/04/Tate-no-Yuusha-no-Nariagari-S2.jpg"
              }
              width={"180px"}
              height={"215px"}
            />
            <Span
              margin={"2px 0 0 10px"}
              color={"white"}
              fontWeight={"bold"}
              fontSize={"18px"}
              cursor={"pointer"}
            >
              Tate no yuusha s2
            </Span>
            <Span
              margin={"2px 0 0 10px"}
              color={"lightGreen"}
              fontWeight={"bold"}
            >
              Bandai Namco
            </Span>
            <Span margin={"2px 0 0 10px"} color={"lightGray"}>
              Comedy, Drama, Sci-fi
            </Span>
            <Row padding={"0"}>
              <Span margin={"2px 0 0 10px"} color={"lightGray"}>
                Movie
              </Span>
              <Span margin={"2px 0 0 10px"} color={"lightGray"}>
                1h 30m
              </Span>
            </Row>
          </Column>
        </Row>
      )}
    </>
  );
}

export default Anime;
