import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  position: relative;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const HeroBox = styled.div`
  width: 400px;
  height: 100%;
  background-color: #78bcff;
`;

export const HeroImage = styled.img`
  width: 500px;
  position: absolute;
  top: 15%;
  left: 20%;
`;
