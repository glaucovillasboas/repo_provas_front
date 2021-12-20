import { css } from 'styled-components/macro';

const unselectable = () => css`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  `;

export default unselectable;
