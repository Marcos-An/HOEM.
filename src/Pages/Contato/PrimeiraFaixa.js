import React from 'react';
import { 
  Body, 
  Text, 
  TitleInfo,
  Infos,
  Info, 
  TextInfo
} from './stylesPrimeira'
import { Icon } from 'antd'


export default function PrimeiraFaixa(){
  return (
   <Body>
     <Text>
        Entre em contato conosco
     </Text>
      <Infos>
        <Info>
          <div style={{ display: 'flex' }}>
            <Icon style={{fontSize: 20, color:'#fdd001'}} type="environment" theme="filled"/>
            <TitleInfo> Nossa Localização </TitleInfo>
          </div>
          <TextInfo> Rua Presidente Vargas 939 - Dourados/MS </TextInfo>
        </Info>
        <Info>
          <div style={{ display: 'flex' }}>
            <Icon style={{fontSize: 20, color:'#fdd001'}} type="phone" theme="filled"/>
            <TitleInfo> Nossos Telefones </TitleInfo>
          </div>
          <TextInfo>(67) 3416-5444 / (67) 99804-7228 </TextInfo>
        </Info>
        <Info className={"item2"}>
          <div style={{ display: 'flex' }}>
            <Icon style={{fontSize: 20, color:'#fdd001'}} type="clock-circle" theme="filled"/>
            <TitleInfo> Horários de atendimento </TitleInfo>
          </div>
          <TextInfo> 07:30 às 11:00, 13:00 às 17:20 </TextInfo>
        </Info> 
      </Infos>
   </Body>
  );
} 