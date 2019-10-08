import styled from 'styled-components';

export const QuartaFaixa = styled.div`
  height: 250px;
  background: #130f40;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  align-items: center;
  padding: 0px 50px 0px 50px;

  @media (max-width: 700px) {
    height: 200px;
    grid-template-columns: 1fr !important;
    grid-gap: 50px;
  }
`;

export const Text = styled.h1`
  color: #fff;
  width: 95%;
  font-size: 33px;
  word-wrap: break-word;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 700px) {
    font-size: 25px !important;
  }
  @media (max-width: 900px) {
    font-size: 28px;
  }
`;
