import React, { useState, useEffect } from "react";
import {
  Column,
  Row,
  Span,
  Banner,
  Badge,
  Line,
  Search,
  Button,
  Modal,
} from "../styled/AppStyled";
import { appContext } from "../store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/headerbar/Navbar";
function CollectionList() {
  const navigator = useNavigate();
  const [state, dispatch] = useContext(appContext);
  const { collection } = state;
  const [showModal, setShowModal] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [collectionName, setCollectionName] = useState("");
  const [newName, setNewName] = useState("");
  const defaultBanner =
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114129-ZsLDkdwaYeJY.jpg";

  const handleRemove = () => {
    if (selectedIndex !== null) {
      const newCollection = [...collection];
      newCollection.splice(selectedIndex, 1);
      dispatch({ type: "SET_COLLECTION", payload: newCollection });
      setSelectedIndex(null);
      setShowModal(false);
      localStorage.setItem("collection", JSON.stringify(newCollection));
      alert("Collection has been removed");
    }
  };
  const handleEdit = () => {
    const newCollection = [...collection];
    if (newName.match(/[^a-zA-Z0-9 ]/g)) {
      return alert("Special characters are not allowed");
    } else if (newName == "") {
      return alert("Please enter a name");
    }
    if (newCollection.find((item) => item.name === newName)) {
      alert("Collection name already exist");
    }
    newCollection[selectedIndex].name = newName;

    dispatch({ type: "SET_COLLECTION", payload: newCollection });
    localStorage.setItem("collection", JSON.stringify(newCollection));
    setNewName("");
    setSelectedIndex(null);
    setShowModalEdit(false);
  };
  const handleAddCollection = () => {
    // check if name already exist in collection
    const newCollection = [...collection];
    if (collectionName.match(/[^a-zA-Z0-9 ]/g)) {
      return alert("Special characters are not allowed");
    } else if (collectionName == "") {
      return alert("Please enter a name");
    }
    if (newCollection.find((item) => item.name === collectionName)) {
      return alert("Collection name already exist");
    }
    newCollection.push({
      name: collectionName,
      data: [],
    });
    dispatch({ type: "SET_COLLECTION", payload: newCollection });

    setCollectionName("");
    setShowModalAdd(false);
  };
  const openModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };
  const openModalEdit = (index) => {
    setSelectedIndex(index);
    setShowModalEdit(true);
  };

  return (
    <Column padding={"0px"}>
      <Navbar />
      <Modal
        background={"white"}
        width={"400px"}
        height={"20%"}
        show={showModal}
      >
        <Column padding={"0"}>
          <Span
            fontSize={"24px"}
            fontWeight={"bold"}
            color={"lightGray"}
            margin={"18px"}
            textAlign={"center"}
          >
            Are you sure want to delete this collection
          </Span>
          <Line height={"0px"} />
          <Row justify={"center"}>
            <Badge
              color={"white"}
              fontWeight={"bold"}
              background={"gray"}
              padding={"5px 10px"}
              onClick={(e) => setShowModal(false)}
            >
              Cancel
            </Badge>
            <Badge
              color={"white"}
              fontWeight={"bold"}
              background={"red"}
              padding={"5px 10px"}
              onClick={(e) => handleRemove()}
            >
              Remove
            </Badge>
          </Row>
        </Column>
      </Modal>
      <Modal
        background={"white"}
        width={"400px"}
        height={"220px"}
        show={showModalEdit}
      >
        <Column padding={"0"}>
          <Span
            fontSize={"24px"}
            fontWeight={"bold"}
            color={"lightGray"}
            margin={"24px"}
            textAlign={"center"}
          >
            Edit collection
          </Span>
          <Line height={"0px"} margin={"0"} />
          <Row padding={"20px 5px"}>
            <Span fontSize={"17px"} color={"lightGray"} padding={"5px 0 0 0"}>
              New name :
            </Span>
            <Search
              placeholder={collection[selectedIndex]?.name}
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
              onClick={(e) => handleEdit()}
            >
              Edit
            </Badge>
          </Row>
        </Column>
      </Modal>
      <Modal
        show={showModalAdd}
        width={"500px"}
        border={"1px solid black"}
        background={"white"}
      >
        <Span
          fontSize={"24px"}
          fontWeight={"bold"}
          color={"lightGreen"}
          textAlign={"center"}
          margin={"20px 0"}
        >
          Add new collection
        </Span>
        <Line height={"0px"} />
        <Column padding={"10px 0"} overflowX={"hidden"}>
          <Row padding={"0"}>
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
            <Button
              background={"lightGreen"}
              color={"white"}
              borderRadius={"15px"}
              padding={"5px 10px"}
              onClick={handleAddCollection}
            >
              Create and add
            </Button>
          </Row>
          <Button
            background={"grey"}
            color={"white"}
            borderRadius={"15px"}
            padding={"5px 10px"}
            onClick={(e) => {
              setShowModalAdd(false);
            }}
          >
            cancel
          </Button>
        </Column>
      </Modal>
      <Column
        padding={"0px"}
        background={"#E8F9FD"}
        align={"center"}
        justify={"center"}
      >
        {collection.length !== 0 && (
          <Row width={"auto"} justify={"space-around"} align={"center"}>
            <Span
              fontSize={"24px"}
              fontWeight={"bold"}
              color={"lightGreen"}
              margin={"28px"}
            >
              Your Collections
            </Span>
            <Badge
              color={"white"}
              fontWeight={"bold"}
              background={"lightGreen"}
              padding={"5px 10px"}
              onClick={(e) => {
                setShowModalAdd(true);
              }}
            >
              Add Collection
            </Badge>
          </Row>
        )}
        <Column padding={"10px"} width={"1000px"} overflowY={"scroll"}>
          {collection?.map((item, index) => {
            return (
              <Row
                width={"100%"}
                margin={"10px 0"}
                justify={"center"}
                align={"center"}
                key={index}
              >
                <Banner
                  height={"200px"}
                  src={
                    !item.data[0]?.bannerImage
                      ? defaultBanner
                      : item.data[0]?.bannerImage
                  }
                  opacity={"0.9"}
                  borderRadius={"10px"}
                  border={"1px solid black"}
                />
                <Column
                  cursor={"pointer"}
                  width={"100%"}
                  position={"absolute"}
                  justify={"center"}
                  align={"center"}
                  padding={"0px"}
                >
                  <Row width={"100%"} padding={"0px"} justify={"center"}>
                    <Column width={"auto"}>
                      <Row width={"auto"} padding={"0px"} cursor={"pointer"}>
                        <Span
                          fontSize={"38px"}
                          fontWeight={"bold"}
                          color={"white"}
                          padding={"0px 0px 0px 0px"}
                          onClick={(e) => navigator("/collection/" + index)}
                        >
                          {item.name.toUpperCase()}
                        </Span>
                        <Span
                          fontSize={"18px"}
                          fontWeight={"bold"}
                          color={"white"}
                          padding={"10px 0px 0px 0px"}
                          onClick={(e) => navigator("/collection/" + index)}
                        >
                          ({" " + item.data.length} Animes)
                        </Span>
                      </Row>
                      <Row>
                        <Badge
                          color={"white"}
                          fontWeight={"bold"}
                          background={"red"}
                          padding={"5px 10px"}
                          onClick={(e) => openModal(index)}
                        >
                          Remove
                        </Badge>
                        <Badge
                          color={"white"}
                          fontWeight={"bold"}
                          background={"lightGreen"}
                          padding={"5px 30px"}
                          onClick={(e) => openModalEdit(index)}
                        >
                          Edit
                        </Badge>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Row>
            );
          })}
          {collection.length === 0 && (
            <Row width={"100%"} justify={"space-around"} align={"center"} wrap={"wrap"}>
              <Span
                fontSize={"24px"}
                fontWeight={"bold"}
                color={"lightGray"}
                textAlign={"center"}
                width={"100%"}
              >
                Your have no collection yet
              </Span>
              <Badge
                color={"white"}
                fontWeight={"bold"}
                background={"lightGreen"}
                padding={"5px 10px"}
                onClick={(e) => {
                  setShowModalAdd(true);
                }}
              >
                Add Collection
              </Badge>
            </Row>
          )}
        </Column>
      </Column>
    </Column>
  );
}

export default CollectionList;
