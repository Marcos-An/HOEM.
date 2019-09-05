import styled from 'styled-components';

export const Body = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 3fr 1.5fr;
  grid-gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: none !important;
    grid-gap: 10px;
  }
`;
