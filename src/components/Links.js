import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";
import { media } from "../styles";

const StyledLinks = styled.ul`
  list-style: none;
  display: flex;

  .nav-item {
    text-transform: uppercase;
    font-size: 1.2rem;
    cursor: pointer;
    ${media.tablet`
      &:first-child {
        margin-top: 5rem;
      }
      a {
        padding: 2rem;
        width: 100%;
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
      <li className="nav-item">
        <Link to="#hero" onClick={handleClick}>home</Link>
      </li>
      <li className="nav-item">
        <Link to="#about" onClick={handleClick}>about</Link>
      </li>
      <li className="nav-item">
        <Link to="#jobs" onClick={handleClick}>experience</Link>
      </li>
      <li className="nav-item">
        <Link to="#projects" onClick={handleClick}>projects</Link>
      </li>
      <li className="nav-item">
        <Link to="#contact" onClick={handleClick}>contact</Link>
      </li>
    </StyledLinks>
  )
});

export default Links;
