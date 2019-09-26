import React from 'react'
import { Form, Button, } from 'antd';
import TipoImovel from './TipoImovel'
import Finalidade from './Finalidade'
import Aluguel from './Aluguel'
import Venda from './Venda'
import Dormitorios from './Dormitorios'

export default function FormLayout(props) {
    const { 
      funcFinalidade, 
      funcTipoImovel, 
      funcQtdDormitorios, 
      funcFaixaPrecoAluguel, 
      funcFaixaPrecoVenda,
      finalidade,
      handleSearch
    } = props
    
    return (
        <Form layout="vertical" >
          <Form.Item>
            <Finalidade handleChange={funcFinalidade} />
          </Form.Item>
          <Form.Item>
            <TipoImovel handleChange={funcTipoImovel}/>
          </Form.Item>
          <Form.Item>
            <Dormitorios handleChange={funcQtdDormitorios}/>
          </Form.Item>
          {finalidade === 'Aluguel' ? (
            <Form.Item>
              <Aluguel handleChange={funcFaixaPrecoAluguel}/>
            </Form.Item>
          ): finalidade === 'Venda' ? (
            <Form.Item>
              <Venda handleChange={funcFaixaPrecoVenda}/>
            </Form.Item>
          ) : (  
          <Form.Item>
            <Aluguel handleChange={funcFaixaPrecoAluguel} />
          </Form.Item>
          ) }
          <Button 
            size="large" 
            type="primary" 
            block 
            style={{background : '#2c3e50', border: 'none',}}
            onClick={handleSearch}
          >
             Pesquisar 
          </Button>
        </Form>
    );
}
