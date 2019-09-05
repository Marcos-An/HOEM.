import React from 'react';
import {
  QuartaFaixa,
  Title,
  Agentes,
  Agente,
  Img,
  Name,
  Telefone,
  Mais
} from './stylesQuarta';

export default function Quarta() {
  return (
    <QuartaFaixa>
      <Title>NOSSOS AGENTES</Title>
      <Agentes>
        <Agente>
          <Img
            style={{
              backgroundImage: `url('http://realtyspace.codefactory47.com/app/uploads/2016/04/worker-2-500x480-c-center.jpg')`
            }}
          />
          <div>
            <Name>Helena Silva</Name>
            <Telefone>067 9935-6948</Telefone>
            <Mais> LEIA MAIS </Mais>
          </div>
        </Agente>
        <Agente>
          <Img
            style={{
              backgroundImage: `url('http://realtyspace.codefactory47.com/app/uploads/2016/04/worker-4-500x480-c-center.jpg')`
            }}
          />
          <div>
            <Name>Valdemir Santos</Name>
            <Telefone>067 9935-6948</Telefone>
            <Mais> LEIA MAIS </Mais>
          </div>
        </Agente>
        <Agente>
          <Img
            style={{
              backgroundImage: `url('http://realtyspace.codefactory47.com/app/uploads/2016/04/worker-3-500x480-c-center.jpg')`
            }}
          />
          <div>
            <Name>Thiago Tetila</Name>
            <Telefone>067 9935-6948</Telefone>
            <Mais> LEIA MAIS </Mais>
          </div>
        </Agente>
        <Agente>
          <Img
            style={{
              backgroundImage: `url('http://realtyspace.codefactory47.com/app/uploads/2016/04/worker-2-500x480-c-center.jpg')`
            }}
          />
          <div>
            <Name>Marisa Monte</Name>
            <Telefone>067 9935-6948</Telefone>
            <Mais> LEIA MAIS </Mais>
          </div>
        </Agente>
      </Agentes>
    </QuartaFaixa>
  );
}
