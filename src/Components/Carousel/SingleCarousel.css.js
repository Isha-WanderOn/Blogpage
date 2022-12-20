import styled from "styled-components";

export const Image = styled.img`
  width: 78.03vw;
  height: 80vh;
  object-fit: cover;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const P = styled.p`
  color: #068e7c;
  margin-top: 1.5rem;
  font-size: 2rem;
  display: "flex";
  justify-content: "flex-start";
  line-height: 30px;
  font-weight: 500;
  @media screen {
    margin-top: 0.8rem;
    font-size: 1.5rem;
  }
`;
export const Description = styled.p`
  width: 78.03vw;
  /* width: 100%; */
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 3.4rem;
  color: rgba(84, 84, 84, 0.7);
  text-align: justify;
  @media (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;
export const H2 = styled.div`
  width: 78.03vw;
  /* width: 100%; */
  color: black;
  margin-top: 4rem;
  font-size: 3.5rem;
  display: "flex";
  justify-content: "flex-start";
  text-align: start;
  line-height: 4.3rem;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin-top: 1rem;
  }
`;
export const AllTags = styled.div`
  display: flex;
  flex-direction: "row";
  width: 78.03vw;
  /* width: 100%; */
  /* height: 2vw; */
  margin-bottom: 1.2rem;
`;
export const Tags = styled.p`
  width: 15.4rem;
  border: 0.1rem solid #045d51;
  border-radius: 1rem;
  padding: 0.5rem 2.5rem;
  font-size: 2.2rem;
  line-height: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #045d51;
  font-weight: 300;
  @media screen {
    font-size: 1.2rem;
    padding: 0.2rem 1.2rem;
  }
`;

export const DateTag = styled.p`
  color: rgba(84, 84, 84, 0.7);
  font-size: 1.5rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const View = styled.p`
  color: "black";
  font-size: 1.5rem;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Row = styled.div`
  width: 78.03vw;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
`;
