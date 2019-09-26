import styled from 'styled-components'

export const Body = styled.div`
  padding: 100px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(./Assets/back.png);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (max-width: 600px) {
    padding: 80px 0px 80px 20px;
    align-items: start;
  }
  @media (max-width: 1000px) {
    padding: 70px 0px 70px 20px;
  }
`;

export const Text = styled.h1`
  text-transform: capitalize;
  color: #fff;
  font-weight: 600;
  font-size: 2.5em;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.7em;
  }
`;

export const Infos = styled.div`
  margin: 20px 0px 20px 0px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 50px;

  @media (max-width: 600px) {
    grid-template-columns: 300px !important;
    grid-gap: 30px !important;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 300px);
    grid-gap: 30px;
    .item2 {
        display: none !important;
    }
  }
`;
export const Info = styled.div`
  
`;

export const TitleInfo = styled.h4`
  color: #fff;
  margin: -5px 0px 0px 10px;
  font-weight: 500;
  font-size: 1.5em;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.3em;
  }
`;

export const TextInfo = styled.h5`
  color: #D3D3D5;
  margin: 5px 0px 0px 30px;
  font-size: 1.1em;
  font-weight: 400;
  font-family: 'Work Sans', sans-serif;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;