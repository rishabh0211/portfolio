import styled from "styled-components";
import { media, theme } from "../../styles";
import { hex2rgba } from "../../utils";
const { colors } = theme;

export default styled.section`
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
  .projects-info {
    font-size: 1.6rem;
    margin-top: 2rem;
  }
  .git-link {
    color: ${colors.orange};
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 0;
      transition: width .2s cubic-bezier(0.03, 0.21, 0.79, 1.01);
      border-bottom: solid .1rem ${colors.orange};
    }
    &:hover::after {
      width: 100%;
    }
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
