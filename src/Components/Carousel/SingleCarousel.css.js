import styled from "styled-components";

export const Image = styled.img`
  width: 78.03vw;
  /* width: 1066px; */
  /* width: 80%; */
  /* height: auto; */
  height: 455px;
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
  width: 78.03vw;
  margin-top: 10px;
  font-size: 2rem;
  display: "flex";
  justify-content: "flex-start";
  line-height: 30px;
  font-weight: 500;
`;
export const Description = styled.p`
  width: 78.03vw;
  font-weight: 400;
  font-size: 1.5rem;
  color: rgba(84, 84, 84, 0.7);
  text-align: justify;
`;
export const H2 = styled.div`
  width: 78.03vw;
  color: black;
  margin-top: 10px;
  font-size: 2.5rem;
  display: "flex";
  justify-content: "flex-start";
  text-align: start;
  line-height: 30px;
  font-weight: 700;
`;
export const AllTags = styled.div`
  display: flex;
  flex-direction: "row";
  width: 78.03vw;
  height: 2vw;
  margin-bottom: 2vw;
`;
export const Tags = styled.p`
  width: 10vw;
  padding: 1vw;
  border: 1px solid #045d51;
  border-radius: 10px;
  font-size: 1.5rem;
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

export const DateTag = styled.p`
  display: flex;
  justify-content: flex-start;
  width: 78.03vw;
  color: rgba(84, 84, 84, 0.7);
  font-size: 1.5rem;
`;
