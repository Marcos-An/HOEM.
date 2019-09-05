import styled from 'styled-components';

export const PrimeiraFaixa = styled.div`
  padding: 50px 0px 50px 0px;
  background-image: url(./Assets/back.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  width: 50%;
  h1 {
    padding-left: 10%;
    color: #fff;
    font-size: 64px;
    word-wrap: break-word;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
  }
  h6 {
    padding-left: 11%;
    color: #f9f9f9;
    font-size: 20px;
    word-wrap: break-word;
    font-weight: 200;
    font-family: 'Poppins', sans-serif;
  }

  @media (max-width: 700px) {
    text-align: center;
    width: 100vw;
    h1 {
      margin: 0px 3px 20px 3px;
      color: #fff;
      padding-left: 0% !important;
      font-size: 25px !important;
      word-wrap: break-word;
      font-weight: 900;
      font-family: 'Poppins', sans-serif;
    }
    h6 {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      color: #fff;
      font-size: 36px;
      word-wrap: break-word;
      font-weight: 800;
      font-family: 'Poppins', sans-serif;
    }
    h6 {
      color: #f9f9f9;
      font-size: 22px;
      word-wrap: break-word;
      font-weight: 200;
      font-family: 'Poppins', sans-serif;
    }
  }
`;

export const FormSpace = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  div {
    height: 550px;
    width: 60%;
    background: rgb(255, 255, 255, 0.3);
  }

  @media (max-width: 600px) {
    width: 100%;

    div {
      padding-bottom: 20px !important;
      height: 300px !important;
      width: 100%;
      background: rgb(255, 255, 255, 0.3);
    }
  }
  @media (max-width: 1000px) {
    div {
      height: 550px;
      width: 80%;
      background: rgb(255, 255, 255, 0.3);
    }
  }
`;
