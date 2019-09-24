import styled from 'styled-components';


export const Body = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;

  @media (max-width: 600px) {
    grid-template-columns: none !important;
    grid-gap: 10px;
  }
`;

export const Faixa = styled.div`
  height: 50px;
  margin: 0px 0px 30px 0px;
  background: #E5C828;
`;


export const Name = styled.h1`
  text-transform: capitalize;
  color: #2c3e50;
  font-weight: 600;
  font-size: 2.5em;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

export const Main = styled.div`
  padding: 70px 10px 100px 50px;

  @media (max-width: 600px) {
    padding: 50px 20px 100px 20px !important;
  }
  @media (max-width: 1000px) {
    padding: 70px 30px 100px 70px;
  }
`;

export const Sider = styled.div`
  padding: 70px 50px 100px 0px;

  @media (max-width: 600px) {
    padding: 50px 0px 100px 20px !important;
  }
  @media (max-width: 1000px) {
    padding: 70px 0px 100px 20px;
  }
`;

export const Search = styled.h3`
  color: #2c3e50;
  font-weight: 600;
  font-size: 2.3em;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;
