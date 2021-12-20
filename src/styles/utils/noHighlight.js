import { css } from 'styled-components/macro';

const unselectable = () => css`
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
`;

export default unselectable;
