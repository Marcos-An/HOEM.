import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 10px;
  color: #001529;
  font-size: 35px;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubTitle = styled.h4`
  color: #ff4d4f;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 800;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
export const Faixa = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #FDFDFD;
  padding: 50px 0px 10px 0px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #FDFDFD;
  padding: 30px 0px 10px 0px;

  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;

export const Body = styled.div`
  display: grid;
  background: #FDFDFD;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  grid-template-columns: repeat(3, 400px);
  grid-gap: 30px;
  text-align: left;
  .card{
    border-radius: 10px;
  }
  .zoom {
    overflow: hidden;
    position: relative;
  }
  .zoom:hover .chield {
    
    transform: scale(1.2);
  }
  @media (max-width: 600px) {
    grid-template-columns: 330px !important;
    grid-gap: 20px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 335px 335px;
    grid-gap: 20px;
  }
  @media (min-width: 1900px) {
    grid-template-columns: repeat(4, 400px);
    grid-gap: 20px;
  }
`;
export const Img = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  transition: all .7s ease-in-out;
  background-image: url(${props => props.imagem});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Tags = styled.div`
  z-index: 99;
  margin-top: -90px;
  display: flex;
`;

export const Text = styled.div`
  background: #fff;
  height: 130px;
  h2 {
    color: #f7b731;
    font-size: 23px;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
  }
  h3 {
    margin-top: -10px;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
  }
  h4 {
    text-transform: capitalize;
    color: #a6a6a6;
    font-weight: 400;
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
  }
  h5 {
    margin-left: 5px;
    margin-right: 5px;
    color: #aeb3ba;
    font-weight: 800;
    font-size: 13px;
    font-family: 'Nunito', sans-serif;
  }
`;