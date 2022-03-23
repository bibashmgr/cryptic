import React from 'react';

import { HeroBox, HeroContainer, HeroImage } from './RegisterHeroElements';

const RegisterHero = () => {
  return (
    <HeroContainer>
      <HeroBox />
      <HeroImage src='/images/signup-bg.svg' />
    </HeroContainer>
  );
};

export default RegisterHero;
