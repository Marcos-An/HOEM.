import React, { Component } from 'react';
import { Body, Sider, Main, Name, Search, Qtd } from './styles';
import { sortBy } from "lodash"
import Cards from '../../Components/Cards/CardsMini';
import Form from '../../Components/Form/FormMini';

import { Divider, Card } from 'antd';
import axios from 'axios';

const API_URL = 'http://imovelsisapi.azurewebsites.net:80/api';

const orderItemBy = imoveis => sortBy(imoveis, 'Imagens')

export default class Imoveis extends Component{
  constructor(props){
    super(props);
    this.state = {
      Finalidade : undefined,
      TipoImovel : undefined,
      FaixaPrecoAluguel : undefined,
      FaixaPrecoVenda : undefined,
      QtdDormitorios : undefined,
      loading: true,
      imoveis: [],
    }
    this.handleFinalidade = this.handleFinalidade.bind(this)
    this.handleTipoImovel = this.handleTipoImovel.bind(this)
    this.handleFaixaPrecoAluguel = this.handleFaixaPrecoAluguel.bind(this)
    this.handleFaixaPrecoVenda = this.handleFaixaPrecoVenda.bind(this)
    this.handleQtdDormitorios = this.handleQtdDormitorios.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  handleSearch = async() => {
    this.setState({  loading: true })
    const url = new URL(`${API_URL}/Imoveis/657?`)  
    if (this.state.Finalidade !== undefined) url.searchParams.set("Finalidade", this.state.Finalidade)
    if (this.state.TipoImovel !== undefined) url.searchParams.set("Tipo", this.state.TipoImovel)
    if (this.state.FaixaPrecoVenda !== undefined) url.searchParams.set("FaixaPreco", this.state.FaixaPrecoVenda)
    if (this.state.QtdDormitorios !== undefined) url.searchParams.set("QtdDormitorios", this.state.QtdDormitorios)
    
    try {
      const {data} = await axios.get(url.href)
        this.setState({ imoveis : orderItemBy(data) });
    } catch (erro) {
      console.log(erro);
    } finally { 
        this.setState({  loading: false })
    }
  };

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
            <Qtd> 
              {`Resultados encontrados ${this.state.imoveis.length}`}
            </Qtd>
            <Divider />
            <Cards 
              finalidade={this.state.Finalidade}
              tipoImovel={this.state.TipoImovel}
              faixaPrecoAluguel={this.state.FaixaPrecoAluguel}
              faixaPrecoVenda={this.state.FaixaPrecoVenda}
              qtdDormitorios={this.state.QtdDormitorios}
              loading={this.state.loading}
              imoveis={this.state.imoveis}
              handleSearch={this.handleSearch}
            />
          </Main>
          <Sider>
            <Search>PESQUISE</Search>
            <Qtd>
              Use o filtro para buscar a sua casa
            </Qtd>
            <Divider />
            <Card>
              <Form 
                funcFinalidade={this.handleFinalidade}
                funcTipoImovel={this.handleTipoImovel}
                funcQtdDormitorios={this.handleQtdDormitorios}
                funcFaixaPrecoAluguel={this.handleFaixaPrecoAluguel}
                funcFaixaPrecoVenda={this.handleFaixaPrecoVenda}
                finalidade={this.state.Finalidade}
                handleSearch={this.handleSearch}
              />
            </Card>
          </Sider>
        </Body>
    );
  }
}
