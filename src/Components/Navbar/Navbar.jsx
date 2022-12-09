import React, { useState } from "react";
import {
  Navbarlogo,
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
  LeftContainer,
  NavbarExtendedContainer,
  OpenLinksButton,
  NavbarInnerContainer,
  NavbarLinkExtended,
} from "./Navbar.css.js";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Navbarlogo src={logo} />
        </LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/DiwaleSale">Diwale Sale</NavbarLink>
            <NavbarLink to="/InternationalTrips">
              International Trips
            </NavbarLink>
            <NavbarLink to="/Blogs">Blogs</NavbarLink>
            <NavbarLink to="/About"> About Us</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/DiwaleSale">Diwale Sale</NavbarLinkExtended>
          <NavbarLinkExtended to="/InternationalTrips">
            International Trips
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/Blogs"> Blogs</NavbarLinkExtended>
          <NavbarLinkExtended to="/About"> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
