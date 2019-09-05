import styled from 'styled-components';

export const TerceiraFaixa = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Imagem = styled.div`
  width: 40%;
  background: url('https://images.unsplash.com/photo-1556912150-4ad486d855d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=435&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Info = styled.div`
  width: 60%;
  h1 {
    padding: 4% 4% 1% 4%;
    color: #0ba;
    font-size: 35px;
    word-wrap: break-word;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
  }

  p {
    padding-left: 4%;
    margin-right: 12%;
    color: #2c3e50;
    font-size: 16px;
    word-wrap: break-word;
    font-weight: 300;
    font-family: 'Work Sans', sans-serif;
  }
  @media (max-width: 700px) {
    width: 100%;
    h1 {
      padding: 2%;
      color: #0ba;
      font-size: 25px;
      word-wrap: break-word;
      font-weight: 900;
      font-family: 'Poppins', sans-serif;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    h1 {
      padding-top: 7%;
      color: #0ba;
      font-size: 35px;
      word-wrap: break-word;
      font-weight: 900;
      font-family: 'Poppins', sans-serif;
    }
  }
`;

export const InfoIcon = styled.div`
  display: grid;
  padding: 4% 0% 4% 4%;
  justify-content: left;
  grid-template-columns: repeat(2, 335px);
  grid-gap: 20px;

  img {
    height: 50px;
    margin: 0% 0% 4% 0%;
  }

  h2 {
    font-size: 20px;
    color: #0ba;
    word-wrap: break-word;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }
  p {
    padding-left: 0%;
    color: #696969;
    font-size: 15px;
    word-wrap: break-word;
    font-weight: 300;
    font-family: 'Work Sans', sans-serif;
  }

  @media (max-width: 700px) {
    grid-template-columns: 300px !important;
    grid-gap: 10px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 335px 335px;
    grid-gap: 30px;
  }
`;
