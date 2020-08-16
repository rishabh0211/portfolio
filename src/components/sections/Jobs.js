import React, { useState } from 'react';
import styled from "styled-components";
import { media, mixins, theme } from "../../styles";
import { hex2rgba } from "../../utils";
import { TiArrowForwardOutline } from "react-icons/ti";

const { colors } = theme;

const StyledJobs = styled.section`
  width: 100vw;
  background: ${colors.lightBlack};
  padding: 20rem 6rem;
  letter-spacing: .1rem;
  ${media.thone`padding: 20rem 4rem;`}
  ${media.phablet`padding: 10rem 2rem;`}

  .inner-section {
    max-width: 72rem;
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
    ${media.thone`
      .line-after {
        display: none;
      }
    `}
  }
  .hr-line {
    width: 3rem;
    height: .1rem;
    background: ${colors.orange};
    margin-right: 1rem;
  }
  .experience-container {
    margin-top: 5.6rem;
    display: flex;
    ${media.thone`flex-direction: column;`}
  }
  .tabs-list {
    position: relative;
    width: max-content;
    border-left: solid .1rem ${colors.lightGray};
    align-self: baseline;
    ${media.thone`
      display: flex;
      align-self: center;
      border-left: none;
      border-bottom: solid .1rem #d2d2d2;
      overflow-x: scroll;
      justify-content: center;
    `}
    ${media.phablet`width: calc(100% + 4rem);`}
  }
  .description-container {
    margin-left: 2rem;
    ${media.thone`margin: 4rem 0 0 0;`}
  }
  .descriptions {
    margin-right: 2rem;
  }
  .job-title {
    font-size: 2rem;
    font-weight: 500;
    ${media.thone`font-size: 1.8rem;`}
    .company {
      color: ${colors.orange};

      a {
        &::after {
          content: "";
          height: .1rem;
          background: ${hex2rgba(colors.orange, 0.5)};
          position: absolute;
          top: 100%;
          left: 0;
          width: 0;
          transition: width .3s cubic-bezier(0.03, 0.21, 0.79, 1.01);
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
  .job-duration {
    font-size: 1.4rem;
    margin-top: .8rem;
    font-weight: 300;
  }
  .description-list {
    margin-top: 3rem;
  }
  .description-item {
    display: flexbox;

    &:not(:first-child) {
      margin-top: 1.2rem;
    }
    .list-icon {
      margin-right: .8rem;
      width: 2rem;
      height: 2rem;
      color: ${colors.orange};
    }
    .description-text {
      font-size: 1.3rem;
    }
  }
`;

const StyledTabItem = styled.li`
  padding: 0 2rem;
  height: 4rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
  color: ${props => props.isActive ? colors.orange : colors.lightGray};
  ${media.thone`min-width: 13rem`}
  ${media.phablet`
    &:first-child {
      margin-left: 3rem;
    }
  `}
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0;
    transition: width .3s cubic-bezier(0.03, 0.21, 0.79, 1.01);
    background: ${hex2rgba(colors.orange, 0.3)};
  }
  &:hover::after {
    width: 100%;
  }
`;

const StyledSelection = styled.div`
  display: block;
  border-radius: .4rem;
  height: 4rem;
  position: absolute;
  top: ${props => props.activeTab * 4}rem;
  left: -0.2rem;
  width: .3rem;
  background: ${colors.orange};
  transition: top 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  ${media.thone`display: none;`}
`;

const Jobs = ({ jobs }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledJobs id="jobs">
      <div className="inner-section">
        <h3 className="hello-heading">
          <div className="hr-line"></div>
          Professional Experience
          <div className="hr-line line-after"></div>
        </h3>
        <div className="experience-container">
          <ul className="tabs-list">
            {jobs && jobs.map((job, i) => {
              const { frontmatter } = job;
              const { company } = frontmatter;
              return (
                <StyledTabItem
                  key={company}
                  className="tab-item"
                  onClick={() => setActiveTab(i)}
                  isActive={activeTab === i}
                >
                  {company}
                </StyledTabItem>
              )
            })}
            <StyledSelection activeTab={activeTab}></StyledSelection>
          </ul>
          <div className="description-container">
            {jobs && jobs.map((job, i) => {
              const { frontmatter, internal: { content } } = job;
              const { company, location, range, title, url } = frontmatter;
              const description = content.split('\n').filter(a => !!a).map(desc => desc.substring(2));
              return (
                <div
                  key={company}
                  hidden={activeTab !== i}
                  className="descriptions"
                >
                  <h3 className="job-title">{title}
                    <span className="company">
                      <span>&nbsp;@</span>
                      <a href={url} target="_blank" rel="nofollow noopener noreferrer">{company}</a>
                    </span>
                  </h3>
                  <h4 className="job-duration">{range}</h4>
                  <div className="description-list">
                    {description && description.map((desc, i) => (
                      <li className="description-item" key={i} >
                        <TiArrowForwardOutline className="list-icon" />
                        <p className="description-text">{desc}</p>
                      </li>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </StyledJobs>
  )
}

export default Jobs
