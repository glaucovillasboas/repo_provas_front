import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background-color: ${theme.color.primary};
      font-family: ${theme.font.family};
      background-image: linear-gradient(to right top, #cb8900, #f18805, #f18805, #f18805, #f18805);
      overflow-x: hidden;
   }

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }

    svg {
      cursor: pointer;
    }

    strong {
      font-weight: bold;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  `}
`;

export default GlobalStyle;
