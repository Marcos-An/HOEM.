import styled from 'styled-components';

export const PaginationSection = styled.div`
  padding: 50px 0px 200px 43px;
  
  @media (max-width: 700px) {
    padding: 50px 0px 100px 20px !important;
  }
  @media (max-width: 1000px) {
    padding: 50px 0px 200px 43px;
  }
`;
export const Loading = styled.div`
  padding: 0px 40px 200px 40px;
  display: grid;
  grid-template-columns: repeat(3, 330px);
  justify-content: center;
  align-self: center;
  flex-direction: column;
  grid-gap: 40px;

  @media (max-width: 700px) {
    padding: 0px 20px 200px 20px;
    grid-template-columns: 300px !important;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 330px 330px;
    grid-gap: 40px;
    margin-left: 0px;
  }
`;

export const Title = styled.h1`
  margin-top: 10px;
  color: #001529;
  font-size: 35px;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const Icons = styled.div`
    margin-top: 10px;
    display: flex;
`;
export const IconsInfo = styled.div`
    display: flex;
    align-content: center;
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

  @media (max-width: 700px){
    padding: 30px 0px 10px 0px !important;
  }

  @media (max-width: 1024px){
    margin: 160px 0px 10px 0px !important;
  }
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
  @media (max-width: 700px) {
    grid-template-columns: 330px !important;
    grid-gap: 30px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 330px 330px;
    grid-gap: 30px;
  }
  @media (min-width: 1900px) {
    grid-template-columns: repeat(4, 400px);
    grid-gap: 30px;
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
    font-size: 15px;
    font-family: 'Nunito', sans-serif;
  }

  h5 {
    margin-left: 5px;
    margin-right: 5px;
    color: #aeb3ba;
    font-weight: 800;
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
  }

  h6 {
    margin-top: -2px;
    margin-left: 8px;
    margin-right: 15px;
    color: #aeb3ba;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
  }
`;