import React from 'react';
import { 
  Footer, 
  First, 
  Second, 
  Third,
  Text,
  Divisor
} from './stylesFooter';
import RedesSociais from '../Components/Social/Footer'

export default function Rodape(){
  return (
   <Footer>
     <First>
        <div
          style={{
            background: 'rgb(255, 255, 255, 0.5',
            height: 46,
            width: 100
          }}
        >
          a
        </div>
        <Divisor/>
        <Text> There are many variations of passages of Lorem Ipsum available but the that. </Text>
        <RedesSociais/>
     </First>
     <Second> 
       <div
            style={{
              background: 'rgb(255, 255, 255, 0.5',
              height: 46,
              width: 100
            }}
          >
            a
          </div>
        <Divisor/>
        <Text> There are many variations of passages of Lorem Ipsum available but the that. </Text>
     </Second>
     <Third>
       dasfsadfas
     </Third>
   </Footer>
  );
}