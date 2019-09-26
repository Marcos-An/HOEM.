import React from 'react';
import Form from '../../Components/Form/FormInicial'
import { PrimeiraFaixa, Content, FormSpace, Text } from './stylesPrimeira';

export default function Primeira(props) {
  
  const {
    handleFinalidade,
    handleFaixaPrecoAluguel,
    handleFaixaPrecoVenda,
    handleTipoImovel,
    handleQtdDormitorios,
    handleSearch,
    Finalidade
  } = props

  return (
    <PrimeiraFaixa>
      <Content>
        <Text>
          <div>
            <h1>A melhor maneira de encontrar a sua casa!</h1>
          </div>
          <div>
            <h6>A melhor maneira de encontrar a sua casa.</h6>
          </div>
        </Text>

        <FormSpace>
            <Form 
              handleFaixaPrecoAluguel={handleFaixaPrecoAluguel}
              handleFaixaPrecoVenda={handleFaixaPrecoVenda}
              handleFinalidade={handleFinalidade}
              handleQtdDormitorios={handleQtdDormitorios}
              handleTipoImovel={handleTipoImovel}
              handleSearch={handleSearch}
              finalidade={Finalidade}
            />
        </FormSpace>
      </Content>
    </PrimeiraFaixa>
  );
}
