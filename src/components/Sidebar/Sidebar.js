import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElement";

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="workflow" onClick={toggle}>Workflow</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact-us">Contact us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
