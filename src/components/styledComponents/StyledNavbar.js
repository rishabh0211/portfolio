import styled, { keyframes } from "styled-components";
import { media, mixins, theme } from "../../styles";
const { colors, fonts } = theme;

const topline = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(0, 1.3rem) rotate(0deg);
  }
  100% {
    transform: translate(0, 1.3rem) rotate(45deg);
  }
`;

const toplineBack = keyframes`
  0% {
		transform: translate(0, 1.3rem) rotate(45deg)
	}
	50% {
		transform: translate(0, 1.3rem) rotate(0deg)
	}
	100% {
		transform: translate(0, 0) rotate(0)
	}
`;

const middleLineBack = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const middleLine = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const bottomline = keyframes`
  0% {
		transform: translate(0, 0) rotate(0deg)
	}
	50% {
		transform: translate(0, -1.3rem) rotate(0deg)
	}
	100% {
		transform: translate(0, -1.3rem) rotate(135deg)
	}
`;

const bottomlineBack = keyframes`
  0% {
		transform: translate(0, -1.3rem) rotate(135deg)
	}
	50% {
		transform: translate(0, -1.3rem) rotate(0deg)
	}
	100% {
		transform: translate(0, 0) rotate(0deg)
	}
`;

export const StyledNavbar = styled.nav`
  width: 100vw;
  background: ${colors.lightBlack};
  ${mixins.flexCenter};
  padding: ${props => props.scrolled ? '2.5rem 0' : '3rem 0'};
  font-family: ${fonts.Poppins};
  position: fixed;
  top: 0;
  z-index: 11;
  box-shadow: ${props => props.scrolled && '0 1rem 3rem rgba(0,0,0,0.5)'};
  transition: all .3s;
  ${media.tablet`
    ${mixins.flexBetween}
    padding: 2rem 0;
  `}

  .logo {
    height: 5rem;
    width: 5rem;
    top: 50%;
    left: 4rem;
    transform: translateY(-50%);
    position: absolute;
    ${media.tablet`
      position: relative;
      top: 0;
      left: 0;
      transform: translateY(0);
      margin-left: 4rem;
    `}
  }

  .desktop-links {
    display: flex;
    ${media.tablet`display: none`}
  }

  .mobile-links {
    display: none;
  }

  .burger-container {
    margin-right: 4rem;
    display: none;
    z-index: 4;
    ${media.tablet`display: block;`};
  }
  ${media.tablet`
    .mobile-links-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      z-index: 3;
      visibility: hidden;
      opacity: 0;
      &.active {
        visibility: visible;
        opacity: 1;
        .mobile-links {
          right: 0;
        }
      }
      .mobile-links {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: -30rem;
        width: 28rem;
        background: #1b2229;
        bottom: 0;
        box-shadow: -1rem 1rem 3rem rgba(0,0,0,0.8);
        transition: right .5s ease-in-out;
      }
    }
  `}
`;

export const StyledBurgerContainer = styled.div`
  height: 2.7rem;
  width: 4rem;
  position: relative;

  .line-1, .line-2, .line-3 {
    height: .3rem;
    width: 100%;
    background: ${colors.orange};
    border-radius: .3rem;
    animation: ${middleLineBack} .5s ease-in-out forwards;
    position: absolute;
  }
  .line-1 {
    top: 0;
    animation: ${toplineBack} .5s ease-in-out forwards;
  }
  .line-2 {
    top: 1.2rem;
    animation: ${middleLineBack} .5s ease-in-out forwards;
  }
  .line-3 {
    top: 2.4rem;
    animation: ${bottomlineBack} .5s ease-in-out forwards;
  }
  &.no-anim {
    .line-1, .line-2, .line-3 {
      animation: none!important;
    }
  }
  &.active {
    .line-1 {
      animation: ${topline} .5s ease-in-out forwards;
    }
    .line-2 {
      animation: ${middleLine} 0.3s ease-in-out forwards;
    }
    .line-3 {
      animation: ${bottomline} .5s ease-in-out forwards;
    }
  }
`;