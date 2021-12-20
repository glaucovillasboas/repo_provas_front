import { css } from 'styled-components/macro';

const absolute = (top = '', right = '', bottom = '', left = '') => css`
  position: absolute;
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
`;

export default absolute;
