import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: center;
  background: #fff;
`;

export const Body = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
  grid-template-columns: repeat(3, 280px);
  grid-gap: 20px;
  text-align: left;
  @media (max-width: 600px) {
    grid-template-columns: 300px !important;
    grid-gap: 10px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 335px 335px;
    grid-gap: 20px;
  }
  @media (min-width: 1900px) {
    grid-template-columns: repeat(4, 350px);
    grid-gap: 20px;
  }
`;
export const Img = styled.div`
  height: 230px;
  background-image: url(${props => props.imagem});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Text = styled.div`
  background: #fff;
  height: 130px;
  color: #2c3e50;
  margin-left: -10px;
  h3 {
    margin: 10px 0px 0px 10px;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
  }
  h4 {
    margin: 0px 0px 10px 10px;
    text-transform: capitalize;
    color: #a6a6a6;
    font-weight: 400;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
  }
  h5 {
    margin: 0px 0px 0px 10px;
    text-transform: capitalize;
    color: #383838;
    font-weight: 450;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
  }
  strong {
    margin: 0px 10px;
    color: #ffdf29;
    font-size: 22px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
  }
`;