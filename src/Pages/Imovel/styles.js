import styled from 'styled-components';

export const Body = styled.div`
  padding: 70px 40px;  
  display: grid;
  justify-content: center;
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: none !important;
    padding: 20px 20px;  
    grid-gap: 10px;
  }
`;

export const Name = styled.h1`
  text-transform: capitalize;
  color: #2c3e50;
  font-weight: 600;
  font-size: 2.6em;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

export const Endereco = styled.h3`
  text-transform: capitalize;
  color: #2c3e50;
  font-size: 1.3em;
  margin-top: -15px;
  font-weight: 400; 
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

export const Preco = styled.h1`
  font-size: 35px;
  font-weight: 500;
  color: #fdd001;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 600px) {
    font-size: 27px;
    margin: 0px 0px;
  }
`;
export const PrecosAlign = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const VendaAluguel = styled.h3`
  color: #2c3e50;
  font-size: 1.4em;
  font-weight: 400; 
  font-family: 'Poppins', sans-serif;
  margin: 0px 20px 0px 0px;

  @media (max-width: 600px) {
    font-size: 1.1em;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -7px;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const Main = styled.div`
  padding: 0px 40px 0px 0px;

  @media (max-width: 600px) {
    padding: 50px 30px 100px 20px !important;
  }
  @media (max-width: 1000px) {
    padding: 70px 30px 100px 20px;
  }
`;

export const Sider = styled.div`
  padding: 0px 0px 100px 0px;

  @media (max-width: 600px) {
    padding: 50px 0px 100px 20px !important;
  }
  @media (max-width: 1000px) {
    padding: 70px 0px 100px 20px;
  }
`;
