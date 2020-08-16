import React from 'react';
import styled from "styled-components";
import Image from "gatsby-image";
import { media, mixins, theme } from "../../styles";
import { hex2rgba } from "../../utils";
import { GoMarkGithub, GoLinkExternal } from "react-icons/go";

const { colors, fontSizes, fonts } = theme;

const StyledProjects = styled.section`
  width: 100vw;
  background: ${colors.darkBlack};
  padding: 16rem 6rem;
  letter-spacing: .1rem;
  ${media.phablet`padding: 10rem 2rem;`}
  .inner-section {
    max-width: 96rem;
    margin: auto;
  }

  .hello-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: .5rem;
    color: ${colors.orange};

    .line-after {
      ${media.phablet`display: none;`}
    }
  }
  .hr-line {
    width: 3rem;
    height: .1rem;
    background: ${colors.orange};
    margin-right: 1rem;
  }
  .project-grid {
    margin-top: 8rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    align-items: center;
    &:nth-child(2n) {
      .project-image {
        grid-column: 1/8;
        ${media.thone`
          opacity: 0.2;
          grid-column: 1 / -1;
        `}
      }
      .project-description {
        grid-column: 7/-1;
        text-align: right;
        ${media.thone`
          grid-column: 1/-1;
          padding: 4rem 4rem 3rem;
          text-align: left;
        `}
        .header {
          justify-content: flex-end;
        }
      }
      .tech-stack {
        justify-content: flex-end;
      }
    }
  }
  .project-image {
    grid-column: 6/-1;
    grid-row: 1 / -1;
    ${media.thone`
      opacity: 0.2;
      grid-column: 1 / -1;
      height: 100%;
    `}

    .image {
      height: 33rem;
      width: 100%;
      border-radius: .3rem;
    }
    &:hover{
      ::before {
        background: transparent;
      }
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 3;
      background: ${hex2rgba(colors.orange, 0.3)};
      mix-blend-mode: screen;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }
  }
  .project-description {
    grid-column: 1/7;
    grid-row: 1 / -1;
    z-index: 4;
    ${media.thone`
      grid-column: 1/-1;
      padding: 4rem 4rem 3rem;
    `}

    .header {
      display: flex;
      align-items: center;
      .icon {
        height: 2rem;
        width: 2rem;
        margin-left: 2rem;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          color: ${colors.orange};
          transform: translateY(-.4rem);
        }
      }
      .external-icon {
        height: 2.2rem;
        width: 2.2rem;
      }
    }
    .project-title {
      font-size: 2rem;
    }
    .description {
      padding: 1.67rem;
      background: ${colors.darkGray};
      margin-top: 2rem;
      font-size: 1.4rem;
    }
    .tech-stack {
      display: flex;
      margin-top: 2rem;
      letter-spacing: .1rem;
      text-transform: uppercase;
      li {
        font-weight: 700;
        margin-right: 2rem;
        font-size: 1.2rem;
      }
    }
  }
`;

const Projects = ({ projects }) => {
  return (
    <StyledProjects id="projects">
      <div className="inner-section">
        <h3 className="hello-heading">
          <div className="hr-line"></div>
          some of my work
          <div className="hr-line line-after"></div>
        </h3>
        <div>
          {projects && projects.map((project, i) => {
            const { frontmatter: { github, image, tech, title, url }, html } = project;
            return (
              <div className="project-grid" key={title}>
                <div className="project-description">
                  <div className="header">
                    <h2 className="project-title">{title}</h2>
                    <a target="_blank" href={github} >
                      <GoMarkGithub className="icon github-icon" />
                    </a>
                    <a target="_blank" href={url} >
                      <GoLinkExternal className="icon external-icon" />
                    </a>
                  </div>
                  <div className="description" dangerouslySetInnerHTML={{ __html: html }}></div>
                  <ul className="tech-stack">
                    {tech.map(lang => <li key={lang}>{lang}</li>)}
                  </ul>
                </div>
                <a className="project-image" target="_blank" href={url} >
                  <Image className="image" fluid={image.childImageSharp.fluid} alt={title} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </StyledProjects>
  )
}

export default Projects;