import styled from "styled-components";

export const Nav = styled.ul`
    width: 60%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 auto;
    position: relative;
    z-index: 99;
    
    @media (max-width: 500px) {
        width: 90%;
        align-items: center;
    }
`
export const Li = styled.li`
    width: 10rem;
    height: 2.5rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover a{
        color: var(--colorMagenta);
        font-size: 2.3rem;
        border-top: 2px solid var(--colorMagenta);
        border-bottom: 2px solid var(--colorMagenta);
        filter: drop-shadow(2px 2px 2px #000);

        @media (max-width: 840px) {
        width: 7rem;
        font-size: 1.8rem;
    }
        @media (max-width: 500px) {
        width: 5rem;
        font-size: 1.3rem;
    }
    }

    a{
        width: 100%;
        height: 100%;
        line-height: 2.5rem;
        text-align: center;
        text-shadow: 2px 2px 2px var(--colorViolet);
        font-family: var(--actionFont);
        font-size: 2rem;
        color: var(--colorCyan);
        transition: 1s all;

        @media (max-width: 840px) {
        width: 7rem;
        font-size: 1.5rem;
    }
        @media (max-width: 500px) {
        width: 5rem;
        font-size: 1rem;
        line-height: 1.5rem;
    }
    }

    @media (max-width: 840px) {
        width: 6rem;
    }
    @media (max-width: 500px) {
        width: 5rem;
        height: 2rem;
    }
`