import styled, { css } from "styled-components";

export const FootSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    width: auto;
  }
`;
export const Box1 = styled.div`
  ${(props) =>
    props.contacts &&
    css`
      & p {
        color: #383838;
        font-weight: bold;
        padding: 0 3.2em;
      }
    `}
  /* width: fit-content; */
  display: inline-flex;
  text-align: center;
  box-sizing: border-box;
  @media (max-width: 480px) {
    width: auto;
    padding: 0 2%;
    ${(props) =>
      props.contacts &&
      css`
        & p {
          color: #383838;
          font-weight: bold;
          padding: 0;
          font-size: small;
        }
      `}
  }
`;
export const Text = styled.p`
  font-size: 4rem;
  padding: 0 0.7em;
  @media (max-width: 480px) {
    width: auto;
    padding: 0 2%;
  }
`;

export const Tesitmonial = styled.img`
  height: 100%;
  width: 100%;
`;
