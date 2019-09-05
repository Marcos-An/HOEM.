import React, { Component } from 'react';
import { Body, Sider, Main, Name, Endereco, Search} from './styles';
import PrecoSocial from './PrecoSocial'
import Galery from './Galery';
import { Spin, Divider } from 'antd';
import axios from 'axios';

const API_URL = 'http://imovelsisapi.azurewebsites.net:80/api';

export default class Imoveis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imovel: [],
      loading: true
    };
  }
  componentDidMount = async () => {
    const url = `${API_URL}/Imoveis/657?ImovelId=${this.props.match.params.id}`;
    try {
      await axios
        .get(url)
        .then(response => response.data)
        .then(data => {
          this.setState({ loading: false, imovel: data });
          console.log(this.state.imovel);
        });
    } catch (erro) {
      console.log(erro);
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
                  <Name>{`${item.Tipo.toLowerCase()}`}</Name>
                  <Endereco>{`${item.Cidade.toLowerCase()} - ${item.Estado.toLowerCase()}`}</Endereco>
                  <Divider />
                  <PrecoSocial itemVenda={item.ValorVenda} itemAluguel={item.Valor}/>
                  <div style={{marginTop: '50px'}}>
                    {"Imagens" in item  && <Galery imagens={item.Imagens}/>}
                  </div>
                  
                </div>
              ))}
            </Main>
            <Sider>
              <Search>
                  PESQUISE
              </Search>
            </Sider>
          </Body>
        )}
      </>
    );
  }
}
