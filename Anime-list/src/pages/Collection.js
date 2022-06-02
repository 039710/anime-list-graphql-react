import React, { useEffect, useState } from "react";
import Navbar from "../components/headerbar/Navbar";
import {
  Row,
  Column,
  Badge,
  Modal,
  Span,
  Line,
  Search,
} from "../styled/AppStyled";
import { appContext } from "../store";
import { useContext } from "react";
import Card from "../components/anime/Card";
import Pagination from "../components/pagination/Pagination";
import { useLocation } from "react-router-dom";
function Collection() {
  const location = useLocation();
  const [state, dispatch] = useContext(appContext);
  const { collection } = state;
  const [collectionName, setCollectionName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [newName, setNewName] = useState("");

  // Edit collection name
  const handleEdit = () => {
    const newCollection = [...collection];
    // check if special chars exist
    if (newName.match(/[^a-zA-Z0-9 ]/g)) {
      return alert("Special characters are not allowed");
    } else if (newName == "") {
      return alert("Please enter a name");
    }
    if (newCollection.find((item) => item.name == newName)) {
      return alert("Collection name already exist");
    }
    newCollection[currentIndex].name = newName;
    dispatch({ type: "SET_COLLECTION", payload: newCollection });

    localStorage.setItem("collection", JSON.stringify(newCollection));
    setNewName("");
    setCollectionName(newName);
    setShowModalEdit(false);
  };

  // Remove anime in collection
  const handleRemoveData = (id) => {
    const newData = collection[currentIndex].data.filter(
      (item) => item.id !== id
    );
    const newCollection = { ...collection[currentIndex], data: newData };
    const newCollectionList = [...collection];
    newCollectionList[currentIndex] = newCollection;
    dispatch({ type: "SET_COLLECTION", payload: newCollectionList });
    localStorage.setItem("collection", JSON.stringify(newCollectionList));
  };

  useEffect(() => {
    let index = location.pathname.split("/")[2];
    console.log("ini index", index);
    setCurrentIndex(index);
    setCollectionName(collection[index]?.name);
  }, [location]);

  useEffect(() => {
    let index = location.pathname.split("/")[2];
    console.log("ini index", index);
    setCurrentIndex(index);
    setCollectionName(collection[index]?.name);
  });

  return (
    <Column padding={"0px"}>
      <Navbar />
      <Modal
        background={"white"}
        width={"400px"}
        height={"25%"}
        show={showModalEdit}
      >
        <Column>
          <Span
            fontSize={"24px"}
            fontWeight={"bold"}
            color={"lightGray"}
            margin={"24px"}
            textAlign={"center"}
          >
            Edit collection
          </Span>
          <Line height={"0px"} margin={"20px 0"} />
          <Row>
            <Span fontSize={"17px"} color={"lightGray"} padding={"5px 0 0 0"}>
              New name :
            </Span>
            <Search
              placeholder={collectionName}
              value={newName}
              width={"300px"}
              onChange={(e) => setNewName(e.target.value)}
            />
          </Row>
          <Row justify={"center"}>
            <Badge
              color={"white"}
              fontWeight={"bold"}
              background={"gray"}
              padding={"5px 10px"}
              onClick={(e) => setShowModalEdit(false)}
            >
              Cancel
            </Badge>
            <Badge
              color={"white"}
              fontWeight={"bold"}
              background={"lightGreen"}
              padding={"5px 15px"}
              onClick={handleEdit}
            >
              Edit
            </Badge>
          </Row>
        </Column>
      </Modal>
      {collection.length > 0 ? (
        <Column
          background={"#E8F9FD"}
          justify={"flex-start"}
          align={"center"}
          padding={"0px"}
          height={"100%"}
        >
          <Row width={"auto"} align={"center"} justify={"center"}>
            <Span
              textAlign={"center"}
              width={"100%"}
              fontWeight={"bold"}
              color={"lightGreen"}
              fontSize={"24px"}
              margin={"20px 0"}
            >
              Saved Anime in {collectionName}
            </Span>
            <Badge
              color={"white"}
              fontWeight={"bold"}
              background={"lightGreen"}
              padding={"5px 15px"}
              margin={"0px 0px 0px 20px"}
              onClick={(e) => setShowModalEdit(true)}
            >
              Edit
            </Badge>
          </Row>
          <Row
            background={"#E8F9FD"}
            justify={"center"}
            padding={"20px 5px"}
            width={"75%"}
          >
            <Column width={"auto"} background={"white"}>
              <Line height={"0px"} margin={"10px 0"} />
              <Column justify={"center"} align={"center"}>
                <Span fontSize={"24px"} fontWeight={"bold"}>
                  <Column
                    width={"100%%"}
                    height={"auto"}
                    position={"relative"}
                    // border={"1px solid gray"}
                    overflowY={"scroll"}
                  >
                    <Row
                      wrap={"wrap"}
                      justify={"flex-start"}
                      align={"flex-start"}
                      width={"100%"}
                    >
                      {collection[currentIndex]?.data.length != 0 ? (
                        collection[currentIndex]?.data.map((anime, index) => {
                          return (
                            <Card
                              data={{
                                bannerImage: anime.bannerImage,
                                coverImage: anime.coverImage,
                                title: anime.title,
                                averageScore: anime.averageScore,
                                id: anime.id,
                                season: anime.season,
                                seasonYear: anime.seasonYear,
                                format: anime.format,
                                genres: anime.genres,
                                episodes: anime.episodes,
                                studio: anime?.studio,
                              }}
                              key={index}
                              remove={true}
                              handleRemoveItem={(e) =>
                                handleRemoveData(anime.id)
                              }
                            />
                          );
                        })
                      ) : (
                        <Column border={"none"}>-</Column>
                      )}
                    </Row>
                    {/* {collection.length > 0 && <Pagination />} */}
                  </Column>
                </Span>
              </Column>
            </Column>
          </Row>
        </Column>
      ) : (
        <Column justify={"center"} align={"center"} background={"#E8F8F9FD"}>
          <Span fontSize={"24px"} fontWeight={"bold"}>
            Empty
          </Span>
        </Column>
      )}
    </Column>
  );
}

export default Collection;
