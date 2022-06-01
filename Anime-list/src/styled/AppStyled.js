import styled from "@emotion/styled";


const breakpoints = {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  });


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
  overflow-y: ${(props) => props.overflowY || "hidden"};
  overflow-x: ${(props) => props.overflowX || "hidden"};
  justify-content: ${(props) => props.justify || "flex-start"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  position : ${(props) => props.position || "relative"};
  cursor : ${(props) => props.cursor || "default"};
  border : ${(props) => props.border || "none"};
  border-radius : ${(props) => props.borderRadius || "0px"};
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => props.padding || "5px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background: ${(props) => convertColor(props.background) || "none"};
  color: ${(props) => convertColor(props.color) || "none"};
  justify-content: ${(props) => props.justify || "flex-start"};
  margin: ${(props) => props.margin || "0px"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  position: ${(props) => props.position || "relative"};
  cursor : ${(props) => props.cursor || "normal"};
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "0px"};
  right: ${(props) => props.right || "0px"};
  bottom: ${(props) => props.bottom || "0px"};
  z-index: ${(props) => props.zIndex || "0px"};

  
`;
// ${mq["sm"]} {
//     max-width: ${breakpoints["sm"]}px;
//   }
//   ${mq["md"]} {
//     max-width: ${breakpoints["md"]}px;
//   }
//   ${mq["lg"]} {
//     max-width: ${breakpoints["lg"]}px;
//   }
export const Banner = styled.div`
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props) => props.height || "500px"};
  width: 100%;
  background-image: url(${(props) => props.src});
  position: ${(props) => props.position || "relative"};
  opacity: ${(props) => props.opacity || "1"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  border-radius: ${(props) => props.borderRadius || "0px"};
  border: ${(props) => props.border || "none"};
`;


export const Button = styled.button`
  width: auto;
  padding: ${(props) => props.px || "5px"};
  padding: ${(props) => props.padding || "5px"};
  margin: ${(props) => props.margin || "0px"};
  border-radius : ${(props) => props.borderRadius || "5px"};
  color : ${(props) => convertColor(props.color) || "none"};
  font-weight: bolder;
  cursor: pointer;
  background: ${(props) => convertColor(props.background) || "none"};
  position : ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "0px"};
  right: ${(props) => props.right || "0px"};
  bottom: ${(props) => props.bottom || "0px"};
`

export const Search = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "20px"};
  border: ${(props) => props.border || "1px solid grey"};
  border-radius: 5px;
  margin: ${(props) => props.margin || "0 10px"};
  font-size: 16px;
  outline: none;
  background: ${(props) => convertColor(props.background) || "white"};
  color: ${(props) => convertColor(props.color) || "none"};
  margin-bottom: 10px;
  padding: ${(props) => props.padding || "5px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  &:focus {
    background: ${(props) => convertColor(props.focusBackground) || "none"};
    border: 1px solid
      ${(props) => convertColor(props.focusColor) || mainColor["lightGray"]};
  }
  ::placeholder {
    color: grey;
    opacity: 0.6;
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
  object-fit: cover;
`  
export const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border : ${(props) => props.border || `1px solid ${mainColor["lightGray"]};`};
  border-radius: ${(props) => props.borderRadius || "10px"};
  object-fit: ${(props) => props.objectFit || "cover"};
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "0px"};
  right: ${(props) => props.right || "0px"};
  bottom: ${(props) => props.bottom || "0px"};
  cursor : pointer;
  z-index: ${(props) => props.zIndex || "9"};
  src: ${(props) => props.src || "none"};
`  


export const Span = styled.span`
  color : ${(props) => convertColor(props.color) + " !important" || "none" +" !important"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin : ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "left"};
  cursor : ${(props) => props.cursor || "normal"};
  width : ${(props) => props.width || "auto"};
  padding : ${(props) => props.padding || "0"};
  font-style: ${(props) => props.fontStyle || "normal"};

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
  border : ${(props) => props.border || "none"};
`;

export const ItemLink = styled.a`
  text-decoration: none !important;
  position : relative;
  color: ${(props) =>  convertColor(props.activeColor) ? convertColor(props.activeColor) : convertColor(props.color) ? convertColor(props.color) : "none"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin : ${(props) => props.margin || "0 5px 0 0"};
  text-align: ${(props) => props.textAlign || "left"};
  cursor : ${(props) => props.cursor || "pointer"};
  letter-spacing: ${(props) => props.letterSpacing || "2px"};
  width: ${(props) => props.width || "autho%"};
  &:hover {
    color: ${(props) => convertColor(props.hoverColor) || "none"};
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

export const MoreInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: ${(props) =>
    convertColor(props.background) || mainColor["white"]};
  opacity: 0.9;
  border-radius: 10px;
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  overflow: auto;
  padding: 5px;
  visibility: ${(props) => (props.show == true ? "unset" : "hidden")};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const Badge = styled.span`
  background: ${(props) => convertColor(props.background) || "none"};
  color: ${(props) => convertColor(props.color) || "none"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "16px"};
  margin : ${(props) => props.margin || "0px 5px"};
  text-align: ${(props) => props.textAlign || "left"};
  cursor : ${(props) => props.cursor || "pointer"};
  width: ${(props) => props.width || "auto"};
  padding : ${(props) => props.padding || "0px 10px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  position : ${(props) => props.position || "relative"};
  top : ${(props) => props.top || "auto"};
  right : ${(props) => props.right || "auto"};
  bottom : ${(props) => props.bottom || "auto"};
  left : ${(props) => props.left || "auto"};
`;
export const Add = styled.button`
  background: ${(props) => convertColor(props.background) || "none"};
  color: ${(props) => convertColor(props.color) || "none"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "16px"};
  text-align: ${(props) => props.textAlign || "center"};
  cursor : ${(props) => props.cursor || "pointer"};
  width: ${(props) => props.width || "100%"};
  padding : 5px 10px;
  border-radius:15px;
  position : absolute;
  bottom: 0;
  right: 0;
  &:hover {
    background: ${(props) => convertColor(props.hoverBackground) || "none"};
    color: ${(props) => convertColor(props.hoverColor) || "none"};
  }
`


export const Modal = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  width: 30%;
  height: auto;
  background: ${(props) => props.background || "grey"};
  opacity: 0.9;
  border-radius: 10px;
  z-index: 100;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: ${(props) => props.flexDirection || "column"};
  transform: translate(50%, -50%);
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "none"};
  overflow-y: ${(props) => props.overflowY || "hidden"};
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
