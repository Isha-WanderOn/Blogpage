import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box !important;
  margin: 1vw auto;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 600px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 900px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const Card = styled.div`
  box-sizing: border-box !important;
  background-color: #FFFFFF;
  filter: drop-shadow(4px 4px 25px rgba(0, 0, 0, 0.15));
  color: white;
  height: auto;
  width: 100%;
  padding: 1rem;
`;

export const SeeMoreMarginer = styled.div`
  margin: 0 1vw 0 1vw;
`;
