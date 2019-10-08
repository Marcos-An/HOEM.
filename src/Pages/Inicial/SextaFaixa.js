import React from 'react';
import { SextaFaixa, Infos, Value, Text } from './stylesSexta';

export default function Inicial() {
  return (
    <SextaFaixa>
      <Infos>
        <Value> 1.312 </Value>
        <Text>Clientes satisfeitos</Text>
      </Infos>
      <Infos>
        <Value> 50 </Value>
        <Text>Anos de história</Text>
      </Infos>
      <Infos>
        <Value> +10 </Value>
        <Text>Corretores de imóveis</Text>
      </Infos>
      <Infos>
        <Value> 11.234 </Value>
        <Text>Vendas e alugueis</Text>
      </Infos>
    </SextaFaixa>
  );
}
