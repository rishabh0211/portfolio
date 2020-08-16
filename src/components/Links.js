import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";
import { media, mixins, theme } from "../styles";
const { colors, fonts } = theme;

const StyledLinks = styled.ul`
  list-style: none;
  display: flex;

  .nav-item {
    text-transform: uppercase;
    font-size: 1.2rem;
    cursor: pointer;
    ${media.tablet`
      padding: 2rem;
      &:first-child {
        margin-top: 3rem;
      }
    `}

    &:not(:first-child) {
      margin-left: 4rem;
      ${media.tablet`margin-left: 0`}
    }
  }
`;

const Links = React.forwardRef(({ styleClass, handleClick }, ref) => {
  return (
    <StyledLinks ref={ref} className={`nav-list ${styleClass}`}>
      <li className="nav-item" onClick={handleClick}>
        <Link to="#hero">home</Link>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <Link to="#about">about</Link>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <Link to="#jobs">experience</Link>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <Link to="#projects">projects</Link>
      </li>
      <li className="nav-item" onClick={handleClick}>
        <Link to="#contact">contact</Link>
      </li>
    </StyledLinks>
  )
});

export default Links;
