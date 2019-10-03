import React from 'react';
import Form from '../../Components/Form/FormInicial'
import {TerceiraFaixa, FormSpace, Text, Divisor} from './stylesTerceira';
import { Button } from 'antd';

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
    <TerceiraFaixa>
        <Text>
            <Divisor/>
            <h1>A melhor maneira de encontrar a sua casa!</h1>
            <h4> 
              Fusce Et Sem Elementum, Mis Nibh Nec, Tincidunt Ipsum Etiau Eu Ctor Turpis.
              Quisque Sitmi Lementum, Mis Nibh Nec, Tincidunt Ipsumelit. Cras Vel Dui Vel Orciarel Gravida.
              Rpis. Quisque Sitmi Tincidunt Ipsum Etiau.
            </h4>
            <Button
              size="large"
              type="danger" 
              href={"./Contato"}
            > 
              Entre em contato
            </Button>
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
    </TerceiraFaixa>
  );
}
