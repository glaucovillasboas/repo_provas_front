import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import flexify from '../../styles/utils/flexify';
import Text from './Text';

const Input = ({
  password,
  error,
  ...otherProps
}) => {

  return (
    <InputGroup>
      <InputWrapper>
        <StyledInput
          {...otherProps}
          error={error}
        />

      </InputWrapper>
      {error && (
        <Text variant="helper">
          {error}
        </Text>
      )}
    </InputGroup>
  );
};

Input.propTypes = {
  password: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  password: false,
  error: '',
};

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: white;
    padding-left: 15px;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    line-height: 23.48px;

    & {
      :disabled {
        opacity: 0.7;
      }
    }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputGroup = styled.div`
  ${flexify({ alignItems: 'flex-start' })}
  margin-bottom: 0px;
  width: 100%;
`;

export default Input;
