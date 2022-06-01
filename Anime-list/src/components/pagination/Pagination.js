import React,{useState,useEffect} from 'react'
import { appContext } from "../../store";
import {Row,Button,Search,Span,Column} from "../../styled/AppStyled"
import {useContext } from "react"
function Pagination() {
  const [state, dispatch] = useContext(appContext);
  const { page: currentPage, pageInfo } = state;
  const handlePage = (page) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };
  return (
    <Row
      height={"auto"}
      justify={"center"}
      align={"center"}
      padding={"10px 0px"}
      margin={"10px 0px"}
    >
      <Button
        background={"#202020"}
        color={"white"}
        fontSize={"16px"}
        fontWeight={"bolder"}
        padding={"10px 20px"}
        margin={"0px 10px"}
        onClick={() => handlePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </Button>
      {pageInfo.total > 1 && (
        // create go to page
        <Column width={"auto"} height={"auto"}>
          <Row height={"auto"} width={"auto"} justify={"center"}>
            <Span fontSize={"20px"} color={"grey"} width={"auto"}>
              Go To Page
            </Span>
            <Search
              type="number"
              name="goto"
              value={currentPage}
              background={"lightGrey"}
              color={"lightGreen"}
              focusBackground={"white"}
              onChange={(e) => handlePage(e.target.value)}
              width={"150px"}
              padding={"5px"}
              fontWeight={"bold"}
            />
          </Row>
        </Column>
      )}

      <Button
        background={"#202020"}
        color={"white"}
        fontSize={"16px"}
        fontWeight={"bolder"}
        padding={"10px 20px"}
        margin={"0px 10px"}
        onClick={() => handlePage(currentPage + 1)}
      >
        {">"}
      </Button>
      <Span
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"14px"}
        padding={"10px"}
      >
        {currentPage} out of {pageInfo.total} pages
      </Span>
    </Row>
  );
}

export default Pagination