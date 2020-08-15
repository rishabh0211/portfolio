import React from 'react';
import styled from "styled-components";
import Links from './Links';
import { media, mixins, theme } from "../styles";
import { hex2rgba } from "../utils";
const { colors, fonts } = theme;

const StyledNavbar = styled.nav`
  width: 100vw;
  background: ${colors.lightBlack};
  ${mixins.flexCenter};
  padding: 3rem 0;
  font-family: ${fonts.Poppins};
  position: fixed;
  top: 0;
  z-index: 11;
  box-shadow: 0 1rem 3rem rgba(0,0,0,0.5);
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo"></div>
      <Links />
    </StyledNavbar>
  )
}

export default Navbar;
