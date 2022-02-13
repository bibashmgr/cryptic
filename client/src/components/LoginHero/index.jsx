import React from 'react'
import { HeroBox, HeroContainer, HeroImage } from './LoginHeroElements'

const LoginHero = () => {
  return (
    <HeroContainer>
        <HeroBox />
        <HeroImage src='/images/signin-bg.svg' />
    </HeroContainer>
  )
}

export default LoginHero