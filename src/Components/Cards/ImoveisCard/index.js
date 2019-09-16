import React, { Component } from 'react';
import { Body, Img, Text, Title, Container, SubTitle } from './styles';

import { Spin, Card } from 'antd';
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
    const url = `${API_URL}/Imoveis/123?`;
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
        <Container>
          <Title> IMÓVEIS </Title>
          <SubTitle> Veja alguns de nossos imóveis a venda</SubTitle>
          {this.state.loading ? (
            <div
              style={{
                textAlign: 'center',
                marginTop: '5%',
                marginBottom: '5%'
              }}
            >
              <Spin tip="Carregando..." />
            </div>
          ) : (
            <Body>
              {this.state.imoveis.length > 0 &&
                this.state.imoveis.map((item, id) => (
                  <a href={`/imovel/${item.ImovelId}`}>
                    <Card
                      size="small"
                      hoverable
                      key={id}
                      cover={
                        'Imagens' in item === false ? (
                          <Img
                            imagem={`https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}
                          />
                        ) : (
                          <Img imagem={`${item.Imagens[0].Link}`} />
                        )
                      }
                    >
                      <Text>
                        <h3>{`${item.Tipo.toLowerCase()} - ${item.Bairro.toLowerCase()}`}</h3>
                        <h4>{`${item.Cidade.toLowerCase()}`}</h4>
                        {item.Valor > 0 && item.ValorVenda > 0 ? (
                          <div style={{ display: 'flex' }}>
                            <div>
                              <h5>Venda</h5>
                              <strong>{`${item.ValorVenda.toLocaleString(
                                'pt-BR',
                                {
                                  style: 'currency',
                                  currency: 'BRL'
                                }
                              )}`}</strong>
                            </div>
                            <div>
                              <h5>Alugel</h5>
                              <strong>{`${item.Valor.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                              })}`}</strong>
                            </div>
                          </div>
                        ) : item.Valor > 0 && item.ValorVenda === 0 ? (
                          <div>
                            <h5>Alugel</h5>
                            <strong>{`${item.Valor.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                            })}`}</strong>
                          </div>
                        ) : item.Valor === 0 && item.ValorVenda > 0 ? (
                          <strong>{`${item.ValorVenda.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          })}`}</strong>
                        ) : item.Valor === 0 && item.ValorVenda === 0 ? (
                          <div>
                            <h5>Valor não definido</h5>
                            <strong>Entre em contato</strong>
                          </div>
                        ) : null}
                      </Text>
                    </Card>
                  </a>
                ))}
            </Body>
          )}
        </Container>
      </>
    );
  }
}
