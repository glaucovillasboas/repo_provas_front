import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background-color: ${theme.color.primary};
      font-family: ${theme.font.family};
      overflow: hidden;
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
        transform: translateY(50px);
      }

      100% {
        opacity: 1;
        transform: translate(0);
      }
    }
  `}
`;

export default GlobalStyle;
