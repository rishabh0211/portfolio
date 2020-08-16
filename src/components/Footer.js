import React from 'react';
import styled from "styled-components";
import { media, mixins, theme } from "../styles";
import { hex2rgba } from "../utils";

const { colors } = theme;

const StyledFooter = styled.footer`
  background: ${colors.lightBlack};
  ${mixins.flexCenter};
  padding: 4rem 2rem;
  letter-spacing: .1rem;
  color: ${colors.lightGray};
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    span {
      color: ${colors.orange};
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>  
      <h3>Copyright &copy;{new Date().getFullYear()} <span>Rishabh Rastogi</span>. All rights reserved.</h3>
    </StyledFooter>
  )
}

export default Footer
