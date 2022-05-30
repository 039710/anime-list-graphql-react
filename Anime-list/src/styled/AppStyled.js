import styled from "@emotion/styled";


const mainColor = {
  darkGray: "#2b2b2b",
  lightGray: "#7D7D7D",
  lightBlue: "#00bcd4",
  darkBlue: "#006064",
  lightGreen: "#3CAF50",
  white: "#fff",
  black: "#141414"
};

const convertColor = (color) => {
  // check color exist in mainColor
  if(mainColor[color]){
    return mainColor[color]
  }
  return color
}
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => props.padding || "5px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background: ${(props) => convertColor(props.background) || "none"};
  color: ${(props) => convertColor(props.color) || "none"};
  margin: ${(props) => props.margin || "0px"};
  overflow-y: ${(props) => props.overflowY || "scroll"};
  overflow-x: ${(props) => props.overflowX || "hidden"};
  justify-content: ${(props) => props.justify || "flex-start"};
  position : ${(props) => props.position || "relative"};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => props.padding || "5px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background: ${(props) => convertColor(props.background) || "none"};
  color: ${(props) => convertColor(props.color) || "none"};
  justify-content: ${(props) => props.justify || "flex-start"};
  margin: ${(props) => props.margin || "0px"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;


export const Button = styled.button`
  width: auto;
  padding: ${(props) => props.px || "5px"};
  border-radius : "5px";
  color : ${(props) => convertColor(props.color) || "none"};
  font-weight: bolder;
`

export const Search = styled.input`
  
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "20px"};
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  background: ${(props) => convertColor(props.background) || "none"};
  color: ${(props) => convertColor(props.color) || "none"};
  margin-bottom: 10px;
  padding: 5px;
  &:focus {
    background: ${(props) => convertColor(props.focusBackground) || "none"};
    border: 1px solid ${(props) => convertColor(props.focusColor) || mainColor["lightGray"]};
  }
`;

export const Line = styled.hr`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1px"};
  color: ${(props) => convertColor(props.color) || "none"};
  margin: ${(props) => props.margin || "0px"};
`;

export const Profile = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border : 1px solid ${mainColor["lightGray"]};
  border-radius: 50% !important;
  cursor: pointer;
  src: ${(props) => props.src || "none"};
  fit: cover;
`  
export const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border : ${(props) => props.border || `1px solid ${mainColor["lightGray"]};`};
  border-radius: ${(props) => props.borderRadius || "10px"};
  cursor : pointer;
  src: ${(props) => props.src || "none"};
`  


export const Span = styled.span`
  color : ${(props) => convertColor(props.color) + " !important" || "none" +" !important"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin : ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "left"};
  cursor : ${(props) => props.cursor || "normal"};

`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background: ${(props) => convertColor(props.background) || "none"};
  color: ${(props) => convertColor(props.color) || "none"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
`;

export const ItemLink = styled.a`
  text-decoration: none !important;
  position : relative;
  color: ${(props) => convertColor(props.color) || "none"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin : ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "left"};
  cursor : ${(props) => props.cursor || "pointer"};
  width: ${(props) => props.width || "100%"};
  &:hover {
    color: ${(props) => convertColor(props.hoverColor) || "none"};
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: ${(props) => props.active ? "1%" : "0"};
    height: 100%;
    background: ${(props) => convertColor(props.hoverColor) || "lightGreen"};
    transition: width 1s;
  }
 
`

export const Option = styled.option`
  color: ${(props) => convertColor(props.color) || "none"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin : ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "left"};
  cursor : ${(props) => props.cursor || "pointer"};
  width: ${(props) => props.width || "100%"};
  
`
export const Select = styled.select`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "30px"};
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  background: ${(props) => convertColor(props.background) || "none"};
  color: ${(props) => convertColor(props.color) || "none"};
  margin-bottom: 10px;
  padding: 5px;
  &:focus {
    background: ${(props) => convertColor(props.focusBackground) || "none"};
    border: 1px solid ${(props) => convertColor(props.focusColor) || "lightGray"};
  }
`;
