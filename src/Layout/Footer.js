import React from 'react';
import { 
  Footer, 
  First, 
  Second, 
  Third,
  Text,
  Divisor,
  Title,
  Contato
} from './stylesFooter';
import RedesSociais from '../Components/Social/Footer'
import { Divider } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'

export default function Rodape(){
  return (
   <Footer>
     <First>
        <img style={{width: 200}} src={`http://www.imobiliariaterradourados.com.br/images/logo_rodape.png`} alt=""/>
        <Divisor/>
        <Text style={{marginBottom: 30}}> 
          Nosso objetivo é atender com a máxima excelência e eficiência a todos os nossos clientes,
          buscando sempre a melhor solução no mercado imobiliário.
        </Text>
        <Contato style={{marginTop: 15}}> 
          <FontAwesomeIcon icon={ faMapMarkerAlt } className="icon"/>
          <Text> Rua Presidente Vargas 939 - Dourados/MS </Text>
        </Contato>
        <Divider style={{margin: '20px 0px'}}/>
        <Contato>
          <FontAwesomeIcon icon={ faMobileAlt } className="icon"/>
          <Text> (67) 3416-5444 / (67) 99804-7228 </Text>
        </Contato>
        <Divider style={{margin: '20px 0px'}}/>
        <Contato>
          <RedesSociais/>
        </Contato>
     </First>
     <Second> 
        <Title> Contato </Title>
        <Divisor/>

     </Second>
     <Third>
       dasfsadfas
     </Third>
   </Footer>
  );
}