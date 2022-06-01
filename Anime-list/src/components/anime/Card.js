import React, { useEffect, useState } from "react";
import {
  Row,
  Column,
  Button,
  Line,
  Add,
  Span,
  Image,
  MoreInfo,
  Badge,
  Modal,
  Search,
} from "../../styled/AppStyled";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../store";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
function Card({ remove, data, handleRemoveItem }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [state, dispatch] = useContext(appContext);
  const navigator = useNavigate();
  const { collection } = state;
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [savedIn, setSavedIn] = useState([]);
  const {
    bannerImage,
    episodes,
    title,
    id,
    season,
    seasonYear,
    genres,
    studio,
    coverImage,
  } = data;

  const [toggleCreate, setToggleCreate] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  const handleNavigate = (id) => {
    navigator("/detail/" + id);
  };
  const handleAdd = (index) => {
    // check if collection exist or not
    const newCollection = [...collection];

    // check if anime already exist
    const animeIndex = newCollection[index].data.findIndex(
      (anime) => anime.id === data.id
    );
    if (animeIndex === -1) {
      newCollection[index].data.push(data);
      dispatch({
        type: "SET_COLLECTION",
        payload: newCollection,
      });
      alert("Added in collection");
    } else {
      alert("Anime already exist in this collection");
    }
    setShowModal(false);
    localStorage.setItem("collection", JSON.stringify(newCollection));
  };

  const handleAddCollection = () => {
    // check if collectionName already exist
    const newCollection = [...collection];
    const collectionIndex = newCollection.findIndex(
      (collection) => collection.name === collectionName
    );
    if (collectionName.match(/[^a-zA-Z0-9 ]/g)) {
      return alert("Special characters are not allowed");
    } else if (collectionName == "") {
      return alert("Please enter collection name");
    }
    if (collectionIndex === -1) {
      const newCollection = {
        name: collectionName,
        data: [data],
      };
      dispatch({ type: "ADD_COLLECTION", payload: newCollection });
      setShowModal(false);
      alert("successfully added to your collection");
      localStorage.setItem("collection", JSON.stringify(newCollection));
    } else {
      // setShowModal(false);
      alert("Collection already exist");
    }
  };
  useEffect(() => {
    // check if anime already exist in collection
    const collectionsName = [];
    const temp = collection.filter(
      (collection) =>
        collection.data.findIndex((anime) => anime.id === data.id) > -1
    );
    if (temp.length !== 0) {
      temp.forEach((collection, index) => {
        collectionsName.push(collection.name);
      });
      setSavedIn([...collectionsName]);
      // const name = collection[animeIndex].name;
      // const newSavedIn = [...savedIn];
      // newSavedIn.push(name);
      // setSavedIn(newSavedIn);
    }
  }, [collection]);
  return (
    <>
      <Modal show={showModal} width={"500px"} overflowY={"scorll"}>
        <Span
          fontSize={"24px"}
          fontWeight={"bold"}
          color={"white"}
          textAlign={"center"}
          margin={"20px 0"}
        >
          Add to collection
        </Span>
        <Line height={"0px"} margin={"10px 0"} />
        <Column
          width={"100%"}
          background={"white"}
          margin={"0 10px 0 0"}
          padding={"0px"}
          height={"500px"}
        >
          <Span
            textAlign={"center"}
            width={"100%"}
            fontWeight={"bold"}
            color={"lightGray"}
            fontSize={"20px"}
            padding={"20px"}
          >
            Choose yours collections
          </Span>
          {collection.length !== 0 ? (
            <>
              <Line height={"0px"} margin={"10px 0"} />
              <Column height={"400px"} overflowY={"scroll"}>
                {collection.map((item, index) => {
                  return (
                    <Row
                      cursor={"pointer"}
                      onClick={(e) => handleAdd(index)}
                      width={"auto"}
                      height={"auto"}
                      key={index}
                    >
                      <Span
                        textAlign={"center"}
                        color={"gray"}
                        fontSize={"18px"}
                        margin={"0px 10px"}
                      >
                        {index + 1}.
                      </Span>
                      <Span
                        textAlign={"center"}
                        color={"gray"}
                        fontSize={"18px"}
                      >
                        Collection{" "}
                        <Span fontSize={"18px"} fontWeight={"bold"}>
                          {item.name}
                        </Span>
                      </Span>
                    </Row>
                  );
                })}
                <Line height={"0px"} margin={"10px 0"} />
              </Column>
            </>
          ) : collection.length === 1 ? (
            <>Successfully added to your collection</>
          ) : (
            <Column>
              <Span
                textAlign={"center"}
                width={"100%"}
                margin={"20px 0"}
                color={"lightGray"}
                fontSize={"18px"}
              >
                You have no collections, create one before adding
              </Span>
              <Row>
                <Span
                  textAlign={"center"}
                  width={"auto"}
                  padding={"5px 0"}
                  color={"lightGray"}
                  fontSize={"18px"}
                >
                  Collection name :
                </Span>
                <Search
                  type="text"
                  placeholder="sci-fi"
                  width={"200px"}
                  onChange={(e) => setCollectionName(e.target.value)}
                />
                <Button onClick={handleAddCollection}>Create and add</Button>
              </Row>
            </Column>
          )}
          {toggleCreate && (
            <>
              <Row>
                <Span
                  textAlign={"center"}
                  width={"auto"}
                  padding={"5px 0"}
                  color={"lightGray"}
                  fontSize={"18px"}
                >
                  Collection Name :
                </Span>
                <Search
                  type="text"
                  placeholder="sci-fi"
                  width={"200px"}
                  onChange={(e) => setCollectionName(e.target.value)}
                />
                <Button onClick={handleAddCollection}>Create and add</Button>
              </Row>
            </>
          )}
          <Line height={"0px"} margin={"10px 0"} />
          <Row justify={"space-between"}>
            <Button onClick={(e) => setShowModal(false)}>Close</Button>
            {!toggleCreate && (
              <Button margin={"0 5px"} onClick={(e) => setToggleCreate(true)}>
                Create new collection?
              </Button>
            )}
          </Row>
        </Column>
      </Modal>
      <Row
        justify={"flex-start"}
        align={"flex-start"}
        height={"380px"}
        width={"auto"}
        margin={"0px 0px 5px 0px"}
      >
        <Column height={"340px"} width={"230px"} onMouseLeave={handleHide}>
          <Image
            src={coverImage}
            width={"250px"}
            height={"250px"}
            onMouseEnter={handleShow}
          />
          <Span
            margin={"10px 0 0 10px"}
            color={"lightGray"}
            fontWeight={"bold"}
            fontSize={"18px"}
            cursor={"pointer"}
            textAlign={"center"}
            onClick={(e) => navigator(`/detail/${id}`)}
          >
            {title.length > 20 ? title.substring(0, 20) + "..." : title}
          </Span>
          {!remove ? (
            <Add
              hoverBackground={"grey"}
              hoverColor={"black"}
              onClick={(e) => setShowModal(true)}
            >
              Add to collection
            </Add>
          ) : (
            <Add
              hoverBackground={"grey"}
              hoverColor={"black"}
              background={"#E8F8F9FD"}
              onClick={handleRemoveItem}
            >
              Remove from collection
            </Add>
          )}

          {/*  */}
          <MoreInfo show={show}>
            <Column
              width={"100%"}
              height={"100%"}
              overflowY={"hidden"}
              justify={"flex-start"}
              align={"flex-start"}
              padding={"0px"}
            >
              <Span
                fontWeight={"bold"}
                color={"black"}
                textAlign={"center"}
                fontSize={"18px"}
              >
                {title}
              </Span>
              <Line
                width={"100%"}
                height={"0px"}
                color={"lightGray"}
                margin={"5px 0px"}
              />
              <Row width={"100%"} height={"auto"}>
                <Span fontWeight={"bold"} color={"black"}>
                  {" "}
                  {season}
                </Span>
                <Span fontWeight={"bold"} color={"black"}>
                  {" "}
                  {seasonYear}
                </Span>
              </Row>
              <Row width={"100%"} height={"auto"}>
                <Span fontWeight={"bold"} color={"black"}>
                  {studio}
                </Span>
              </Row>
              <Row width={"100%"} height={"auto"}>
                <Span fontWeight={"bold"} color={"black"}>
                  Total Episodes : {episodes}
                </Span>
              </Row>
              <Line
                width={"100%"}
                height={"0px"}
                color={"lightGray"}
                margin={"5px 0px"}
              />
              <Row width={"100%"} height={"auto"} wrap={"wrap"}>
                {genres.map((genre, index) => (
                  <Badge
                    key={index}
                    margin={"25px"}
                    color={"white"}
                    fontSize={"14px"}
                    background={"black"}
                    width={"auto"}
                  >
                    {genre}
                  </Badge>
                ))}
              </Row>
              <Line
                width={"100%"}
                height={"0px"}
                color={"lightGray"}
                margin={"10px 0px"}
              />
              {savedIn.length !== 0 && (
                <Span color={"black"} fontWeight={"bold"}>
                  Saved in collections :{" "}
                </Span>
              )}
              {savedIn.length !== 0 && (
                <Row padding={"0px"} wrap={"wrap"} width={"100%"}>
                  {savedIn.map((item, index) => (
                    <div key={index}>
                      <Badge
                        background={"lightblue"}
                        color={"black"}
                        width={"auto"}
                        margin={"5px"}
                        onClick={(e) => navigator(`/collection/${item}`)}
                      >
                        {item}
                      </Badge>
                    </div>
                  ))}
                </Row>
              )}

              <Row justify={"center"} width={"100%"}>
                <Button
                  color={"lightGreen"}
                  onClick={(e) => handleNavigate(id)}
                  padding={"1px 15px"}
                  right={"0px"}
                  left={"0px"}
                  width={"100%"}
                >
                  Details
                </Button>
              </Row>
            </Column>
          </MoreInfo>
        </Column>
      </Row>
    </>
  );
}

export default Card;
