import styled from 'styled-components';

export const Body = styled.div`
  padding: 80px 7%; 
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr 1fr;
`;

export const Infos = styled.div`
  margin: 50px 0px 20px 0px;
  @media (max-width: 600px) {

  }
  @media (max-width: 1000px) {

    }
  }
`;
export const Info = styled.div`
  
`;

export const TitleInfo = styled.h4`
  color: #001529;
  margin: -5px 0px 0px 10px;
  font-weight: 550;
  font-size: 1.3em;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.1em;
  }
`;

export const TextInfo = styled.h5`
  color: #A8A7A7;
  margin: 5px 0px 0px 30px;
  font-size: 1.1em;
  font-weight: 400;
  font-family: 'Work Sans', sans-serif;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

export const Title = styled.h4`
  color: #001529;
  font-weight: 550;
  font-size: 1.5em;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

export const Text = styled.h5`
  color: #A8A7A7;
  margin: -10px 0px 30px 0px;
  font-size: 1.1em;
  font-weight: 400;
  font-family: 'Work Sans', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.1em;
  }
`;