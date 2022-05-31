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
function List(props) {
  const [state, dispatch] = useContext(appContext)
  const {page:currentPage,search:toSearch,anime_list,pageInfo} = state
  const [genre, setGenre] = useState("")
  const [year, setYear] = useState(new Date().getFullYear())
  const [search, setSearch] = useState("")

  const handlePage = (page) => {
    dispatch({"type":"SET_PAGE",payload:page})
  }
  useEffect(() => {
    console.log(anime_list,'123')
  }, [anime_list]);


  return (
    <Column background={"#202020"} position={"relative"}>
      <Span
        color={"lightGreen"}
        fontWeight={"bold"}
        fontSize={"24px"}
        textAlign={"center"}
        padding={"20px 0"}
      >
        All time popular
      </Span>
      <Column wrap={"wrap"} justify={"flex-start"} align={"flex-start"}>
        {anime_list.length > 0 ? (
          anime_list.map((anime, index) => {
            console.log(anime, index);
            return (
              <Anime
                data={{
                  bannerImage: anime.bannerImage,
                  title: anime.title.userPreferred,
                  averageScore: anime.averageScore,
                }}
                key={index}
                size={"big"}
              />
            );
          })
        ) : (
          <>Querying</>
        )}
      </Column>
      {anime_list.length > 0 && (
        // Pagination
        <Row
          height={"auto"}
          justify={"center"}
          align={"center"}
          padding={"10px 0px"}
          margin={"10px 0px"}
        >
          <Button
            background={"#202020"}
            color={"lightGreen"}
            fontSize={"16px"}
            fontWeight={"bold"}
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
                <Span fontSize={"20px"} color={"white"} width={"auto"}>
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
            color={"lightGreen"}
            fontSize={"16px"}
            fontWeight={"bold"}
            padding={"10px 20px"}
            margin={"0px 10px"}
            onClick={() => handlePage(currentPage + 1)}
          >
            {">"}
          </Button>
        </Row>
      )}
      <Span textAlign={"center"} fontWeight={"bold"} fontSize={"14px"} padding={"10px"}>
        {currentPage} out of {pageInfo.total} pages
      </Span>
    </Column>
  );
}

export default List