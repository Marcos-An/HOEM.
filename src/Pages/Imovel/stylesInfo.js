import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
`;

export const Infos = styled.div`
  display: flex;
  margin: 40px 40px 20px 0px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Indice = styled.h4`
  color: #2c3e50;
  font-weight: 400;
  font-size: 1.2em;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.1em;
  }
`;

export const Info = styled.h4`
  font-size: 1.2em;
  margin-left: 10px;
  font-weight: 600;
  color: #fdd001;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 600px) {
  }
`;
