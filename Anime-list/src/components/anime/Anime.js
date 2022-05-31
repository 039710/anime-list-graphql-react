import React, { useEffect,useState } from "react";
import {
  Row,
  Column,
  Button,
  Search,
  Line,
  Profile,
  Span,
  Image,
  Modal,
  Badge
} from "../../styled/AppStyled";
import StarRatings from "react-star-ratings";

function Anime({size,data}) {
  const {bannerImage,averageScore,title} = data;
  const [show,setShow] = useState(false);
  const handleShow = () => {
    setTimeout(()=>{
      setShow(true);
    },100)
  }
  const handleHide = () => {
    setTimeout(() => {
      setShow(false);
    }, 200);
  }
  return (
    <>
      {size === "small" ? (
        <Row justify={"center"} align={"center"} height={"180px"}>
          <Column height={"auto"}>
            <Image src={bannerImage} width={"130px"} height={"165px"} />
          </Column>
          <Column height={"100%"} padding={"10px 0 0 0"}>
            <Span
              cursor={"pointer"}
              fontSize={"18px"}
              fontWeight={"bold"}
              color={"white"}
            >
              {title}
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
        <Row
          justify={"flex-start"}
          align={"flex-start"}
          height={"380px"}
          width={"auto"}
        >
          <Column height={"auto"} width={"230px"} onMouseLeave={handleHide}>
            <Image
              src={bannerImage}
              width={"250px"}
              height={"210px"}
              onMouseEnter={handleShow}
            />
            <Span
              margin={"2px 0 0 10px"}
              color={"white"}
              fontWeight={"bold"}
              fontSize={"18px"}
              cursor={"pointer"}
              textAlign={"center"}
            >
              {title}
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
            <Row padding={"0"} justify={"space-around"}>
              <Span margin={"2px 0 0 10px"} color={"lightGray"}>
                Movie
              </Span>
              <Span margin={"2px 0 0 10px"} color={"lightGray"}>
                1h 30m
              </Span>
            </Row>
            {/*  */}
            <Modal show={show}>
              <Column
                width={"100%"}
                height={"auto"}
                overflowY={"hidden"}
                justify={"flex-start"}
                align={"flex-start"}
              >
                <Span
                  fontWeight={"bold"}
                  color={"lightGreen"}
                  textAlign={"center"}
                  fontSize={"22px"}
                >
                  {" "}
                  Tate no yuusha
                </Span>
                <Line
                  width={"100%"}
                  height={"0px"}
                  color={"lightGray"}
                  margin={"10px 0px"}
                />
                <Row width={"100%"} height={"auto"}>
                  <Span fontWeight={"bold"} color={"lightGreen"}>
                    {" "}
                    Winter
                  </Span>
                  <Span fontWeight={"bold"} color={"lightGreen"}>
                    {" "}
                    2022
                  </Span>
                </Row>
                <Row width={"100%"} height={"auto"}>
                  <Span fontWeight={"bold"} color={"lightGreen"}>
                    {" "}
                    Mappa
                  </Span>
                </Row>
                <Line
                  width={"100%"}
                  height={"0px"}
                  color={"lightGray"}
                  margin={"20px 0px"}
                />
                <Row width={"100%"} height={"auto"}>
                  <Badge
                    fontWeight={"bold"}
                    color={"lightGray"}
                    background={"lightGreen"}
                    width={"auto"}
                  >
                    {" "}
                    asdasd
                  </Badge>
                  <Badge
                    fontWeight={"bold"}
                    color={"lightGray"}
                    background={"lightGreen"}
                    width={"auto"}
                  >
                    {" "}
                    asdasd
                  </Badge>
                </Row>
              </Column>
            </Modal>
          </Column>
        </Row>
      )}
    </>
  );
}

export default Anime;
