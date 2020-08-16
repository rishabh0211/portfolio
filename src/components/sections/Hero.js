import React from 'react';
import styled from "styled-components";
import { media, theme } from "../../styles";
import { hex2rgba } from "../../utils";
import { Link } from 'gatsby';

const { colors } = theme;

const StyledHero = styled.section`
  width: 100vw;
  background: ${colors.lightBlack};
  padding: 20rem 6rem;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  ${media.phablet`padding: 15rem 2.4rem`}
  .inner-section {
    max-width: 96rem;
    margin: auto;
  }
  .hello-heading {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: .5rem;
    color: ${colors.orange};
  }
  .hr-line {
    width: 3rem;
    height: .1rem;
    background: ${colors.orange};
    margin-right: 1rem;
  }
  .name-intro {
    margin-top: 2.4rem;
    font-size: 6.8rem;
    ${media.tablet`font-size: 5.6rem`}
    ${media.phablet`font-size: 4.4rem`}
    .firstname {
      color: ${colors.orange};
    }
  }
  .basic-intro {
    font-size: 4rem;
    margin-top: 1rem;
    ${media.tablet`font-size: 3.2rem`}
    ${media.phablet`font-size: 2.4rem`}
  }
  .desc-intro {
    letter-spacing: .1rem;
    max-width: 50rem;
    margin-top: 5rem;
    font-size: 1.6rem;
    line-height: 1.5;
    ${media.phablet`font-size: 1.4rem;`}
    ~a {
      margin-top: 4rem;
      ${media.phablet`margin-top: 2.8rem;`}
    }
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
    ${media.phone`padding: 1.4rem 0.8rem;`}
    &:hover {
      background: ${hex2rgba(colors.orange, 0.2)};
    }
  }
  .resume-link {
    margin-left: 2rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero id="hero">
      <div className="inner-section">
        <h3 className="hello-heading">
          <div className="hr-line"></div>
          Hello
        </h3>
        <h1 className="name-intro">I'm <span className="firstname">Rishabh</span> Rastogi</h1>
        <h3 className="basic-intro">I create things for the web.</h3>
        <p className="desc-intro">
          I'm a software engineer based in New Delhi, India specializing in building exceptional websites,
          applications, and everything in between.
        </p>
        <Link to="#contact">
          <button className="contact-btn">
            Get in touch
          </button>
        </Link>
        <a href="/resume.pdf"
          target="_blank"
          className="resume-link"
          rel="nofollow noopener noreferrer">
          <button className="contact-btn resume">
            resume
          </button>
        </a>
      </div>
    </StyledHero>
  )
}

export default Hero;