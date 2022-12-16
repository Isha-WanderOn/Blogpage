import styled from "styled-components";

export const P = styled.p`
  color: #045d51;
  width: 30vw;
  @media (max-width: 768px){
    width: 78vw;
  }
`;
export const Description = styled.p`
  color: rgba(84, 84, 84, 0.7);
  font-size: 1.5rem;
  width: 30vw;
  @media (max-width: 768px){
    width: 78vw;
  }
`;
export const H2 = styled.h2`
  color: black;
  width: 30vw;
  font-size: 2rem;
  @media (max-width: 768px){
    width: 78vw;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Image = styled.img`
  width: 30vw;
  height: 40vh;
  display: flex;
  align-items: center;
  @media (max-width: 768px){
    width: 78vw;
  }
`;
export const AllTags = styled.div`
  display: flex;
  flex-direction: "row";
  width: 30vw;
  height: 1vw;
  margin-bottom: 5vw;
`;
export const Tags = styled.div`
  width: 10vw;
  padding: 1vw;
  border: 1px solid #045d51;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #045d51;
  font-weight: 100;
`;

export const Row = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-between;
`;
export const DateTag = styled.p`
  color: rgba(84, 84, 84, 0.7);
  font-size: 1.5rem;
`;
export const View = styled.p`
  color: "black";
  font-size: 1.5rem;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

