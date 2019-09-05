import React from 'react';
import { QuintaFaixa, Infos, Value, Text } from './stylesQuinta';

export default function Inicial() {
  return (
    <QuintaFaixa>
      <Infos>
        <img src="./Assets/group.svg" alt="" />
        <Value> 1.312 </Value>
        <Text>CLIENTES SATISFEITOS</Text>
      </Infos>
      <Infos>
        <img src="./Assets/history.svg" alt="" />
        <Value> 50 </Value>
        <Text>ANOS DE HISTÓRIA</Text>
      </Infos>
      <Infos>
        <img src="./Assets/seller.svg" alt="" />
        <Value> +10 </Value>
        <Text>CORRTORES</Text>
      </Infos>
      <Infos>
        <img src="./Assets/hotel.svg" alt="" />
        <Value> 11.234 </Value>
        <Text>VENDAS E ALUGUEIS</Text>
      </Infos>
    </QuintaFaixa>
  );
}
