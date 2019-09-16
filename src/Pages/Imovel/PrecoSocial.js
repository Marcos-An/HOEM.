import React from 'react';
import { Social, Preco, VendaAluguel, PrecosAlign } from './styles';
import MediaQuery from 'react-responsive';

import RedesSociais from './Social';

export default function Precos(props) {
  const { itemVenda, itemAluguel } = props;
  return (
    <>
      <Social>
        <PrecosAlign>
          {itemVenda > 0 ? (
            <VendaAluguel>
              Venda:
              <Preco>{`${itemVenda.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}`}</Preco>
            </VendaAluguel>
          ) : null}
          {itemAluguel > 0 ? (
            <VendaAluguel>
              Aluguel:
              <Preco>
                {`${itemAluguel.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}`}
              </Preco>
            </VendaAluguel>
          ) : itemAluguel === 0 && itemVenda === 0 ? (
            <Preco style={{ fontSize: '1.4em' }}>Consulte o Valor</Preco>
          ) : null}
        </PrecosAlign>
        <MediaQuery minDeviceWidth={1000}>
          <RedesSociais />
        </MediaQuery>
      </Social>
    </>
  );
}
