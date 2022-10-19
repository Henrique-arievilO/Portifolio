import React from 'react';
import * as S from './style';
import ProfilePhoto from '../../assets/image/profilePhoto.jpg';
import Background from '../../assets/image/bgHomeBlur.jpg';

export default function Home() {
    return (
        <>
            <S.Container>
                <S.Subcontainer>
                    <S.Box>
                        <S.TextBox>
                            <S.Title>Oi, eu sou o Henrique!</S.Title>
                        </S.TextBox>
                        <S.Figure>
                            <S.Image src={ProfilePhoto} alt="Foto de perfil do dev" />
                        </S.Figure>
                    </S.Box>
                    <S.SocialMedia>
                        <S.Link href="https://github.com/Wanderson-Henrique-Oliveira" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </S.Link>
                        <S.Link href="https://www.linkedin.com/in/wanderson-henrique-oliveira-74b718235/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </S.Link>
                        <S.Link href="https://www.instagram.com/henrique_arievilo26/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </S.Link>
                    </S.SocialMedia>
                </S.Subcontainer>
            </S.Container>
            <S.BackgroundBox>
                <S.Background src={Background} alt="Background synthwave" />
            </S.BackgroundBox>
        </>
    )
}