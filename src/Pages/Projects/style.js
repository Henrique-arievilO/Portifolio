import styled from "styled-components";
import Background from "../../assets/image/bgProjects.jpg";

export const About = styled.section`
    width: 100%;
    margin-top: -4rem;
    padding: 5rem  5% 1rem;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    

    /* @media (max-width: 1366px) {
        height: 100vh;
    } */
    @media (max-width: 770px) {
        height: 100%;
    }
`
export const Container = styled.section`
    width: 90%;
    margin: 0 auto 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 550px) {
        width: 90%;
    }
    @media (max-width: 450px) {
        justify-content: center;
    }
`
export const Card = styled.a`
    width: 20rem;
    height: 10rem;
    border: 2px solid #f5f5f5;
    margin: 4rem auto 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    backdrop-filter: blur(5px);
    box-shadow: 2px 2px 4px var(--colorBlack);
    transition: all .3s;
    border-radius: 15px;
    overflow: hidden;

    &:hover{
        border-radius: 0px;
        filter: drop-shadow(1px 1px 2px var(--colorCyan));
        border: 2px solid var(--colorCyan);
    }

    @media (max-width: 840px) {
        width: 17rem;
        height: 8.5rem;
        margin: 4rem auto 1rem;
    }
    @media (max-width: 840px) {
        width: 15rem;
        height: 7.5rem;
    }

    @media (max-width: 550px) {
        width: 12rem;
        height: 6rem;
        margin: 4rem auto 1rem;
    }
    @media (max-width: 450px) {
        width: 15rem;
        height: 7.5rem;
        margin: 4rem auto 1rem;
    }
`
export const Subtitle = styled.h3`
    height: 1.5rem;
    font-size: 1.2rem;
    padding: .3rem;
    color: #fff;
    font-family: var(--actionFont);
    text-align: center;
    background-color: transparent;
    backdrop-filter: blur(50px);
    box-shadow: 5px 5px 20px 5px var(--colorBlack);
    cursor: pointer;

    &:hover{
        color: var(--colorCyan);
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`