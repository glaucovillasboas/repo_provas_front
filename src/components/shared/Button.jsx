import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { css } from 'styled-components/macro';
import flexify from '../../styles/utils/flexify';
import unselectable from '../../styles/utils/unselectable';
import noHighlight from '../../styles/utils/noHighlight';

const Button = ({
  isLoading, children, keepText, ...otherProps
}) => (
  <StyledButton
    {...otherProps}
    isLoading={isLoading}
    disabled={isLoading}
  >
    {isLoading && !keepText ? (
      <Loader
        type="Bars"
        color="#fff"
        height={30}
      />
    ) : (
      children
    )}
  </StyledButton>
);

Button.propTypes = {
  isLoading: PropTypes.bool,
  keepText: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]),
};

Button.defaultProps = {
  isLoading: false,
  keepText: false,
  children: '',
};

const StyledButton = styled.button`
  ${({
  theme,
  marginTop = 'none',
  marginBottom = 'none',
  background = 'primaryLight',
  big = false,
  fitContent,
}) => css`
    ${flexify()}
    ${unselectable()}
    ${noHighlight()}
    height: ${big ? '80px' : '46px'};
    width:  ${(fitContent ? 'fit-content' : '100%')};
    padding: 20px;
    border-radius: 5px;
    border: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${theme.spacing[marginTop]};
    margin-bottom: ${theme.spacing[marginBottom]};
    background-color: ${theme.color[background]};
    font-size: ${theme.font.size.large};
    color: white;
    font-weight: bold;
    cursor: ${({ isLoading }) => (isLoading ? 'wait' : 'pointer')};
    opacity: ${({ isLoading }) => (isLoading ? '0.5' : '1')};

    & {
      :hover {
        filter: brightness(1.1);
      }

      :disabled {
        opacity: 0.5;
      }

      * {
        cursor: inherit;
      }

      div {
        ${flexify()}
      }
    }
  `}
`;

export default Button;
