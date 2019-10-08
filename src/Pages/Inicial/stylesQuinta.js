import styled from 'styled-components';

export const QuintaFaixa = styled.div`
  background: #fff;
  padding: 150px 40px 0px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 700px){
    padding: 50px 40px 0px 40px;
    background: #F1F1F1;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 18px;
  margin-top: 10px;
  word-wrap: break-word;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
`;

export const SubTitle = styled.h1`
  color: #a6a6a6;
  font-size: 15px;
  word-wrap: break-word;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
`;

export const Nome = styled.h4`
  color: #000;
  font-size: 20px;
  margin-bottom: 20px;
  word-wrap: break-word;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
`;

export const Funcao = styled.h4`
  color: #a6a6a6;
  font-size: 14px;
  margin-top: 10px;
  word-wrap: break-word;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
`;

export const Divisor = styled.div`
  background: #fbc531;
  border-radius: 10px;
  margin: -5px 0px 10px 0px;
  height: 3px;
  width: 30px;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const ContatoAgentes = styled.h4`
  color: #6d7881;
  font-size: 16px;
  margin-top: 7px;
  margin-left: 12px;
  word-wrap: break-word;
  font-weight: 500;
  font-family: 'Nunito', sans-serif;
`;

export const DivBox = styled.div`
  padding: 0px 50px 0px 50px;
  display: flex;
  justify-content: flex-end;
  text-align: center;

  @media (max-width: 700px){
    justify-content: center;
    padding: 0px 50px 100px 50px !important;
  }
  @media (max-width: 900px){
    padding: 0px 15px 0px 50px; 
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-gap: 20px;
  margin-top: -300px;

  .zoom:hover {
    transform: scale(1.05)
  }
  @media (max-width: 700px){
    margin-top: 50px;
    grid-template-columns: 320px !important;
    justify-items: center;
    grid-gap: 50px;
  };

  @media (max-width: 1024px){
    grid-template-columns: 200px 200px;
    grid-gap: 20px;
  }
`;

export const BoxInfo = styled.div`
  padding: 30px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all .6s;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 8px -2px rgba(0,0,0,0.75);

  @media (max-width: 1024px){
    padding: 10px;
  }

`;

export const Agentes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  padding: 100px 0px;
  grid-gap: 30px;

  @media (max-width: 600px){
    margin-top: 50px;
    grid-template-columns: 320px !important;
    grid-gap: 80px;
    padding: 30px 0px 80px 0px !important;
  };

  @media (max-width: 1024px){
    grid-template-columns: 300px 300px;
    grid-gap: 100px;
  }
`;

export const Agente = styled.div`
  padding: 30px;
  margin: 20px;
  width: 260px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 6px 14px -5px rgba(0,0,0,0.49);
  .zoom{
    position: relative;
    overflow: hidden;
  }
  .imagem:hover {
    transform: scale(1.05);
  }
`;
 export const Img = styled.img`
  height: 100px;
  width: 100px;
  transition: all 0.9s;
  margin-top: -80px;
  border-radius: 100px;
  background-image: url(${props => props.imagem});
  background-position: center;
  background-size: cover;
`;