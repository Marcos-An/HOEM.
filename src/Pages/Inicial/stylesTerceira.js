import styled from 'styled-components';

export const TerceiraFaixa = styled.div`
  height: 300px;
  margin-bottom: 80px;
  background: #fff;
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  @media (max-width: 700px) {
    text-align: left;
    height: 100%;
    grid-template-columns: 1fr;
  }
`;

export const Divisor = styled.div`
  background: #F40C0C;
  border-radius: 10px;
  margin-bottom: 15px;
  height: 6px;
  width: 60px;
`;

export const Text = styled.div`
  padding: 60px 0px 0px 40px;

  h1 {
    color: #34495e;
    font-size: 25px;
    word-wrap: break-word;
    font-weight: 650;
    font-family: 'Nunito', sans-serif;
  }

  h4 {
    width: 60%;
    color: #6d7881;
    margin-bottom: 30px;
    font-size: 15px;
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
  }
  @media (max-width: 700px) {
    width: 90%;
    padding: 60px 0px 70px 40px;
    text-align: left;
    h1 {
      padding-left: 0px !important;
      margin: 0px, 0px, 40px, 0px;
      font-size: 25px !important;
    }
    h4 {
      width: 100%;
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
      font-family: 'Poppins', sans-serif;
    }
  }
`;

export const FormSpace = styled.div`
  display: block;
  align-items: left;
  margin: -330px 100px 94px 0px;
  border-radius: 10px;
  background: rgb(0, 0, 0, 0.9);
  box-shadow: -22px 27px 26px -31px rgba(0,0,0,0.75);

  @media (max-width: 700px) {
    margin: 0px !important;
    border-radius: 10px 10px 0px 0px;
  }
  
  @media (max-width: 1000px) {
    margin: -200px 20px 0px;
  }

  @media (min-width: 1900px) {
    margin-right: 200px;
  }
  
`;
