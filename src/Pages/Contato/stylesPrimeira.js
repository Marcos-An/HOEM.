import styled from 'styled-components'

export const Body = styled.div`
  padding: 80px 0px 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(./Assets/back.png);
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  
  @media (max-width: 600px) {
    padding: 60px 0px 60px 20px;
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
  font-size: 2.2em;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.7em;
  }
`;