import React, { Component } from 'react';
import { 
  Body, 
  Img, 
  Text, 
  Title, 
  Container,  
  SubTitle,
  IconsInfo, 
  Icons,
  Faixa,
  Info,
  Tags
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faArrowsAlt } from '@fortawesome/free-solid-svg-icons'

import { Spin,Card, Pagination, Tag, Icon } from 'antd';

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
  componentDidMount = async () => {
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
      <Faixa>
         <SubTitle> NOSSOS IMÓVEIS </SubTitle>
         <Title> Imóveis em Destaque  </Title>
      </Faixa>
        <Container>
          {this.props.loading ? (
            <div
              style={{
                textAlign: 'center',
                alignSelf: 'center',
                marginBottom: '10%'
              }}
            >
              <Spin tip="Carregando..." />
            </div>
          ) : (
            <Body>
              {this.props.imoveis.length > 0 &&
                this.props.imoveis.slice(this.state.minValue, this.state.maxValue).map((item, id) => (
                  <a href={`/imovel/${item.ImovelId}`}>
                    <Card
                      style={{
                        border: 'none',
                        boxShadow: '0px 5px 18px -7px rgba(0,0,0,0.22)'
                      }}
                      hoverable
                      key={id}
                      className="card"
                      cover={
                        'Imagens' in item === false ? (
                          <Img
                            imagem={`https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`}
                          />
                        ) : (
                          <div style={{height: 200}} className="zoom">
                            <Img className='chield' imagem={`${item.Imagens[0].Link}`} />
                          </div>
                        )
                      }
                    >
                      <Text>
                        {item.Valor > 0 && item.ValorVenda > 0 ? (
                          <Info>
                            <div style={{ display: 'flex', alignItems: 'center'}}>
                              <h5>
                                por
                              </h5>
                              <h2>
                                {`${item.ValorVenda.toLocaleString(
                                  'pt-BR',
                                  {
                                    style: 'currency',
                                    currency: 'BRL'
                                  }
                                )}`}
                              </h2>
                            </div>
                            <Tags>
                              <Tag color="#57e679">Venda</Tag> 
                              <Tag color="#ff4d4f">Aluguel</Tag>
                            </Tags>
                          </Info>
                        ) : item.Valor > 0 && item.ValorVenda === 0 ? (
                          <Info>
                            <div style={{ display: 'flex', alignItems: 'center'}}>
                              <h2>
                                {`${item.Valor.toLocaleString('pt-BR', {
                                  style: 'currency',
                                  currency: 'BRL'
                                })}`}
                              </h2>
                              <h5>
                                por mês
                              </h5>
                            </div>
                            <Tags>
                              <Tag color="#ff4d4f">Aluguel</Tag>
                            </Tags>
                          </Info>
                        ) : item.Valor === 0 && item.ValorVenda > 0 ? (
                          <Info> 
                            <div style={{ display: 'flex', alignItems: 'center'}}>
                              <h5>
                                por
                              </h5>
                              <h2>
                                {`${item.ValorVenda.toLocaleString('pt-BR', {
                                  style: 'currency',
                                  currency: 'BRL'
                                })}`}
                              </h2>
                            </div>
                            <Tags>
                              <Tag color="#57e679">Venda</Tag>
                            </Tags>
                          </Info>
                        ) : item.Valor === 0 && item.ValorVenda === 0 ? (
                          <Info>
                            <h2>Entre em contato</h2>
                          </Info>
                        ) : null}
                        <h3>{`${item.Tipo.toLowerCase()}-${item.Bairro.toLowerCase()}`}</h3>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: -7}}>
                          <Icon 
                            style={{
                              fontSize: 12, 
                              color:'#9C9C9C', 
                              margin: '-10px 5px 0px 0px'
                              }}
                            type="environment" 
                            theme="filled"/>
                          <h4>
                            {`
                              ${item.Bairro.toLowerCase()}, 
                              ${item.Cidade.toLowerCase()} - 
                              ${item.Estado.toLowerCase()}
                            `}
                            </h4>  
                        </div>
                        <Icons>
                        <IconsInfo>
                          <FontAwesomeIcon icon={faBed} style={{fontSize: 16, color: '#9C9C9C'}}/>
                          <h6>{`${item.QtdQuartos}`}</h6>
                        </IconsInfo>  
                        <IconsInfo>
                          <FontAwesomeIcon icon={faArrowsAlt} style={{fontSize: 16, color: '#9C9C9C'}}/>
                          <h6>{`${item.AreaTotal}`}</h6>
                        </IconsInfo>        
                      </Icons>
                      </Text>
                    </Card>
                  </a>
                ))}
            </Body>
          )}
          { !this.props.loading ? (
            <Pagination
              style={{margin: '50px 0px 80px 43px' }}
              defaultCurrent={1}
              defaultPageSize={numEachPage}
              onChange={this.handleChange}
              total={this.props.imoveis.length}
            />
          ) : null
        }
        </Container>
      </>
    );
  }
}
