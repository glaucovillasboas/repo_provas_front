import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: '#F18805',
    primaryLight: '#F0A202',
    text: '#fff',
    white: '#fff',
    danger: 'rgb(250, 0, 0)',
    gray: '#C6C6C6',
    green: '#03AC00',
    red: '#C70000',
    black: '#000',
    inherit: 'inherit',
  },
  font: {
    size: {
      extraSmall: '12px',
      small: '14px',
      medium: '16px',
      large: '20px',
      extraLarge: '24px',
    },
    family: 'Raleway, sans-serif',
  },
  spacing: {
    small: '5px',
    medium: '10px',
    large: '20px',
    huge: '40px',
    auto: 'auto',
    none: '0px',
  },
};

// eslint-disable-next-line arrow-body-style
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
    PropTypes.node,
  ]),
};

Theme.defaultProps = {
  children: '',
};

export default Theme;
