import React from 'react';
import Image from "gatsby-image";

import { GoMarkGithub, GoLinkExternal } from "react-icons/go";
import StyledProjects from '../styledComponents/StyledProjects';

const Projects = ({ projects }) => {
  return (
    <StyledProjects id="projects">
      <div className="inner-section">
        <h3 className="hello-heading">
          <div className="hr-line"></div>
          some of my work
          <div className="hr-line line-after"></div>
        </h3>
        <p className="projects-info">
          Apart from offical projects, below are some of my perosnal projects
          which I work on in my free time. I like to learn things by creating projects. You can find more
          on my <a className="git-link" target="_blank" href="https://github.com/rishabh0211" rel="nofollow noopener noreferrer">github</a> profile.
        </p>
        <div>
          {projects && projects.map((project, i) => {
            const { frontmatter: { github, image, tech, title, url }, html } = project;
            return (
              <div className="project-grid" key={title}>
                <div className="project-description">
                  <div className="header">
                    <h2 className="project-title">{title}</h2>
                    <a target="_blank" rel="nofollow noopener noreferrer" href={github} >
                      <GoMarkGithub className="icon github-icon" />
                    </a>
                    <a target="_blank" rel="nofollow noopener noreferrer" href={url} >
                      <GoLinkExternal className="icon external-icon" />
                    </a>
                  </div>
                  <div className="description" dangerouslySetInnerHTML={{ __html: html }}></div>
                  <ul className="tech-stack">
                    {tech.map(lang => <li key={lang}>{lang}</li>)}
                  </ul>
                </div>
                <a className="project-image" target="_blank" rel="nofollow noopener noreferrer" href={url} >
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