import React from 'react';
import * as S from './style';
import ONU from '../../assets/cards/01.png';
import PP from '../../assets/cards/02.png';
import BB from '../../assets/cards/03.png';
import CEP from '../../assets/cards/04.png';
import IMC from '../../assets/cards/05.png';
import Count from '../../assets/cards/06.png';
import HP from '../../assets/cards/07.png';
import SW from '../../assets/cards/08.png';
import Devflix from '../../assets/cards/09.png'

export default function Projects() {

    const projects = [
        {
            id: 1,
            image: ONU,
            name: 'ONU',
            link: 'https://ods-uberlandia-onu.netlify.app',
            github: 'https://github.com/Henrique-arievilO/ONU'
        },
        {
            id: 2,
            image: PP,
            name: 'Pair Programming',
            link: 'https://betterrecipes.netlify.app',
            github: 'https://github.com/Henrique-arievilO/Desafio-Pair-Programming'
        },
        {
            id: 3,
            image: BB,
            name: 'BabyBat',
            link: 'https://henrique-arievilo.github.io/M1T2-English-Challenge-01-Gothic-Page/',
            github: 'https://github.com/Henrique-arievilO/M1T2-English-Challenge-01-Gothic-Page'
        },
        {
            id: 4,
            image: CEP,
            name: 'Zip Code Finder',
            link: 'https://zipcodefinder.netlify.app',
            github: 'https://github.com/Henrique-arievilO/zip-code-finder'
        },
        {
            id: 5,
            image: IMC,
            name: 'IMC Calc',
            link: "https://imccalculator22.netlify.app",
            github: 'https://github.com/Henrique-arievilO/IMC-Calc'
        },
        {
            id: 6,
            image: Count,
            name: 'Contador',
            link: "https://purplecounter.herokuapp.com/",
            github: 'https://github.com/Henrique-arievilO/Counter-2.0'
        },
        {
            id: 7,
            image: HP,
            name: 'Harry Potter API',
            link: "https://oli-wander.herokuapp.com",
            github: 'https://github.com/Henrique-arievilO/Harry-Potter-API'
        },
        {
            id: 8,
            image: SW,
            name: 'Star Wars',
            link: 'https://henrique-arievilo.github.io/M1T2-Tecnico-Desafio-Final-Star-Wars/',
            github: 'https://github.com/Henrique-arievilO/M1T2-Tecnico-Desafio-Final-Star-Wars'
        },
        {
            id: 9,
            image: Devflix,
            name: 'Devflix',
            link: 'https://wanderflix.netlify.app/',
            github: 'https://github.com/Henrique-arievilO/Devflix'
        },
    ]

    return (
        <S.About>
            <S.Title>Clique na imagem para ver o site ou no nome para ver o código.</S.Title>
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