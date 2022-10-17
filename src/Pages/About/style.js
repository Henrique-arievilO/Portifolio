import styled from "styled-components";
import Background from "../../assets/image/bgAbout.jpg";

export const About = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: -4rem;
    padding: 5rem  5% 1rem;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-position-y: -180deg;
    

    /* @media (max-width: 1366px) {
        height: 100vh;
    } */
    @media (max-width: 770px) {
        height: 100%;
    }
`
export const Container = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: .5rem 1rem;
    background-color: transparent;
    backdrop-filter: blur(50px);
    box-shadow: 5px 5px 20px var(--colorBlack);
    color: var(--colorWhite);

    @media (max-width: 840px) {
        width: 85%;
    }
`
export const Title = styled.h1`
    font-family: var(--primaryFont);
    font-size: 1.5rem;
    text-align: center;
`
export const P = styled.p`
    font-family: var(--secundaryFont);
    font-size: 1rem;
    font-weight: 300;
    margin-top: 5px;
`
export const SubTitle = styled.h2`
    font-family: var(--primaryFont);
    font-size: 1.5rem;
    text-align: center;
    margin: .5rem auto 0;
    color: var(--colorWhite);
    background-color: transparent;
    backdrop-filter: blur(50px);
    box-shadow: 5px 5px 20px var(--colorBlack);

    @media (max-width: 840px) {
        width: 85%;
    }
`