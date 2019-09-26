import React, { Component } from 'react';
import { 
  Body, 
  Img, 
  Text,
  Container, 
} from './styles';
import { Spin, Card, Pagination, Divider } from 'antd';
const numEachPage = 6;

export default class Imoveis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 6,
    };
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount = async() => {
   this.props.handleSearch();
  };

  handleChange = value => {
    this.setState({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage
    });
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
                this.props.imoveis.slice(this.state.minValue, this.state.maxValue).map((item, id) => (
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
                            <>
                              <h5>Venda</h5>
                              <strong>{`${item.ValorVenda.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                              })}`}</strong>
                            </>
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
              <Pagination
                style={{marginTop: 30, marginLeft: -10}}
                defaultCurrent={1}
                defaultPageSize={numEachPage}
                onChange={this.handleChange}
                total={this.props.imoveis.length}
              />
          </Container>
          )}
      </>
    );
  }
}
