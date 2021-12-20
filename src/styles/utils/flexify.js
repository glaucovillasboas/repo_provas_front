import { css } from 'styled-components/macro';

const defaultFlex = {
  justifyContent: 'center',
  alignItems: 'center',
  row: false,
};

const flexify = (customFlex = {}) => {
  const flex = { ...defaultFlex, ...customFlex };

  return css`
    display: flex;
    justify-content: ${flex.justifyContent};
    align-items: ${flex.alignItems};
    flex-direction: ${flex.row ? 'row' : 'column'};
  `;
};

export default flexify;
