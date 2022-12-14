import React from 'react'
import * as S from './Style'
import Header from '../../Services/Header/Index'
import Footer from '../../Services/Footer/Index'
import Html from '../../Assets/Skills/html.png'
import Css from '../../Assets/Skills/css.png'
import JavaScript from '../../Assets/Skills/javascript.png'
import ReactLanguage from '../../Assets/Skills/react.png'
import Photo1 from '../../Assets/Photos/photo1.png'


export default function Aboutme(){
    return(
        <S.ContainerAboutMe>
            <Header />
            <S.All>
                <S.Content>
                    <S.H2>Sobre Mim</S.H2>
                    <S.P>Olá, me chamo David, tenho 28 anos, sou Desenvolvedor Front End Jr, formando pelo curso do Vai na Web em Programação Front End e Análise e Desenvolvimento de Sistema pela Faculdade Descomplica em busca de uma oportunidade na área de Programação.</S.P>
                    <S.Skills>
                        <S.ContainerLanguage>
                            <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target='_blank' rel="noreferrer"><S.LanguageImg src={Html} alt='HTML'/></a>
                            <S.H6>HTML</S.H6>
                        </S.ContainerLanguage>
                        <S.ContainerLanguage>
                            <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target='_blank' rel="noreferrer"><S.LanguageImg src={Css} alt='CSS'/></a>
                            <S.H6>CSS</S.H6>
                        </S.ContainerLanguage>
                        <S.ContainerLanguage>
                            <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank' rel="noreferrer"><S.LanguageImg src={JavaScript} alt='JavaScript'/></a>
                            <S.H6>JavaScript</S.H6>
                        </S.ContainerLanguage>
                        <S.ContainerLanguage>
                            <a href='https://reactnative.dev/docs/getting-started' target='_blank' rel="noreferrer"><S.LanguageImg src={ReactLanguage} alt='CSReactS'/></a>
                            <S.H6>React</S.H6>
                        </S.ContainerLanguage>
                    </S.Skills>
                </S.Content>
                <S.Box>
                    <S.Photo src={Photo1} alt='David' />
                </S.Box>
            </S.All>
            <Footer />
        </S.ContainerAboutMe>
    )
}