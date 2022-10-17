import React from 'react';
import * as S from './style'

export default function hardSkils() {
    const skils = [
        {
            id: 1,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            nome: 'HTML5',
        },
        {
            id: 2,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            nome: 'CSS3',
        },
        {
            id: 3,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            nome: 'JavaScript',
        },
        {
            id: 4,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            nome: 'React JS',
        },
        {
            id: 5,
            logo: "https://pbs.twimg.com/media/FfLLA5GXoAAVo1X?format=png&name=small",
            nome: 'Styled Components',
        }
    ]

    return (
        <>
            <S.Wrap>
                {skils.map((i) => (
                    <S.Card key={i.id}>
                        <S.Border>
                            <S.Title>{i.nome}</S.Title>
                            <S.Image src={i.logo} alt="logo skil" />
                        </S.Border>
                    </S.Card>
                ))}
            </S.Wrap>
        </>
    )
}