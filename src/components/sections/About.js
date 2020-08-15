import React from 'react';
import styled from "styled-components";
import Image  from "gatsby-image";
import { media, mixins, theme } from "../../styles";
import { hex2rgba } from "../../utils";
import { FaCodepen } from "react-icons/fa";

const { colors } = theme;

const StyledAbout = styled.section`
  width: 100vw;
  background: ${colors.darkBlack};
  padding: 24rem 0;
  margin-top: -10rem;

  .inner-container {
    max-width: 96rem;
    margin: auto;
  }
  .about-section {
    display: flex;
    ${mixins.flexBetween};
  }
  .image-container {
    width: 40%;
    .image {
      object-fit: contain;
    }
  }
  .about-desc {
    width: 56%;
    p {
      margin-top: 2rem;
      margin-top: 2.4rem;
      font-size: 1.6rem;
      letter-spacing: .1rem;
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
    .skill-item {
      display: flex;
      align-items: center;
      .icon {
        width: 2rem;
        margin-right: 1rem;
      }
    }
    .skill-name {
      font-size: 1.6rem;
      letter-spacing: .1rem;
    }
  }
  .skills {
    display: inline-flex;
    position: absolute;
    top: 50%;
    left: -2rem;
    transform: translateY(-50%) rotate(-90deg);
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
          <div className="image-container">
            <Image fluid={avatar.childImageSharp.fluid} alt="Avatar" />
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
