import React, { useEffect } from 'react'
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
import {generateProfilePict} from "../../helper/generateProfilePict";
import Anime from "../anime/Anime";
function Sidebar() {
  const [srcProfilePict, setSrcProfilePict] = React.useState(null);
  useEffect(() => {
    const src = generateProfilePict();
    setSrcProfilePict(src);
  },[])
  return (
    <Column width={"25%"} background={"black"} overflowY={"scroll"}>
      <Row
        width={"100%"}
        height={"auto"}
        padding={"20px 0px"}
        justify={"space-around"}
        align={"center"}
      >
        <Row justify={"space-around"} align={"center"}>
          <Search
            height={"30px"}
            width={"200px"}
            background={"lightGrey"}
            focusBackground={"white"}
            placeholder={"Search Anime ... "}
          />
        </Row>
        <Profile
          width={"100px"}
          height={"75px"}
          src={srcProfilePict ? srcProfilePict : "https://i.pravatar.cc/300"}
        />
      </Row>
      <Line color={"lightGray"} height={"0px"} width={"100%"} />

        <Span
          color={"white"}
          fontSize={"24px"}
          margin={"10px 0px 10px 10px"}
          fontWeight={"bolder"}
        >
          Top 10 most popular
        </Span>
      <Column padding={"10px 0px 0px 0px"} overflowY={"scroll"} height={"800px"}>
        {/* anime-item */}
        <Anime size={"small"} />
      </Column>
    </Column>
  );
}

export default Sidebar