import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import flexify from '../../styles/utils/flexify';
import EyeIcon from './EyeIcon';
import Text from './Text';

const Input = ({
  password,
  error,
  type,
  ...otherProps
}) => {
  const [isVisible, setIsVisible] = useState(false);
  let inputType = type;
  if (password) {
    inputType = isVisible ? 'text' : 'password';
  }
  return (
    <InputGroup>
      <InputWrapper>
        <StyledInput
          {...otherProps}
          type={inputType}
          error={error}
        />
        {password && (
        <EyeIcon isVisible={isVisible} setIsVisible={setIsVisible} />
        )}
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
  type: PropTypes.string,
};

Input.defaultProps = {
  password: false,
  error: '',
  type: 'text',
};

const StyledInput = styled.input`
    width: 100%;
    height: 58px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: white;
    padding-left: 15px;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    line-height: 23.48px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputGroup = styled.div`
  ${flexify({ alignItems: 'flex-start' })}
  margin-bottom: 8px;
  width: 100%;
`;

export default Input;
