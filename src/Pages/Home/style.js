import styled, { keyframes } from "styled-components";

const animateGradient = keyframes`
    0%, 100%{
        background: #0aeff0;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    50%{
        background: #ff1a59;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
const animateZoom = keyframes`
    0%{
        transform: scale(1.3);
    }
    100%{
        transform: scale(1);
    }
`
export const Home = styled.section`
    max-width: 100vw;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`
export const Container = styled.section`
    width: 100%;
    height: calc(100vh - 6rem);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    z-index: 99;
`
export const Subcontainer = styled.section`
    width: 100%;
    height: calc(100vh - 6rem);
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`
export const Box = styled.div`
    width: 60%;
    height: 60vh;
    margin-top: 2rem;
    padding: 1rem;
    border-top: 3px solid var(--colorPurple);
    border-bottom: 3px solid var(--colorPurple);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    backdrop-filter: blur(5px);
    box-shadow: 5px 5px 20px var(--colorBlack);

    @media (max-width: 840px) {
        flex-direction: column-reverse;
    }
`
export const TextBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 840px) {
        flex-direction: column-reverse;
        justify-content: center;
        height: 30%;
    }
`
export const Title = styled.h1`
    font-family: var(--primaryFont);
    font-size: 4rem;
    line-height: 4rem;
    filter: drop-shadow(5px 5px 5px var(--colorBlack));
    animation: ${animateGradient} 5s linear both;

    @media (max-width: 840px) {
        font-size: 2.5rem;
        line-height: 3rem;
        text-align: center;
    }
    @media (max-width: 500px) {
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
`
export const Figure = styled.figure`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 840px) {
        width: 50%;
    }
    @media (max-width: 500px) {
        width: 80%;
    }
`
export const Image = styled.img`
    width: 90%;
    border-radius: 50%;
    box-shadow: -5px -5px 10px var(--colorBlack);

    @media (max-width: 840px) {
        width: 80%;
    }
    @media (max-width: 500px) {
        width: 90%;
    }
`
export const SocialMedia = styled.div`
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    backdrop-filter: blur(5px);
    box-shadow: 5px 5px 20px var(--colorBlack);
`
export const Link = styled.a`
    width: 40px;
    height: 40px;

    &:hover i{
        color: var(--colorMagenta);
    }

    i{
        font-size: 40px;
        color: var(--colorCyan);
        transition: 1s all;
        filter: drop-shadow(3px 3px 2px var(--colorBlack));
    }

    @media (max-width: 500px) {
        transform: scale(.75);
    }
`
export const BackgroundBox = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
`
export const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${animateZoom} 10s;
`