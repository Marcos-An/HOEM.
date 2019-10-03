import React, { Component } from 'react';
import { 
  Body, 
  TitleInfo,
  Infos,
  Info, 
  TextInfo,
  Title,
  Text
} from './stylesSegunda'
import { Icon, Card } from 'antd'
import Form from './Form'

export default class Contato extends Component{
  render(){
    return(
      <Body> 
          <Infos>
              <Title> Seu contato é muito importante </Title>
              <Text> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla condimentum, tortor id luctus finibus, lectus justo sodales ex, 
                id mattis purus dui id dolor. Phasellus bibendum cursus felis et volutpat.
              </Text>
            <Info>
              <div style={{ display: 'flex', marginTop: 60  }}>
                <Icon style={{fontSize: 17, color:'#fdd001'}} type="environment" theme="filled"/>
                <TitleInfo> Nossa Localização </TitleInfo>
              </div>
              <TextInfo> Rua Presidente Vargas 939 - Dourados/MS </TextInfo>
            </Info>
            <Info>
              <div style={{ display: 'flex', marginTop: 20 }}>
                <Icon style={{fontSize: 17, color:'#fdd001'}} type="phone" theme="filled"/>
                <TitleInfo> Nossos Telefones </TitleInfo>
              </div>
              <TextInfo>(67) 3416-5444 / (67) 99804-7228 </TextInfo>
            </Info>
            <Info className={"item2"}>
              <div style={{ display: 'flex', marginTop: 20 }}>
                <Icon style={{fontSize: 17, color:'#fdd001'}} type="clock-circle" theme="filled"/>
                <TitleInfo> Horários de atendimento </TitleInfo>
              </div>
              <TextInfo> 07:30 às 11:00, 13:00 às 17:20 </TextInfo>
            </Info> 
        </Infos>
        <Card>
          <Form/>
        </Card>
      </Body>
    );
  }
}