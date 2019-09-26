import React from 'react'
import { Form, Button } from 'antd';
import { Search } from './styles'
import Finalidade from './Finalidade'
import TipoImovel from './TipoImovel'
import Aluguel from './Aluguel'
import Venda from './Venda'
import Dormitorios from './Dormitorios'

export default function FormLayout(props) {
    const {
      handleFinalidade,
      handleFaixaPrecoAluguel,
      handleFaixaPrecoVenda,
      handleTipoImovel,
      handleQtdDormitorios,
      handleSearch,
      finalidade
    } = props;

    return (
      <div style={{padding: 40}}>
        <Search>Pesquise seu imóvel</Search>
        <Form layout="vertical" >
          <Form.Item>
            <Finalidade handleChange={ handleFinalidade } />
          </Form.Item>
          <Form.Item>
            <TipoImovel handleChange={ handleTipoImovel }/>
          </Form.Item>
          <Form.Item>
            <Dormitorios handleChange={ handleQtdDormitorios }/>
          </Form.Item>
          {finalidade === 'Aluguel' ? (
            <Form.Item>
              <Aluguel handleChange={ handleFaixaPrecoAluguel }/>
            </Form.Item>
          ): finalidade === 'Venda' ? (
            <Form.Item>
              <Venda handleChange={ handleFaixaPrecoVenda }/>
            </Form.Item>
          ) : (  
          <Form.Item>
            <Aluguel handleChange={ handleFaixaPrecoAluguel } />
          </Form.Item>
          ) }
          <a href="#Imoveis" onClick={handleSearch} >
            <Button 
              size="large"
              type="primary" 
              block
            >
              Pesquisar 
            </Button> 
          </a>
        </Form>
      </div>
    );
  }
