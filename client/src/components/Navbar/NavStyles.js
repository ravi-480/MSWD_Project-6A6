import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
// import { height } from "@mui/system";
import styled, { keyframes, css } from "styled-components";

const Fade = keyframes`
from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const NavbarWrapper = styled.div`
  box-sizing: border-box;
  font-family: Assistant;
  width: 100%;
  height: 80px;
  display: block;
  color: #000;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
`;

export const MobileNavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  z-index: 10;
  text-align: center;

  .MobileNavHeader-actions {
    text-align: center;
  }
  .MobileNavHeader-actions div {
    display: inline-block;
    padding: 0px 5px;
    text-align: center;
    margin: 0px 5px;
  }
  .bag span {
    vertical-align: baseline;
  }

  @media (min-width: 860px) {
    display: none;
  }
  @media (max-width: 440px) {
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }
`;
export const NavContainer = styled.div`
  box-sizing: border-box;
  height: inherit;
  display: none;
  grid-gap: 10px;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  z-index: 10;

  @media (min-width: 860px) {
    display: flex;
    justify-content: space-between;
    margin-left: 0rem;
    margin-right: 0rem;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }
  @media (min-width: 1536px) {
    display: flex;
    justify-content: space-between;
    margin-left: 1.8rem;
    margin-right: 1.8rem;
  }
`;

export const GridItemOne = styled.div`
  text-transform: uppercase;
  margin: 0;
  display: flex;
  min-width: 650px;

  /* gap: 0px;
  grid-column: 2/3; */
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  height: inherit;
  font-size: 14px;
  letter-spacing: 0.3px;
  /* width: 75%; */
  /* 
  .subMenu {
    display: none;
  }

  li:hover .subMenu {
    display: block;
  } */
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1440px) {
    width: 500px;
  }
`;
export const LogoContainer = styled.div`
  margin: 0 0px 0 0px;
`;
export const Img = styled.img`
  box-sizing: border-box;
  width: ${({ width }) => (width ? width : "3rem")};
  height: ${({ height }) => (height ? height : "auto")};
`;

export const NavbarLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  font-family: Assistant;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  height: 80px;
  color: #282c3f;
  padding: 0 15px;
  letter-spacing: 0.3px;
  text-decoration: none;
  border-bottom: ${({ $active }) => ($active ? "4px solid" : "4px solid")};
  border-bottom-color: ${({ $active, color }) => ($active ? color : "#fff")};

  // here we can go with two different approach to achieve the fadeIn design //
  // below one is by using the transition  other one is using animation refer Men.js or Women.js file in sub- Menu folder//
  /* .subcategories {
    visibility: hidden;
    transition: all 0.3s ease-out;
    opacity: 0;
  }
  &:hover .subcategories {
    visibility: visible;
    transition-delay: 0.15s;
    opacity: 1;
  } */

  @media (max-width: 768px) {
    padding: 0 5px;
  }
  @media (max-width: 1024px) {
    padding: 0 10px;
  }
  @media (max-width: 1280px) {
    padding: 0 12px;
  }
  @media (max-width: 1536px) {
    padding: 0 15px;
  }
`;

export const Overlay = styled.div`
 

  position: fixed;
  top: 80px;
  left: 0;
  z-index: -10;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: calc(100vh);
  overflow-x: hidden;
  pointer-events: none;
  /* transition: width 0.5s linear; */
`;
export const StyledSubLinksContainer = styled.div`
  z-index: -8;
  width: 60vw;
  height: 450px;
  background: #fff;
  position: absolute;
  top: 80px;
  left: 80px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  column-gap: 10px;
  align-content: space-around;
  justify-content: space-between;
  align-items: flex-start;
  transition: left 2s ease-out, width 2s ease-out;
`;
export const SubLinksGroup = styled(Link)`
  display: block;
  font-size: 14px;
  margin: 2.5px 0;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ color }) => (color ? color : "#000")};
  padding: 12px 0 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 25px;
  font-weight: 600;
  transition: all 6s linear;
`;
export const NavSubLinks = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  text-transform: none;
  color: #282c3f;
  font-family: "Assistant";
  line-height: 23px;
  font-weight: 500;
  display: block;
  font-size: 14px;
  margin: 2px 0;
  text-decoration: none;
  &:hover {
    color: #282c3f;
    font-weight: 600;
    font-size: 15px;
  }
`;
export const Span = styled.span`
  font-size: 10px;
  top: -0.4rem;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  text-transform: uppercase;
  display: inline;
  width: 23px;
  height: 12px;
  margin: 0 0 5px -10px;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ff3f6c;
  content: "new";
`;
export const StdNavbarLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  font-family: Assistant;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  height: 80px;
  color: #282c3f;
  padding: 0 15px;
  text-decoration: none;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "4px solid" : "4px solid")};
  border-bottom-color: ${({ active, color }) => (active ? color : "#fff")};
