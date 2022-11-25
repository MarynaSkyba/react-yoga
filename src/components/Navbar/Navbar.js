import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Icon,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              YOGA
              <Icon icon="fa-brands fa-pied-piper-hat" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="workflow"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Workflow
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="contact">Contact</NavBtnLink>
            </NavBtn>
          </NavBarContainer>
        </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
