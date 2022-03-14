import React from 'react';

// elements
import {
  MiddleBarContainer,
  BarItem,
  BarItems,
  BarLink,
  SaveLogo,
  GridLogo,
} from './MiddleBarElements';

const MiddleBar = ({ setIsOpen }) => {
  const handlePostBtn = () => {
    setIsOpen(true);
    document.getElementById('mypost').style.borderBottom =
      '2.5px solid #78bcff';
    document.getElementById('mysave').style.borderBottom = 'none';
  };

  const handleSaveBtn = () => {
    setIsOpen(false);
    document.getElementById('mypost').style.borderBottom = 'none';
    document.getElementById('mysave').style.borderBottom =
      '2.5px solid #78bcff';
  };

  return (
    <MiddleBarContainer>
      <BarItems>
        <BarItem id='mypost' style={{ borderBottom: '2.5px solid #78bcff' }}>
          <BarLink onClick={handlePostBtn}>
            <GridLogo />
          </BarLink>
        </BarItem>
        <BarItem id='mysave'>
          <BarLink onClick={handleSaveBtn}>
            <SaveLogo />
          </BarLink>
        </BarItem>
      </BarItems>
    </MiddleBarContainer>
  );
};

export default MiddleBar;
