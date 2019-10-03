import styled from 'styled-components'

export const Footer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Divisor = styled.div`
  background: #F40C0C;
  height: 4px;
  width: 40px;
`;

export const First = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Second = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Third = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h3`
  color: #A8A7A7;
  margin-top: 15px;
  text-align: left;
  font-size: 1.1em;
  font-weight: 400;
  font-family: 'Work Sans', sans-serif;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;