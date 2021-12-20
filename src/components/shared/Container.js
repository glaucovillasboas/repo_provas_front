import styled from 'styled-components';
import { css } from 'styled-components/macro';
import flexify from '../../styles/utils/flexify';

const Container = styled.div`
  ${({
  theme,
  background = 'inherit',
  flexProps = {},
  marginTop = 'none',
  paddingX = 'medium',
  paddingY = 'none',
  fitContent,
}) => css`
    ${flexify(flexProps)}
    width:  ${(fitContent ? 'fit-content' : '100vw')};
    max-width: 600px;
    min-height: calc(100vh - ${theme.spacing[marginTop]});
    margin: auto;
    margin-top: ${theme.spacing[marginTop]};
    background: ${theme.color[background]};
    padding: ${`${theme.spacing[paddingY]} ${theme.spacing[paddingX]}`};
    animation: fadeIn 750ms;
  `
  }
`;

export default Container;
