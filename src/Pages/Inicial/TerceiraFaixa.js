import React from 'react';
import { TerceiraFaixa, Imagem, Info, InfoIcon } from './stylesTerceira';

export default function Terceira() {
  return (
    <TerceiraFaixa>
      <Imagem />
      <Info>
        <h1>NOSSA MISSÃO</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula
          elit justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed vehicula elit justo.
        </p>
        <InfoIcon>
          <div>
            <img src="./Assets/rich.svg" alt="" />
            <h2>Salve seu dinheiro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula elit justo.
            </p>
          </div>
          <div>
            <img src="./Assets/bars.svg" alt="" />
            <h2>Salve seu dinheiro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula elit justo.
            </p>
          </div>
          <div>
            <img src="./Assets/sun.svg" alt="" />

            <h2>Salve seu dinheiro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula elit justo.
            </p>
          </div>
          <div>
            <img src="./Assets/search.svg" alt="" />
            <h2>Salve seu dinheiro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula elit justo.
            </p>
          </div>
        </InfoIcon>
      </Info>
    </TerceiraFaixa>
  );
}
