import React from 'react'
import { Form, Button } from 'antd';
import { Search } from './styles'
import Finalidade from './Finalidade'
import TipoImovel from './TipoImovel'
import Aluguel from './Aluguel'
import Venda from './Venda'
import Dormitorios from './Dormitorios'

export default class FormLayoutDemo extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      Finalidade: undefined,
      TipoImovel : undefined,
      Bairro : undefined,
      FaixaPrecoAluguel : undefined,
      FaixaPrecoVenda : undefined,
      QtdDormitorios : undefined
    }
    this.handleFinalidade = this.handleFinalidade.bind(this)
    this.handleTipoImovel = this.handleTipoImovel.bind(this)
    this.handleFaixaPrecoAluguel = this.handleFaixaPrecoAluguel.bind(this)
    this.handleFaixaPrecoVenda = this.handleFaixaPrecoVenda.bind(this)
    this.handleQtdDormitorios = this.handleQtdDormitorios.bind(this)
  }
  handleFinalidade(value){
    this.setState({ Finalidade : value});
  }
  handleTipoImovel(value){
    this.setState({ TipoImovel : value });
  }
  handleFaixaPrecoAluguel(value){
    this.setState({ FaixaPrecoAluguel : value });
  }
  handleFaixaPrecoVenda(value){
    this.setState({ FaixaPrecoVenda : value });
  }
  handleQtdDormitorios(value){
    this.setState({ QtdDormitorios : value });
  }

  render() {
    return (
      <div style={{padding: 40}}>
        <Search>Pesquise seu imóvel</Search>
        <Form layout="vertical" >
          <Form.Item>
            <Finalidade handleChange={this.handleFinalidade} />
          </Form.Item>
          <Form.Item>
            <TipoImovel handleChange={this.handleTipoImovel }/>
          </Form.Item>
          <Form.Item>
            <Dormitorios handleChange={this.handleQtdDormitorios }/>
          </Form.Item>
          {this.state.Finalidade === 'Aluguel' ? (
            <Form.Item>
              {console.log(this.state.FaixaPrecoAluguel)}
              <Aluguel handleChange={ this.handleFaixaPrecoAluguel }/>
            </Form.Item>
          ): this.state.Finalidade === 'Venda' ? (
            <Form.Item>
              {console.log(this.state.FaixaPrecoVenda)}
              <Venda handleChange={ this.handleFaixaPrecoVenda }/>
            </Form.Item>
          ) : (  
          <Form.Item>
            {console.log(this.state.FaixaPrecoAluguel)}
            <Aluguel handleChange={ this.handleFaixaPrecoAluguel } />
          </Form.Item>
          ) }
          <Button size="large" type="primary" block>
             Pesquisar 
          </Button>
        </Form>
      </div>
    );
  }
}
