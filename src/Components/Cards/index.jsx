import React from 'react';
import * as S from './style'

export default function hardSkils() {
    const skils = [
        {
            id: 1,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            nome: 'HTML5',
            habilidades: 'HTML semântico, acessibilidade, resposividade, formulários, etc.',
        },
        {
            id: 2,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            nome: 'CC3',
            habilidades: 'Tipografia, design responsivo, filtros, animações, etc.',
        },
        {
            id: 3,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            nome: 'JavaScript',
            habilidades: 'Tipos de dados, funções, manipulação de DOM, etc.',
        },
        {
            id: 4,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            nome: 'React JS',
            habilidades: 'Manipulação de Arrays, Objetos, React Hook, React Router, etc.',
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
                            <S.P>{i.habilidades}</S.P>
                        </S.Border>
                    </S.Card>
                ))}
            </S.Wrap>
        </>
    )
}