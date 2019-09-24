import styled from 'styled-components';

export const PrimeiraFaixa = styled.div`
  padding: 80px 0px 80px 0px;
  background-image: url(./Assets/back.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.div`
  padding-left: 40px;
  width: 80%;
  h1 {
    color: #fff;
    font-size: 64px;
    word-wrap: break-word;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
  }
  h6 {
    color: #f9f9f9;
    font-size: 20px;
    word-wrap: break-word;
    font-weight: 200;
    font-family: 'Poppins', sans-serif;
  }

  @media (max-width: 700px) {
    text-align: left;
    h1 {
      display: none
      padding-left: 0px !important;
      color: #fff;
      font-size: 20px !important;
      word-wrap: break-word;
      font-weight: 900;
      font-family: 'Poppins', sans-serif;
    }
    h6 {
      display: none;
    }
  }
  @media (min-width: 1000px) {
    h1 {
      padding-left: 40px;
      color: #fff;
      font-size: 60px;
      word-wrap: break-word;
      font-weight: 800;
      font-family: 'Poppins', sans-serif;
    }
    h6 {
      padding-left: 40px !important;
      color: #f9f9f9;
      font-size: 22px !important;
      word-wrap: break-word;
      font-weight: 200;
      font-family: 'Poppins', sans-serif;
    }
  }

  @media (min-width: 1900px) {
    margin-left: 150px !important;
    width: 62%;
    h1 {
      color: #fff;
      font-size: 70px !important;
      word-wrap: break-word;
      font-weight: 800;
      font-family: 'Poppins', sans-serif;
    }

    h6 {
      color: #f9f9f9;
      font-size: 22px !important;
      word-wrap: break-word;
      font-weight: 200;
      font-family: 'Poppins', sans-serif;
    }
  }
`;

export const FormSpace = styled.div`
  display: block;
  align-items: left;
  background: rgb(0, 0, 0, 0.4);

  @media (min-width: 1900px) {
    margin-right: 200px;
  }
  
  @media (min-width: 1000px) {
    margin-right: 90px ;
  }
  
`;