`;

export const StdContainer = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  width: 545px;
  height: 454px;
  background-color: #fff;
  position: absolute;
  top: 81px;
  box-shadow: inset 0 0 8px rgb(0 0 0 / 10%);
  pointer-events: auto;
  transition: width 6s linear;

  .desktop-YourDailyInspiration {
    display: block;
    width: 320px;
    height: 22px;
    margin: 9.5px 110px 0 110px;
    font-family: Whitney;
    font-size: 16px;
    line-height: 1.38;
    font-weight: 300;
    text-align: center;
    color: #535766;
    text-transform: none;
  }
  .desktop-exploreStudioBtn {
    min-width: 164px;
    height: 40px;
    display: flex;
    font-family: Whitney;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 16px 174px 0 174px;
    border-radius: 2px;
    border: 1px solid #d4d5d8;
    background-color: #fff;
    text-decoration: none;
  }
  .StudioLabel {
    min-width: 109px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    text-align: center;
    color: #282c3f;
    height: 20px;
    text-decoration: none;
    outline: none;
    flex-grow: 0;
  }
`;

export const StdImg = styled.img`
  margin: 20px;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  border-style: none;
`;
export const GridItemTwo = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 250px;
  margin: 0 0 0 0%;
  padding: 0%;
  height: inherit;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #282c3f;
  border-bottom: none;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 14px;
    display: none !important;
  }
  .desktop-userTitle {
    color: #282c3f;
    font-size: 12px;
    text-transform: none;
    font-weight: 600;
  }
  svg {
    color: #282c3f;
  }
`;
export const SearchWrapper = styled.div`
  display: block;
  position: relative;
  width: 550px;
  margin-left: 40px;
  @media (max-width: 1536px) {
    width: 620px;
    margin-left: 40px;
  }
  @media (max-width: 1250px) {
    width: 380px;
    margin-left: 10px;
  }
  @media (max-width: 1366px) {
    width: 620px;
    margin-left: 20px;
  }
  @media (max-width: 1199px) {
    width: 320px;
    margin-left: 0px;
  }
  @media (max-width: 1024px) {
    display: none !important;
  }
`;
export const SearchContainer = styled.div`
  border: 0.1px solid lightGray;
  display: block;
  align-items: center;
  margin: 20px 20px 20px 0px;
  position: relative;
  height: 40px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  background: ${({ isFocus }) => (isFocus ? "#fff" : "#f5f5f6")};
  line-height: 24px;
  font-size: 14px;
  border: ${({ isFocus }) =>
    isFocus ? "1px solid #f5f5f6" : "1px solid #fff"};
  overflow: hidden;
`;

export const SearchDropDown = styled.div`
  width: 100%;
  position: absolute;
  text-transform: capitalize;
  color: #696e79;
  top: 60px;
  left: 0px;
  display: ${({ isFocus }) => (isFocus ? "block" : "none")};
  text-align: start;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  .CategorySection {
    font-family: "Assistant" san-serif;
    background: #eaeaec;
    font-weight: 700;
    font-size: 14px;
    opacity: 1;

  }
.SearchDropdownResults{
    /* margin: 8px 0; */
    cursor: pointer;
    padding: 10px 4px 10px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
       &:hover {
    background-color: #f5f5f6;
    cursor: pointer;
    
  }
}

  /* div:nth-child(odd) {
    background: #eeeeee;
  }
  div:nth-child(even) {
    background: #fff;
  } */
`;
export const Input = styled.input`
  box-sizing: content-box;
  float: left;
  font-size: 14px;
  height: 40px;
  width: calc(100% - 40px);
  line-height: 24px;
  color: #696e79;
  background: red;
  margin: 0%;

  padding: 0%;
  outline: 0;
  border: none;
  border-radius: 0 4px 4px 0;
  border-left: 0;
  background: #f5f5f6;
  &:focus {
    background: #fff;
  }
`;

export const SearchButton = styled.button`
  float: left;
  outline: none;
  border: none;
  cursor: pointer;
  color: gray;
  height: inherit;
  width: 40px;
  text-align: center;
  padding: 0px;
  background: transparent;
`;

export const SvgImageContainer1 = styled.div`
  box-sizing: content-box;
  margin: 0%;
  width: 40px;
  height: inherit;
  position: relative;
  /* top: 0; */
  padding: 0 10px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid transparent;
  height: calc(80px - 5px);

  .desktop-userTitle {
    color: #000;
    text-align: center;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    font-size: 12px;
    font-weight: 700;
    display: inline-block;
    padding-top: 10px;
    line-height: 6px;
  }
