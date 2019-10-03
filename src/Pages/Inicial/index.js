import React, { Component } from 'react';
import Card from '../../Components/Cards/ImoveisCard';
import { PrimeiraFaixa } from './stylesPrimeira';
import SegundaFaixa from './SegundaFaixa';
import QuartaFaixa from '././QuartaFaixa'
import QuintaFaixa from './QuintaFaixa';
import SextaFaixa from './SextaFaixa'
import TerceiraFaixa from './TerceiraFaixa'
import { sortBy } from "lodash";
import axios from 'axios';
const API_URL = 'http://imovelsisapi.azurewebsites.net:80/api';
const orderItemBy = imoveis => sortBy(imoveis, 'Imagens')

export default class Inicial extends Component{

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
      <>
       <PrimeiraFaixa/> 
        <SegundaFaixa/>
        <TerceiraFaixa
          handleFinalidade={this.handleFinalidade}
          handleTipoImovel={this.TipoImovel}
          handleFaixaPrecoAluguel={this.FaixaPrecoAluguel}
          handleFaixaPrecoVenda={this.FaixaPrecoVenda}
          handleQtdDormitorios={this.handleQtdDormitorios}
          handleSearch={this.handleSearch}
          Finalidade={this.state.Finalidade}
        />
        <a id="Imoveis"/>
        <Card
          handleSearch={this.handleSearch}
          imoveis={this.state.imoveis}
          loading={this.state.loading}
        />
        <QuartaFaixa />
        <QuintaFaixa/>
        <SextaFaixa />
      </>
    );
  }
}
