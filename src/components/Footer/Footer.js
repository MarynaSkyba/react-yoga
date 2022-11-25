import React from "react";
import { IconContext } from "react-icons";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import {
  IconWrapper,
  FooterContainer,
  FooterMenu,
  FooterLink,
  // FooterTitle,
  FooterComponent,
  Logo,
  Icon,
  IconContainer,
  LogoContainer,
} from "./FooterElements";

function Footer() {
  return (
    <FooterComponent>
      <FooterContainer>
        <LogoContainer>
          <Logo to="/">
            YOGA
            <Icon icon="fa-brands fa-pied-piper-hat" />
          </Logo>
        </LogoContainer>

        <FooterMenu>
          {/* <FooterTitle>About us</FooterTitle> */}
          <FooterLink>About</FooterLink>
          <FooterLink>Discover</FooterLink>
          <FooterLink>Service</FooterLink>
          <FooterLink>Workflow</FooterLink>
        </FooterMenu>

        <IconContainer>
          <IconContext.Provider value={{ style: {width: "30px", height: "30px", color: "#CCE0A9", pointer: "cursor"} }}>
            <IconWrapper>
              {" "}
              <FaTwitter />
            </IconWrapper>
            <IconWrapper>
              {" "}
              <FaFacebookF />
            </IconWrapper>

            <IconWrapper>
              {" "}
              <FaInstagram />
            </IconWrapper>

            <IconWrapper>
              {" "}
              <FaYoutube />
            </IconWrapper>
          </IconContext.Provider>
        </IconContainer>
      </FooterContainer>
    </FooterComponent>
  );
}

export default Footer;
