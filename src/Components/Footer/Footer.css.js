import styled, { css } from "styled-components";

export const FootSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  @media (max-width: 480px) {
    width: auto;
  }
`;
export const Box1 = styled.div`
  display: flex;
  ${(props) =>
    props.contacts &&
    css`
      & p {
        color: #383838;
        font-weight: bold;
      }
    `}
  text-align: center;
  justify-content: center;
  @media (max-width: 480px) {
    width: 100%;
    ${(props) =>
    props.contacts &&
    css`
      & p {
        color: #383838;
        font-weight: bold;
        font-size: small;
      }
    `}
  }
`;
export const Text = styled.p`
  font-size: 4rem;
  @media (max-width: 480px) {
    width: auto;
  }
`;
