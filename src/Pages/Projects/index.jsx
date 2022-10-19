import React from 'react';
import * as S from './style';
import ONU from '../../assets/cards/01.png';
import PP from '../../assets/cards/02.png';
import CEP from '../../assets/cards/04.png';
import IMC from '../../assets/cards/05.png';
import HP from '../../assets/cards/07.png';
import SW from '../../assets/cards/08.png';

export default function Projects() {

    const projects = [
        {
            id: 1,
            image: ONU,
            name: 'ONU',
            link: 'https://ods-uberlandia-onu.netlify.app',
            github: 'https://github.com/Wanderson-Henrique-Oliveira/ONU'
        },
        {
            id: 2,
            image: PP,
            name: 'Pair Programming',
            link: 'https://betterrecipes.netlify.app',
            github: 'https://github.com/Wanderson-Henrique-Oliveira/Desafio-Pair-Programming'
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
            link: 'https://zipcodefinder.netlify.app',
            github: 'https://github.com/Wanderson-Henrique-Oliveira/zip-code-finder'
        },
        {
            id: 5,
            image: IMC,
            name: 'IMC Calc',
            link: "https://imccalculator22.netlify.app",
            github: 'https://github.com/Wanderson-Henrique-Oliveira/IMC-Calc'
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
            link: "https://oli-wander.herokuapp.com",
            github: 'https://github.com/Wanderson-Henrique-Oliveira/Harry-Potter-API'
        },
        {
            id: 8,
            image: SW,
            name: 'Star Wars',
            link: 'https://wanderson-henrique-oliveira.github.io/M1T2-Tecnico-Desafio-Final-Star-Wars/',
            github: 'https://github.com/Wanderson-Henrique-Oliveira/M1T2-Tecnico-Desafio-Final-Star-Wars'
        },
        {
            id: 9,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            name: 'Netflix',
        },
    ]

    return (
        <S.About>
            <S.Container>
                {projects.map((i) => (
                    <div>
                        <S.Card key={i.id} href={i.link} target="_blank">
                            <S.Image src={i.image} alt={i.name} />
                        </S.Card>
                        <S.Subtitle>
                            <S.A href={i.github} target="_blank" rel='noreferrer'>{i.name} - GitHub</S.A>
                        </S.Subtitle>
                    </div>
                ))}
            </S.Container>
        </S.About>
    )
}