import styled from "styled-components";

export const Card = styled.a`
    width: 25rem;
    height: 15rem;
    border: 2px solid var(--colorCyan);
    border-radius: 5px;
    margin: 3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    filter: drop-shadow(2px 2px 4px var(--colorCyan));
    background-color: transparent;
    backdrop-filter: blur(5px);
    box-shadow: 5px 5px 20px var(--colorBlack);
    transition: all .3s;

    &:hover{
        transform: scale(1.2);
    }
`
export const Title = styled.h3`
    height: 1.5rem;
    font-size: 1.2rem;
    color: #fff;
    font-family: var(--actionFont);
    font-weight: 300;
`
export const Subtitle = styled.h3`
    height: 1.5rem;
    font-size: 1.2rem;
    color: #fff;
    font-family: var(--actionFont);
    text-align: center;
`

export const Image = styled.img`
    width: 100%;
    height: 15rem;
`