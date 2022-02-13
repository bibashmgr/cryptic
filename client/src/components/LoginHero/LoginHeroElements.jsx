import styled from 'styled-components';

export const HeroContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;

    @media screen and (max-width: 992px) {
        display: none;
    }
`

export const HeroBox = styled.div`
    width: 400px;
    height: 100%;
    background-color: #78bcff;
`

export const HeroImage = styled.img`
    width: 400px;
    position: absolute;
    top: 4%;
    right: 25%;
`