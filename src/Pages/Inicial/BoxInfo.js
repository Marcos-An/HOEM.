import React from 'react';
import {
  Box, 
  BoxInfo,
  Title,
  SubTitle,
  Divisor,
  DivBox
} from './stylesQuinta';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCouch, faCoins, faFunnelDollar } from '@fortawesome/free-solid-svg-icons'

export default function Quarta() {
  return (
    <DivBox>
      <Box>
        <BoxInfo className="zoom">
          <FontAwesomeIcon icon={ faCouch } style={{fontSize: 35, color: '#ff4d4f'}}/>
          <Title> Seu conforto vem primeiro</Title>
          <Divisor/>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </SubTitle>
        </BoxInfo>
        <BoxInfo  className="zoom">
         <FontAwesomeIcon icon={ faCoins } style={{fontSize: 35, color: '#ff4d4f'}}/>
         <Title> Salve seu dinheiro </Title>
          <Divisor/>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </SubTitle>
        </BoxInfo>
        <BoxInfo  className="zoom">
          <FontAwesomeIcon icon={ faFunnelDollar } style={{fontSize: 33 , color: '#ff4d4f'}}/>
          <Title> Use nosso filtro </Title>
          <Divisor/>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </SubTitle>
        </BoxInfo>
        <BoxInfo  className="zoom">
          <FontAwesomeIcon icon={ faCouch } style={{fontSize: 35, color: '#ff4d4f'}}/>
          <Title> Seu conforto vem primeiro</Title>
          <Divisor/>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </SubTitle>
        </BoxInfo>
      </Box>
    </DivBox>
  )
}
