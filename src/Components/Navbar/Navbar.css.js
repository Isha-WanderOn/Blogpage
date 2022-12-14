import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "12.86vh")};
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Mobile*/
  @media (min-width: 480px) {
    height: 12.86vh;
  }
  /*1024*/
`;
const Navbarlogo = styled.img`
  height: 13.04vh;
  display: flex;
  float: left;
  margin-left: 4.8vw;
  @media (max-width: 480px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 8.04vh;
    border: 1px solid white;
    border-radius: 50%;
  }
`;
const NavbarLinkContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  margin-left: 40%;
`;
const NavbarLink = styled(Link)`
  color: #ffffff;
  font-size: 1.38vw;
  text-decoration: none;
  margin: 1.9vw;
  @media (max-width: 480px) {
    display: none;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 12.86vh;
  display: flex;
`;
const NavbarLinkExtended = styled(Link)`
  color: #ffffff;
  font-size: 5vw;
  text-decoration: none;
  margin: 10px;
`;
 
const OpenLinksButton = styled.button`
  width: 1.75vw;
  background: none;
  border: none;
  color: #d4dddb;
  font-size: 8vw;
  margin-left: 50%;
  cursor: pointer;
  @media (min-width: 480px) {
    display: none;
  }
`;
const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 480px) {
    display: none;
  }
`;

export {
  Navbarlogo,
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
  LeftContainer,
  NavbarExtendedContainer,
  OpenLinksButton,
  NavbarInnerContainer,
  NavbarLinkExtended,
};
