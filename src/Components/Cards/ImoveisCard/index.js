import React, { Component } from 'react';
import { Body, Cards, Img, Text, Title, Container, SubTitle } from './styles';
import { Spin } from 'antd';
import axios from 'axios';

const API_URL = 'http://imovelsisapi.azurewebsites.net:80/api';

export default class Imoveis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imoveis: [],
      loading: true
    };
  }
  componentDidMount = async () => {
    const url = `${API_URL}/Imoveis/657`;
    try {
      await axios
        .get(url)
        .then(response => response.data)
        .then(data => {
          this.setState({ loading: false, imoveis: data });

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
          <Container>
            <Title> IMÓVEIS </Title>
            <SubTitle> Veja alguns de nossos imóveis a venda</SubTitle>
            <Body>
              {this.state.imoveis.length > 0 &&
                this.state.imoveis.map((item, id) => (
                  <>
                  <a href={`/imovel/${item.ImovelId}`}>
                    <Cards key={id}>
                    {"Imagens" in item &&  <Img imagem={`${item.Imagens[0].Link}`}/>}
                    {"Imagens" in item &&  <> {console.log(`${item.Imagens[0].Link}`)} </>}
                      <Text>
                          <h3>{`${item.Tipo.toLowerCase()}`}</h3>
                          <h4>{`${item.Cidade.toLowerCase()}`}</h4>
                          <strong>{`${item.Valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`}</strong>
                      </Text>
                    </Cards>
                  </a>
                  </>
                ))}
            </Body>
          </Container>
        )}
      </>
    );
  }
}
