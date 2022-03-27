import React from 'react';

// scss
import './SnackBar.scss';

// elements
import {
  SnackBarContainer,
  SnackBarContainers,
  SnackBarContent,
} from './SnackBarElements';

const SnackBar = ({ showSnackbar, error, isRight }) => {
  const rightStyle = {
    right: '-200px',
  };
  const leftStyle = {
    left: '-200px',
  };

  return (
    <SnackBarContainers
      id={
        isRight
          ? showSnackbar
            ? 'show'
            : 'hide'
          : showSnackbar
          ? 'reveal'
          : 'bury'
      }
      style={isRight ? rightStyle : leftStyle}
    >
      {error.username && (
        <SnackBarContainer>
          <SnackBarContent>{error.username}</SnackBarContent>
        </SnackBarContainer>
      )}
      {error.password && (
        <SnackBarContainer>
          <SnackBarContent>{error.password}</SnackBarContent>
        </SnackBarContainer>
      )}
      {error.password2 && (
        <SnackBarContainer>
          <SnackBarContent>{error.password2}</SnackBarContent>
        </SnackBarContainer>
      )}
    </SnackBarContainers>
  );
};

export default SnackBar;
