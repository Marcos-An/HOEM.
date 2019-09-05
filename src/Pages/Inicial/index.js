import React from 'react';
import Card from '../../Components/Cards/ImoveisCard';
import PrimeiraFaixa from './PrimeiraFaixa';
import TerceiraFaixa from './TerceiraFaixa';
import QuartaFaixa from './QuartaFaixa';
import QuintaFaixa from './QuintaFaixa';

export default function Inicial() {
  return (
    <>
      <PrimeiraFaixa />
      <Card />
      <TerceiraFaixa />
      <QuartaFaixa />
      <QuintaFaixa />
    </>
  );
}