`;
export const SvgImageContainer = styled.div`
  box-sizing: content-box;
  margin: 0%;
  width: 40px;
  height: inherit;
  position: relative;
  top: 0;
  padding: 0 10px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid transparent;
  height: calc(80px - 5px);

  &:hover {
    border-bottom: 5px solid #ee5f73;
    height: calc(80px - 5px);
  }

  .desktop-userTitle {
    color: #000;
    text-align: center;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    font-size: 12px;
    font-weight: 700;
    display: inline-block;
    padding-top: 10px;
    line-height: 6px;
  }
  .profile-dropdown {
    box-sizing: border-box;
    width: 300px;
    left: -115px;
    top: calc(85px - 5px);
    position: absolute;
    padding: 25px 20px 15px;
    z-index: 9;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
    transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
    background-color: #fff;
    color: #515465;
    border: 1px solid #f5f5f6;
    visibility: hidden;
    opacity: 0;
    font-size: 16px;
    font-weight: none;
    text-transform: none;
    text-align: start;

    /* width: 200px;
    height: 500px;
    position: absolute;
    top: 60px;
    left: -20px;
    background-color: orange;  */

    .desktop-infoEmail,
    .desktop-infoTitle {
      font-size: 14px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 10px;
      height: 14px;
      color: #282c3f;
    }
    .desktop-infoTitle {
      font-weight: 700;
      height: 14px;
      margin-bottom: 5px;
      text-transform: capitalize;
    }
    .desktop-infoEmail {
      height: 14px;
      color: "#282c3f";
    }

    .desktop-getInLinks {
      display: inline-block;
      font-family: Whitney;
      width: 100%;
      padding: 10px 0;
      border-top: 1px solid #eaeaec;
      font-size: 16px;
      font-weight: 400;
      margin: 5px 0 0 5px;
    }
    .desktop-getUserInLinks {
      border: none;
    }
    .desktop-linkButton:first-child {
      margin: 0 5px 6px 0;
    }

    .desktop-linkButton {
      display: inline-block;
      font-size: 16px;
      padding: 4px 16px;
      margin: 10px 10px 0 0;
      border: 1px solid #eaeaec;
      border-radius: 2px;
      text-align: center;
      text-transform: uppercase;
      font-size: 14px;
      color: #ff3f6c;
      font-weight: 600;
    }
    a {
      text-decoration: none;
      color: #282c3f;
    }
    a {
      background-color: transparent;
    }
    .desktop-linkButton:hover {
      border: 1px solid #ff3f6c;
    }
    .desktop-infoSection {
      margin: 0;
      cursor: pointer;
      text-align: start;
    }

    .desktop-info {
      font-weight: 400;
      font-size: 16px;
      color: #515465;
    }
    .desktop-infoSection:hover {
      font-weight: 500;
      color: #000;
    }
    /* .desktop-superscriptTag {
      box-sizing: content-box;
      padding: 5px;
      width: 25px;
      height: 9px;
      background: #ff3f6c !important;
      border: 1px solid #ff3f6c !important;
      color: #fff;
      font-weight: 900;
      margin: -6px 0 10px 10px;
      font-size: 12px;
      -webkit-transform: skewX(-10deg);
      transform: skewX(-10deg);
      display: inline-block;
      border-radius: 2px;
    } */
  }

 &:hover .profile-dropdown {
    visibility: visible;
    opacity: 1;
  }

  .desktop-accActions {
    font-size: 16px;
    padding: 10px px 0 0;
    border-top: 1px solid #eaeaec;
  }
  .desktop-accInfoSection {
    cursor: pointer;
  }
  .desktop-accInfoSection:hover {
    font-weight: 700;
  }
  /* .desktop-infoTitle {
    font-size: 14px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 10px;
    color: #282c3f;
    font-weight: 700;
  } */
`;

export const SvgNavbarLink = styled(Link)``;



export const BadgeNotification = styled(Badge)({
  "& .MuiBadge-badge": {
    fontFamily: "Assistant",
    color: "#fff",
    backgroundColor: "#f16565",
    minWidth: "18px",
    lineHeight: 1,
    fontSize: "12px",
    fontWeight: 700,
    padding: "0px 6px",
    height: "18px",
    right: "-2px",
  },
});

export const BannerAnnouncement=styled.div`
width: 100%;
padding: 10px 0;
background-color: #ff3f6c;
color: #fff;
text-align: center;
font-size: 10px;
font-weight: 700;
@media screen and (min-width: 720px) {
  font-size: 12px;
  padding: 10px 0;
}
@media screen and (min-width: 1024px) {
  font-size: 14px;
  padding: 10px 0;
}
`