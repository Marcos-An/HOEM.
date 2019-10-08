import styled from 'styled-components';

export const PrimeiraFaixa = styled.div`
  height: 400px;
  background-image: url(./Assets/back.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  justify-content: center;
  background-attachment: fixed;

  @media (max-width: 700px) {
    height: 300px;
  }
`;

export const SegundaFaixa = styled.div`
  height: 250px;
  background: #130f40;
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  @media (max-width: 700px) {
    text-align: left;
    height: 100%;
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.div`
  padding: 60px 0px 0px 40px;
  width: 70%;
  display: flex;
  h1 {
    color: #fff;
    font-size: 40px;
    word-wrap: break-word;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
  }

  @media (max-width: 700px) {
    width: 76%;
    text-align:left;
    justify-content: center;
    padding: 30px 0px 30px 40px;
    h1 {
      padding-left: 0px !important;
      font-size: 25px !important;
    }
    button{
      display: none;
    }
  }
  @media (min-width: 800px) and (max-width: 900px) {
    h1 {
      padding-left: 40px;
      font-size: 30px;
      word-wrap: break-word;
    }
  }

  @media (min-width: 1900px) {
    margin-left: 150px !important;
    width: 62%;
    h1 {
      color: #fff;
      font-size: 50px !important;
      word-wrap: break-word;
      font-weight: 800;
      font-family: 'Nunito', sans-serif;;
    }
  }
`;
