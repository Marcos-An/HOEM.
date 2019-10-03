import React from 'react';
import { Body, Infos, Info, Indice } from './stylesInfo';

export default function Informacoes(props) {
  const { Id, Tipo } = props;
  return (
    <Body>
      <Infos>
        <Indice>Imóvel ID:</Indice>
        <Info>{Id}</Info>
      </Infos>
      <Infos>
        <Indice>Tipo do imóvel:</Indice>
        <Info>{Tipo}</Info>
      </Infos>
    </Body>
  );
}