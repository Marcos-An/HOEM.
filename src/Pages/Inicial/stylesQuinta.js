import styled from 'styled-components';

export const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 50px;
  font-size: 35px;
  font-weight: 550;
  font-family: 'Poppins', sans-serif;
`;

export const QuintaFaixa = styled.div`
  padding: 100px 0px 100px 0px;
  background: #f0f2f5;
  display: block;
  justify-content: center;
  text-align: center;
`;

export const Agentes = styled.div`
  display: Grid;
  grid-template-columns: repeat(4, 280px);
  justify-content: center;
  text-align: center;
  grid-gap: 50px;

  @media (max-width: 600px) {
    grid-template-columns: 300px !important;
    grid-gap: 30px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 300px 300px;
    grid-gap: 30px;
  }
`;

export const Agente = styled.div`
  display: flex;
  flex-direction: column;

  div {
    background-color: #fff;
  }
`;
export const Name = styled.h2`
  margin: 20px 20px 13px 20px;
  color: #2c3e50;
  font-size: 1.5em;
  font-family: 'Montserrat', sans-serif;
`;
export const Telefone = styled.h2`
  color: #0ba;
  margin-bottom: 20px;
  font-size: 1.2em;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;
export const Mais = styled.h4`
  color: #a6a6a6;
  margin-bottom: 20px;
  font-size: 0.8em;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;
export const Img = styled.div`
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
