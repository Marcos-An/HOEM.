import styled from 'styled-components';

export const SextaFaixa = styled.div`
  padding: 80px 0px 80px 0px;
  display: grid;
  background-image: url(../../../Assets/bg-achievement.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-gap: 20px;
  justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    grid-template-columns: 300px !important;
    grid-column-gap: 20px;
  }
  @media (max-width: 900px) {
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
  color: #fff;
  margin: 60px 0px 10px 0px;
  font-size: 3.5em;
  letter-spacing: 5px;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
`;

export const Text = styled.h5`
  color: #fff;
  font-size: 1.5em;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
`;
