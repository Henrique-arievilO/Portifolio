import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'

export default function Nav() {
    return (
        <>
            <S.Nav>
                <S.Li>
                    <Link to='/'>Home</Link>
                </S.Li>
                <S.Li>
                    <Link to='about'>About</Link>
                </S.Li>
                <S.Li>
                    <Link to='projects'>Projects</Link>
                </S.Li>
            </S.Nav>
        </>
    )
}