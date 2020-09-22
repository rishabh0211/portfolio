import React from 'react';
import styled from "styled-components";
import Image  from "gatsby-image";
import { media, mixins, theme } from "../../styles";
import { FaCodepen } from "react-icons/fa";
import { hex2rgba } from '../../utils';

const { colors } = theme;

const StyledAbout = styled.section`
  width: 100vw;
  background: ${colors.darkBlack};
  padding: 24rem 6rem;
  margin-top: -10rem;
  ${media.phablet`padding: 18rem 2rem 10rem 2rem;`}

  .inner-container {
    max-width: 96rem;
    margin: auto;
  }
  .about-section {
    display: flex;
    ${mixins.flexBetween};
    ${media.thone`
      flex-direction: column-reverse;
    `}
  }
  .image-section {
    width: 40%;
    display: flex;
    justify-content: center;
    ${media.thone`
      width: 100%;
      margin-top: 2rem;
    `}
  }
  .image-container {
    width: 80%;
    
    ${media.tablet`width: 100%`}
    ${media.thone`
      width: 60%;
      align-self: center;
      `}
      
    .gatsby-image-wrapper {
      outline: 0;
      outline-offset: 1.6rem;
      transition: all .3s ease-in-out;
      border-radius: 1rem;
      position: relative;
      &::before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${hex2rgba(colors.lightBlack, 0.4)};
        transition: background .3s ease-in-out;
        z-index: 3;
      }

      &:hover {
        outline: 1rem solid ${colors.orange};
        transform: scale(.9) translateY(-.5rem);
        &::before {
          display: none;
        }
      }
    }
    .image {
      object-fit: contain;
      border-radius: .4rem;
    }
  }
  .about-desc {
    width: 56%;
    ${media.thone`width: 100%;`}
    p {
      margin-top: 2rem;
      margin-top: 2.4rem;
      font-size: 1.6rem;
      letter-spacing: .1rem;
      ${media.thone`font-size: 1.4rem`}
    }
  }
  .skill-section {
    margin-top: 4rem;
  }
  .hello-heading {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: .5rem;
    color: ${colors.orange};
  }
  .skill-section {
    position: relative;
    display: flex;
    margin-top: 10rem;
  }
  .skill-list {
    margin-left: 14rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-column-gap: 1.4rem;
    grid-row-gap: 2rem;
    ${media.thone`
      margin-left: 6rem;
      grid-template-columns: repeat(auto-fit,minmax(14rem,1fr));
    `}
    .skill-item {
      display: flex;
      align-items: center;
      .icon {
        width: 2rem;
        margin-right: 1rem;
      }
    }
    .skill-name {
      font-size: 1.4rem;
      letter-spacing: .1rem;
    }
  }
  .skills {
    display: inline-flex;
    position: absolute;
    top: 50%;
    left: -2rem;
    transform: translateY(-50%) rotate(-90deg);
    ${media.thone`left: -8rem;`}
    ${media.phablet`left: -7rem;`}
  }
  .hr-line {
    width: 3rem;
    height: .1rem;
    background: ${colors.orange};
    margin-right: 1rem;
  }
`;

const About = ({ about }) => {
  const { frontmatter, html } = about[0];
  const { skills, title, avatar } = frontmatter;
  return (
    <StyledAbout id="about">
      <div className="inner-container">
        <div className="about-section">
          <div className="image-section">
            <div className="image-container">
              <Image fluid={avatar.childImageSharp.fluid} alt="Avatar" />
            </div>
          </div>
          <div className="about-desc">
            <h3 className="hello-heading">
              <div className="hr-line"></div>
              {title}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
        <div className="skill-section">
          <h3 className="hello-heading skills">
            <div className="hr-line"></div>
            my skills
          </h3>
          <ul className="skill-list">
            {skills && skills.map(skill => (
              <li className="skill-item" key={skill}>
                <FaCodepen className="icon" />
                <span className="skill-name">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledAbout>
  )
}

export default About
