import React from 'react';
import Skils from '../../Components/Cards'
import * as S from './style'

export default function About() {
    return (
        <S.About>
            <S.Container>
                <S.Title>Quem é <span>Henrique</span>?</S.Title>
                <S.P>Me chamo Wanderson 'Henrique' Oliveira, tenho atualmente 29 anos e sou natural de Perdizes, no interior de Minas Gerais.</S.P>
                <S.P>Desde muito novo, sempre tive uma afinidade com artes, desenho e pintura mais especificamente, embora na escola sempre tenha tido uma preferência por ciências exatas. Também sou apaixonado pela subcultura gótica e temas futuristas como cyberpunk.</S.P>
                <S.P>Recentemente descobri um mundo novo na programação: O Front-end. Foi questão de paixão à primeira vista. E desde então tenho sempre estudado e tentado me aperfeiçoar nesta área.</S.P>
            </S.Container>
            <section>
                <S.SubTitle>Conhecimentos</S.SubTitle>
                <div>
                    <Skils />
                </div>
            </section>
        </S.About>
    )
}