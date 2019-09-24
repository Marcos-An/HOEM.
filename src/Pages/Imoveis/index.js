import React, { Component } from 'react';
import { Body, Sider, Main, Name, Search, Faixa } from './styles';
import Cards from '../../Components/Cards/CardsMini';
import Form from '../../Components/Form/FormMini';
import { Divider, Card } from 'antd';

export default class Imoveis extends Component{
  constructor(props){
    super(props);
    this.state = {
      Finalidade : undefined,
      TipoImovel : undefined,
      FaixaPrecoAluguel : undefined,
      FaixaPrecoVenda : undefined,
      QtdDormitorios : undefined,
      Reload: false
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
  render(){
    return (
        <Body>
          <Main>
            <Name>
              PROPRIEDADES
            </Name>
            <Divider />
            <Faixa/>
            <Cards 
              finalidade={this.state.Finalidade}
              tipoImovel={this.state.TipoImovel}
              faixaPrecoAluguel={this.state.FaixaPrecoAluguel}
              faixaPrecoVenda={this.state.FaixaPrecoVenda}
              qtdDormitorios={this.state.QtdDormitorios}
            />
          </Main>
          <Sider>
            <Search>PESQUISE</Search>
            <Divider />
            <Card>
              <Form 
                funcFinalidade={this.handleFinalidade}
                funcTipoImovel={this.handleTipoImovel}
                funcQtdDormitorios={this.handleQtdDormitorios}
                funcFaixaPrecoAluguel={this.handleFaixaPrecoAluguel}
                funcFaixaPrecoVenda={this.handleFaixaPrecoVenda}
                finalidade={this.state.Finalidade}
              />
            </Card>
          </Sider>
        </Body>
    );
  }
}
