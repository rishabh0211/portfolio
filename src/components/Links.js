import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLinks = styled.ul`
  list-style: none;
  display: flex;

  .nav-item {
    text-transform: uppercase;
    font-size: 1.2rem;
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 4rem;
    }
  }
`;

const Links = () => {
  return (
    <StyledLinks className="nav-list">
      <li className="nav-item">
        <Link to="#hero">home</Link>
      </li>
      <li className="nav-item">
        <Link to="#about">about</Link>
      </li>
      <li className="nav-item">
        <Link to="#jobs">experience</Link>
      </li>
      <li className="nav-item">
        <Link to="#projects">projects</Link>
      </li>
      <li className="nav-item">
        <Link to="#contact">contact</Link>
      </li>
    </StyledLinks>
  )
}

export default Links;
