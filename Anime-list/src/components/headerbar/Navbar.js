import React,{useEffect,useState} from 'react'
import {Row,ItemLink} from "../../styled/AppStyled"
import { useLocation,useNavigate } from "react-router-dom";

function Navbar() {  
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const navigator = useNavigate();
  useEffect(()=>{
  },[])
  return (
    <Row
      background={"white"}
      height={"50px"}
      justify={"center"}
      align={"center"}
    >
      <ItemLink
        margin={"0 20px"}
        fontWeight={"bold"}
        fontSize={"18px"}
        hoverColor={"lightGreen"}
        onClick={(e) => navigator("/")}
        color={location.pathname == "/" ? "lightGreen" : "grey"}
      >
        {" "}
        Home
      </ItemLink>
      <ItemLink
        fontWeight={"bold"}
        fontSize={"18px"}
        hoverColor={"lightGreen"}
        color={location.pathname == "/collection" ? "lightGreen" : "grey"}
        onClick={(e) => navigator("/collection")}
      >
        {" "}
        Your collections
      </ItemLink>
    </Row>
  );
}

export default Navbar