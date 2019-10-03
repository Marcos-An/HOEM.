import React, { Component } from 'react';
import { 
  Body, 
  Img, 
  Text,
  Container, 
} from './styles';
import { Spin, Card, Divider } from 'antd';

export default class Imoveis extends Component {

  componentDidMount = async() => {
   this.props.handleSearch();
  };

  render() {
    return (
      <>
      {this.props.loading ? (
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
          <Container>
            <Body>
              {this.props.imoveis.length > 0 &&
                this.props.imoveis.map((item) => (
                  <a href={`/imovel/${item.ImovelId}`}>
                    <Card
                      size="small"
                      hoverable
                      key={item.ImovelId}
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
                        <Divider
                          style={{marginTop: -1}}
                          dashed={true}  
                        />
                        {item.Valor > 0 && item.ValorVenda > 0 ? (
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                              <strong>
                                {`${item.ValorVenda.toLocaleString(
                                  'pt-BR',
                                  {
                                    style: 'currency',
                                    currency: 'BRL'
                                  }
                                )}`}
                              </strong>
                            </div>
                            <div>
                              <strong>
                                {`${item.Valor.toLocaleString('pt-BR', {
                                  style: 'currency',
                                  currency: 'BRL'
                                })}`}
                              </strong>
                            </div>
                          </div>
                        ) : item.Valor > 0 && item.ValorVenda === 0 ? (
                          <div>
                            <strong>
                            {`${item.Valor.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                            })}`}
                            </strong>
                          </div>
                        ) : item.Valor === 0 && item.ValorVenda > 0 ? (
                            <>
                              <strong>{`${item.ValorVenda.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                              })}`}</strong>
                            </>
                        ) : item.Valor === 0 && item.ValorVenda === 0 ? (
                          <div>
                            <strong>Entre em contato</strong>
                          </div>
                        ) : null}
                      </Text>
                    </Card>
                  </a>
                ))}
            </Body>
          </Container>
          )}
      </>
    );
  }
}
