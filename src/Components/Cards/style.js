import styled, { keyframes } from "styled-components";

const animateFlip = keyframes`
    from{
        transform: rotateY(360deg);
    }
`

export const Wrap = styled.section`
    width: 90%;
    margin: 1rem auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 840px) {
        width: 60%;
    }
`
export const Card = styled.div`
    width: 11rem;
    height: 16rem;
    border: 2px solid var(--colorCyan);
    border-radius: 5px;
    margin: 0 auto 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(2px 2px 4px var(--colorCyan));
    background-color: transparent;
    backdrop-filter: blur(5px);
    box-shadow: 5px 5px 20px var(--colorBlack);
`
export const Border = styled.div`
    width: 9rem;
    height: 14rem;
    border: 4px double var(--colorCyan);
    padding: .5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`
export const Title = styled.h3`
    font-size: 1.2rem;
    color: #fff;
    font-family: var(--actionFont);
    font-weight: 300;
`
export const Image = styled.img`
    width: 70px;
    animation: ${animateFlip} 3s 1 linear;
`