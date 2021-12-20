import { css } from 'styled-components/macro';

const hideScrollbar = () => css`
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 

  & {
    ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  }
`;

export default hideScrollbar;
