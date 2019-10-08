import React from 'react';
import { 
  QuintaFaixa,
  Agentes,
  Agente, 
  Img,
  Nome,
  Funcao,
  Divisor,
  Icons,
  ContatoAgentes
} from './stylesQuinta';

import { Title, SubTitle } from '../../Components/Cards/ImoveisCard/styles';
import Box from './BoxInfo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Quarta() {
  return (
    <>
      <Box/>      
      <QuintaFaixa>
        <SubTitle>Coneça nosso time</SubTitle>
        <Title>NOSSO TIME</Title>
        <Agentes>
            <Agente className="zoom">
              <Img className="imagem" imagem={`https://images.unsplash.com/photo-1548260435-f3e7ec40e513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`}/>
              <Funcao>Corretora de Imóveis</Funcao>
              <Nome> Rafaela Mercuri </Nome>
              <Divisor/>
              <Icons>
                <FontAwesomeIcon icon={ faMobileAlt } style={{fontSize: 17, color: '#9c9c9c'}}/>
                <ContatoAgentes>+067 99987-9779</ContatoAgentes>
              </Icons>
              <Icons>
                <FontAwesomeIcon icon={ faEnvelope } style={{fontSize: 17, color: '#9c9c9c'}}/>
                <ContatoAgentes>agent@example.com</ContatoAgentes>
              </Icons>
            </Agente>
            <Agente className="zoom">
              <Img className="imagem" imagem={`https://images.unsplash.com/photo-1548946526-f69e2424cf45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80`}/>
              <Funcao>Corretor de Imóveis</Funcao>
              <Nome> Mauricio Ricardo </Nome>
              <Divisor/>
              <Icons>
                <FontAwesomeIcon icon={ faMobileAlt } style={{fontSize: 17, color: '#9c9c9c'}}/>
                <ContatoAgentes>+067 99987-9779</ContatoAgentes>
              </Icons>
              <Icons>
                <FontAwesomeIcon icon={ faEnvelope } style={{fontSize: 17, color: '#9c9c9c'}}/>
                <ContatoAgentes>agent@example.com</ContatoAgentes>
              </Icons>
            </Agente>
            <Agente className="zoom">
              <Img className="imagem" imagem={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}/>
              <Funcao>Corretora de Imóveis</Funcao>
              <Nome> Sasha Rodrigues </Nome>
              <Divisor/>
              <Icons>
                <FontAwesomeIcon icon={ faMobileAlt } style={{fontSize: 17, color: '#9c9c9c'}}/>
                <ContatoAgentes>+067 99910-9777</ContatoAgentes>
              </Icons>
              <Icons>
                <FontAwesomeIcon icon={ faEnvelope } style={{fontSize: 17, color: '#9c9c9c'}}/>
                <ContatoAgentes>agent@example.com</ContatoAgentes>
              </Icons>
            </Agente>
            <Agente className="zoom">
              <Img className="imagem" imagem={`https://images.unsplash.com/photo-1503593245033-a040be3f3c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80`}/>
              <Funcao>Corretor de Imóveis</Funcao>
              <Nome> Andre Santos </Nome>    
              <Divisor/>      
              <Icons>
                <FontAwesomeIcon icon={ faMobileAlt } style={{fontSize: 17, color: '#9c9c9c'}}/>
                <ContatoAgentes>+044 9917-4579</ContatoAgentes>
              </Icons> 
              <Icons>
                <FontAwesomeIcon icon={ faEnvelope } style={{fontSize: 17, color: '#9c9c9c'}}/>
                <ContatoAgentes>agent@example.com</ContatoAgentes>
              </Icons>
            </Agente>
        </Agentes>
      </QuintaFaixa>
    </>
  );
}
