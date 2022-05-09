import React from 'react';

// scss
import './SnackBar.scss';

// elements
import {
  SnackBarContainer,
  SnackBarContainers,
  SnackBarContent,
} from './SnackBarElements';

const SnackBar = ({ showSnackbar, error, isRight, isError }) => {
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
        <SnackBarContainer
          style={{ backgroundColor: isError ? '#ff7878' : '#7bed9f' }}
        >
          <SnackBarContent>{error.username}</SnackBarContent>
        </SnackBarContainer>
      )}
      {error.password && (
        <SnackBarContainer
          style={{ backgroundColor: isError ? '#ff7878' : '#7bed9f' }}
        >
          <SnackBarContent>{error.password}</SnackBarContent>
        </SnackBarContainer>
      )}
      {error.password2 && (
        <SnackBarContainer
          style={{ backgroundColor: isError ? '#ff7878' : '#7bed9f' }}
        >
          <SnackBarContent>{error.password2}</SnackBarContent>
        </SnackBarContainer>
      )}
      {error.others && (
        <SnackBarContainer
          style={{ backgroundColor: isError ? '#ff7878' : '#7bed9f' }}
        >
          <SnackBarContent>{error.others}</SnackBarContent>
        </SnackBarContainer>
      )}
    </SnackBarContainers>
  );
};

export default SnackBar;
