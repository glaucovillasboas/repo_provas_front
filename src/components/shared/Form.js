import styled from 'styled-components';
import { css } from 'styled-components/macro';

const Form = styled.form`
${({
  theme,
  marginTop = 'none',
  marginBottom = 'none',
}) => css`
    width: 100%;
    display: grid;
    row-gap:  ${theme.spacing.medium};
    margin-top: ${theme.spacing[marginTop]};
    margin-bottom: ${theme.spacing[marginBottom]};
  `
  }
`;
export default Form;
