import styled from 'styled-components';
import { css } from 'styled-components/macro';

const Select = styled.select`
${({
  theme,
  marginBottom = 'none',
  paddingLeft = 'medium',
  fontSize = 'large',
  color = 'black',
}) => css`
    border-radius: 5px;
    width: ${({ width }) => (width || '100%')};
    height: 44px;
    border: none;
    font-size: ${theme.font.size[fontSize]};
    color: ${theme.color[color]};
    padding-left:  ${theme.spacing[paddingLeft]};
    margin-bottom: ${theme.spacing[marginBottom]};
    background: #fff;

    :focus {
      outline: none !important;
      border: 2px solid ${theme.color.primary};
      box-shadow: 0 0 10px ${theme.color.primary};
    }

    @media (max-width: 800px) {
      font-size: ${theme.font.size.small};
    }
  `}
`;

export default Select;
