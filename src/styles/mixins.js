import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
  `
};

export default mixins;