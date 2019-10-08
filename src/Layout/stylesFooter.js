import styled from 'styled-components'

export const Footer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  img {
    width: 230px
  }
  @media(max-width: 700px){
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

export const Divisor = styled.div`
  background: #fbc531;
  height: 4px;
  width: 30px;
  border-radius: 10px;
  margin: 20px 0px;
`;

export const First = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Second = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Third = styled.div`
  display: flex;
  flex-direction: column;
`;
;
export const Contato = styled.div`
  display: flex;
  align-items: center;
  .icon{
    font-size: 18px;
    color: #ff4d4f; 
    margin-right: 10px;
    margin-top: -7px;
  }
`;

export const Text = styled.h3`
  color: #6d7881;
  text-align: left;
  font-size: 1em;
  font-weight: 500;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

export const Title = styled.h3`
  color: #000;
  margin-bottom: -2px;
  text-align: left;
  font-size: 1.4em;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;