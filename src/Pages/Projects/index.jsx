import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import * as S from './style';
import PP from '../../assets/cards/02.png';
import CEP from '../../assets/cards/04.png';
import IMC from '../../assets/cards/05.png';
import HP from '../../assets/cards/07.png';
import SW from '../../assets/cards/08.png';

export default function Projects() {
    let carouselStyle = {
        slidesToShow: 3,
        autoplay: false,
        enableKeyboardControls: true, //=> Passa no automático
        wrapAround: true
    };

    const projects = [
        {
            id: 1,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            name: 'ONU',
        },
        {
            id: 2,
            image: PP,
            name: 'Pair Programming',
            link: 'https://betterrecipes.netlify.app'
        },
        {
            id: 3,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            name: 'BabyBat',
        },
        {
            id: 4,
            image: CEP,
            name: 'Zip Code Finder',
            link: 'https://zipcodefinder.netlify.app'
        },
        {
            id: 5,
            image: IMC,
            name: 'IMC Calc',
            link: "https://imccalculator22.netlify.app"
        },
        {
            id: 6,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            name: 'Cronômetro',
        },
        {
            id: 7,
            image: HP,
            name: 'Harry Potter API',
            link: "https://oli-wander.herokuapp.com"
        },
        {
            id: 8,
            image: SW,
            name: 'Star Wars',
            link: 'https://wanderson-henrique-oliveira.github.io/M1T2-Tecnico-Desafio-Final-Star-Wars/'
        },
        {
            id: 9,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            name: 'Netflix',
        },
    ]

    return (
        <>
            <S.Title>Meus projetos</S.Title>
            <Carousel {...carouselStyle}>
                {projects.map((i) => (
                    <>
                        <S.Card key={i.id} href={i.link} target="_blank">
                            <S.Image src={i.image} alt={i.name} />
                        </S.Card>
                        <S.Subtitle>{i.name}</S.Subtitle>
                    </>
                ))}
            </Carousel>

        </>
    )
}