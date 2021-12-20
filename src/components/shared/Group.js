import styled from 'styled-components';
import { css } from 'styled-components/macro';
import flexify from '../../styles/utils/flexify';

const Group = styled.div`
${({
    theme,
    background = 'inherit',
    flexProps = {},
    marginTop = 'none',
    marginBottom = 'none',
    paddingX = 'none',
    paddingY = 'none',
    fitContent,
    maxWidth,
  }) => css`
    ${flexify(flexProps)}
    width:  ${(fitContent ? 'fit-content' : '100%')};
    max-width:  ${maxWidth};
    background: ${theme.color[background]};
    margin-top: ${theme.spacing[marginTop]};
    margin-bottom: ${theme.spacing[marginBottom]};
    padding: ${`${theme.spacing[paddingY]} ${theme.spacing[paddingX]}`};
  `
}
`;

export default Group;
