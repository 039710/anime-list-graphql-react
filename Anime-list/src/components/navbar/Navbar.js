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
  Nav,
  ItemLink,
  Option,
  Select,
} from "../../styled/AppStyled";
import StarRatings from "react-star-ratings";
import { generateProfilePict } from "../../helper/generateProfilePict";
import { Link } from "react-router-dom";
import Logo from "../../asset/anime-logo.png";
function Navbar() {
  return (
    //
    <Column
      width={"20%"}
      background={"black"}
      letterSpacing={"2px"}
      padding={"0px 20px 0px 20px"}
    >
      <Column padding={"35px 0px"} height={"auto"}>
        <Row padding={"0px"} align={"center"}>
          <Image src={Logo} borderRadius={"50%"} width={75}></Image>
          <Column padding={"0 0 0 10px"} justify={"center"} height={"100%"}>
            <Span color={"lightGreen"} fontSize={"20px"} fontWeight={"bolder"}>
              AnimeKu
            </Span>
            <Span color={"white"} margin={"5px 0"}>
              Update your anime list!
            </Span>
          </Column>
        </Row>
      </Column>

      <Line
        margin={"20px 0"}
        color={"lightGray"}
        height={"0px"}
        width={"100%"}
      />
      <ItemLink
        href="/"
        color={true ? "lightGreen" : "white"}
        fontWeight={"lighter"}
        fontSize={"18px"}
        hoverColor={"lightGreen"}
        margin={"12px 0px"}
        active={true}
      >
        Trending
      </ItemLink>
      <ItemLink
        href="/collection"
        color={false ? "lightGreen" : "white"}
        fontWeight={"lighter"}
        fontSize={"18px"}
        hoverColor={"lightGreen"}
        margin={"12px 0px"}
        // active={false}
      >
        Your Collections
      </ItemLink>
      <Line margin={"20px 0"} color={"lightGray"} height={"0px"} />
      <Span color={"white"}  fontWeight={"light"} fontSize={"18px"}>
        Filter : 
      </Span>
      <Column justify={"baseline"} align={"center"} padding={"0"}>
        <Column height={"auto"} padding={0}>
          <Span margin={"5px 0"} color={"white"}>
            Search title
          </Span>
          <Search
            placeholder="title ..."
            width={"190px"}
            background={"lightGrey"}
            focusBackground={"white"}
          />
        </Column>
        <Column height={"auto"} padding={0}>
          <Span margin={"5px 0"} color={"white"}>
            Year
          </Span>
          <Select
            width={"200px"}
            background={"lightGrey"}
            focusBackground={"white"}
          >
            <Option>2022</Option>
            <Option>2021</Option>
            <Option>2020</Option>
            <Option>2019</Option>
            <Option>2018</Option>
          </Select>
        </Column>
        <Column height={"auto"} padding={0}>
          <Span margin={"5px 0"} color={"white"}>
            Season
          </Span>
          <Select
            width={"200px"}
            background={"lightGrey"}
            focusBackground={"white"}
          >
            <Option>Winter</Option>
            <Option>Spring</Option>
            <Option>Summer</Option>
            <Option>Fall</Option>
          </Select>
        </Column>
        <Column height={"auto"} padding={0}>
          <Span margin={"5px 0"} color={"white"}>
            Airing Status
          </Span>

          <Select
            width={"200px"}
            background={"lightGrey"}
            focusBackground={"white"}
          >
            <Option>Airing</Option>
            <Option>Finished</Option>
            <Option>Not Yet Aired</Option>
            <Option>Cancelled</Option>
          </Select>
        </Column>
      </Column>
    </Column>
  );
}

export default Navbar;
