import React,{useEffect, useState} from 'react'
import {
  Row,
  Column,
  Button,
  Search,
  Line,
  Profile,
  Span,
  Image,
  Select,
  Option,
} from "../../styled/AppStyled";
import {appContext} from "../../store"
import {useContext} from "react"
import Anime from '../anime/Anime';
function List() {
  const [state, dispatch] = useContext(appContext)
  const {page:currentPage,search:toSearch,anime_list} = state
  const [page, setPage] = useState(1)
  const [genre, setGenre] = useState("")
  const [year, setYear] = useState(new Date().getFullYear())
  const [search, setSearch] = useState("")

  const handlePage = (page) => {
    setPage(page)
  }
  useEffect(() => {
    console.log(anime_list);
  }, [anime_list]);
  return <Column background={"#202020"} position={"relative"}>
    <Row wrap={"wrap"}>
      {
        // anime_list.length > 0
         true ?
        Array(10).fill('').map((anime,index)=>{
          return <Anime size={"big"}/>;
        })
        : <>Querying</>
          
      }
    </Row>
  </Column>;
}

export default List