import React, { Component } from 'react';
import { Body, Sider, Main, Name, Endereco} from './styles';
import {Search, Qtd } from '../Imoveis/styles';
import PrecoSocial from './PrecoSocial';
import Galery from './Galery';
import Informacoes from './Informacoes';
import { Spin, Divider, Card } from 'antd';
import StreetView from './StreetView';
import RedesSociais from '../../Components/Social';
import MediaQuery from 'react-responsive';
import { sortBy } from "lodash"
import axios from 'axios';
import Cards from '../../Components/Cards/CardsRelacionados'


const API_URL = 'http://imovelsisapi.azurewebsites.net:80/api';

const orderItemBy = imoveis => sortBy(imoveis, 'Imagens')

export default class Imoveis extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      imovel: [],
      relacionados: []
    }
  }

  handleSearch = async() =>{
    const urlFil = new URL(`${API_URL}/Imoveis/657?`)  
    if (this.state.imovel.Finalidade !== undefined) 
      urlFil.searchParams.set("Finalidade", this.state.imovel.Finalidade)
    if (this.state.imovel.Tipo !== undefined) urlFil.searchParams.set("Tipo", this.state.imovel.Tipo)
    
    try {
      const {data} = await axios.get(urlFil.href)
        this.setState({ relacionados : orderItemBy(data) });
    } catch (erro) {
      console.log(erro);
    } finally { 
        this.setState({  loading: false })
    }

  }
  componentDidMount = async () => {
    const url = `${API_URL}/Imoveis/657?ImovelId=${this.props.match.params.id}`;
    try {
      const { data } = await axios.get(url)
        this.setState({ imovel: data });
    } catch (erro) {
      console.log(erro);
    } finally {
       this.setState({ loading: false });
       this.handleSearch();
    }
  };
  render() {
    return (
      <>
        {this.state.loading ? (
          <div
            style={{ textAlign: 'center', marginTop: '5%', marginBottom: '5%' }}
          >
            <Spin tip="Carregando..." />
          </div>
        ) : (
          <Body>
            <Main>
              {this.state.imovel.map(item => (
                <div key={1}>
                  <MediaQuery maxDeviceWidth={700}>
                    <div style={{ marginBottom: 10 }}>
                      <RedesSociais />
                    </div>
                  </MediaQuery>
                  <Name>
                    {`${item.Tipo.toLowerCase()} - ${item.Bairro.toLowerCase()}`}
                  </Name>
                  <Endereco>{`${item.Cidade.toLowerCase()} - ${item.Estado.toLowerCase()}`}</Endereco>
                  <Divider />
                  <PrecoSocial
                    itemVenda={item.ValorVenda}
                    itemAluguel={item.Valor}
                  />
                  <div style={{ marginTop: '50px' }}>
                    {'Imagens' in item && <Galery imagens={item.Imagens}/>}
                    {'Imagens' in item === false && <div> Imagens </div>}
                  </div>
                  <Informacoes Id={item.ImovelId} Tipo={item.Tipo} />
                  <StreetView Lat={item.Latitude} Lon={item.Longitude}/>
                </div>
              ))}
            </Main>
            <Sider>
              <Search>Relacionados</Search>
              <Qtd>
                Veja os relacionados a este imóvel
              </Qtd>
              <Divider />
              <Card size="small" style={{background:'#D7D8D8', borderRadius: 5}}>
                <Cards
                  handleSearch={this.handleSearch}
                  loading={this.state.loading}
                  imoveis={this.state.relacionados}
                />
              </Card>
          </Sider>
          </Body>
        )}
      </>
    );
  }
}