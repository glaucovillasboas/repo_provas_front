/* eslint-disable no-param-reassign */
import styled from 'styled-components';
import { css } from 'styled-components/macro';

const Text = styled.span`
  ${({
  theme,
  color = 'text',
  fontWeight = 'normal',
  fontSize = 'medium',
  marginTop = 'none',
  marginBottom = 'none',
  paddingX = 'none',
  paddingY = 'none',
  maxWidth,
  responsive,
  variant = '',
}) => {
    if (variant === 'helper') {
      color = 'danger';
      marginTop = 'small';
      fontSize = 'small';
    }

    if (variant === 'title') {
      fontSize = 'extraLarge';
      fontWeight = 'bold';
    }

    return css`
      margin-top: ${theme.spacing[marginTop]};
      margin-bottom: ${theme.spacing[marginBottom]};
      padding: ${`${theme.spacing[paddingY]} ${theme.spacing[paddingX]}`};
      color: ${theme.color[color]};
      font-weight: ${fontWeight};
      font-size: ${theme.font.size[fontSize]};
      line-height: 21px;
      display: inline-block;

      ${maxWidth && `
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: ${maxWidth};
      `}

    ${responsive && (`
      @media (max-width: 800px) {
        font-size: ${theme.font.size.small};
      }`
      )}

    `;
  }
  }
`;

export default Text;
