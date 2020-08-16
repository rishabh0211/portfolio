import styled from "styled-components";
import { media, mixins, theme } from "../../styles";
import { hex2rgba } from "../../utils";
const { colors, fonts } = theme;

export default styled.section`
  width: 100vw;
  background: ${colors.lightBlack};
  padding: 16rem 4rem;
  letter-spacing: .1rem;
  ${media.phablet`padding: 10rem 2rem;`}

  .inner-section {
    max-width: 85rem;
    margin: auto;
  }

  .hello-heading {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: .5rem;
    color: ${colors.orange};
  }
  .hr-line {
    width: 3rem;
    height: .1rem;
    background: ${colors.orange};
    margin-right: 1rem;
  }
  .info-container {
    margin-top: 4rem;
    display: flex;
    ${media.thone`
      flex-direction: column;
    `}
  }
  .personal-info {
    .info {
      position: relative;
      font-size: 1.4rem;
      display: flex;
      &:not(:first-child) {
        margin-top: 2rem;
      }
      h3 {
        font-weight: 500;
      }
      .icon {
        height: 2rem;
        width: 2rem;
        margin-right: .8rem;
      }
    }
  }
  .contact-form {
    margin-left: 12rem;
    padding: 7rem 6rem;
    background: ${colors.darkGray};
    box-shadow: 0 1rem 3rem rgba(0,0,0,0.5);
    margin-top: -13rem;
    font-size: 1.4rem;
    flex-grow: 1;
    ${media.desktop`
      padding: 6rem 4rem;
      margin-left: 5rem;
    `}
    ${media.thone`
      margin-left: 0;
      margin-top: 2rem;
    `}
    .form-group {
      &:not(:first-child) {
        margin-top: 3rem;
      }
    }
    .form-control {
      background: ${colors.darkGray};
      border: none;
      border-bottom: solid 1px ${colors.lightGray};
      width: 100%;
      padding-bottom: .8rem;
      color: #fff;
      font-family: ${fonts.Poppins};
      letter-spacing: .15rem;
      :focus {
        border-color: ${colors.orange};
      }
    }
    textarea {
      resize: none;
      height: 12rem;
    }
    .submit-btn {
      margin-top: 3rem;
      background: ${colors.orange};
      padding: 1rem 2rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: .3rem;
    }
  }
  .contact-social {
    display: flex;
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin-top: 2rem;
    li {
      margin-right: 1.2rem;
      svg {
        height: 2.4rem;
        width: 2.4rem;
        fill: currentColor;
      }
      a {
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        
        &:hover {
          color: ${colors.orange};
          transform: translateY(-.3rem);
        }
      }
    }
  }
  .info-message {
    margin-top: 2rem;
    font-size: 1.3rem;
    font-weight: 500;
    &.error {
      color: ${colors.red};
    }
    &.success {
      color: ${colors.green};
    }
  }
`;