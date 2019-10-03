import styled from 'styled-components';

export const SextaFaixa = styled.div`
  padding: 50px 0px 50px 0px;
  display: grid;
  background-image: url(../../../Assets/bg-achievement.jpg);
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-gap: 50px;
  justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    grid-template-columns: 300px !important;
    grid-column-gap: 20px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 300px 300px;
    grid-column-gap: 20px;
  }
`;

export const Infos = styled.div`
  height: 230px;
  color: #fff;
  justify-content: center;
  text-align: center;

  img {
    height: 50px;
  }
`;

export const Value = styled.h2`
  color: #f3bc65;
  margin: 60px 0px 10px 0px;
  font-size: 3em;
  letter-spacing: 5px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
`;

export const Text = styled.h5`
  color: #f3bc65;
  font-size: 0.9em;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
`;
