import React from 'react';
import { Layout } from "../components";
import styled from "styled-components";
import { Link } from 'gatsby';
import { theme, media } from "../styles";
import { hex2rgba } from '../utils';
const { colors } = theme;

const Styled404 = styled.section`
  background: ${colors.lightBlack};
  height: calc(100vh - 9.8rem);
  padding-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .header-text {
    text-transform: uppercase;
    font-size: 2.4rem;
  }

  .contact-btn {
    padding: 1.4rem 2rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    border: solid .1rem ${colors.orange};
    color: ${colors.orange};
    background: ${colors.lightBlack};
    font-weight: 700;
    transition: background .3s;
    margin-top: 2rem;
    ${media.phone`padding: 1.4rem 0.8rem;`}
    &:hover {
      background: ${hex2rgba(colors.orange, 0.2)};
    }
  }

`;

const pageNotFound = () => {
  return (
    <Layout is404>
      <Styled404>
        <h1 className="header-text">Oh No! You are lost.</h1>
        <Link to="/">
          <button className="contact-btn">
            Back to home
          </button>
        </Link>
      </Styled404>
    </Layout>
  )
}

export default pageNotFound;
