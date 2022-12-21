import styled from "styled-components";

export const P = styled.p`
  color: #045d51;
  font-size: ${(props)=> props.card ? '1.5rem': '2rem'};
  line-height: 3rem;
  display: "flex";
  justify-content: "flex-start";
  font-weight: 600;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;
export const Description = styled.p`
  font-size: ${(props)=> props.card ? '1.5rem': '2.5rem'};
  font-weight: 400;
  line-height: 3.4rem;
  color: rgba(84, 84, 84, 0.7);
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;
export const H2 = styled.h1`
  margin-top: 0;
  color: #0c0c0c;
  width: 100%;
  line-height: ${(props)=> props.card ? '2.5rem': '4.2rem'};;
  font-size: ${(props)=> props.card ? '2rem': '3.5rem'};
  margin-bottom: 2rem;
  font-weight: 700;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  object-fit: cover;
  box-sizing: border-box;
`;
export const Image = styled.img`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AllTags = styled.div`
  display: flex;
  flex-direction: "row";
  width: 100%;
  height: 2.7rem;
  margin-bottom: 5vw;
`;
export const Tags = styled.div`
  width: 10vw;
  padding: 5px 25px 5px 25px;
  border: 1px solid #045d51;
  border-radius: 10px;
  font-size:${(props)=> props.card ? '1rem': '2.2rem'};
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #045d51;
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 2px 10px 2px 10px;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const DateTag = styled.p`
  color: rgba(84, 84, 84, 0.7);
  font-size: ${(props)=> props.card ? '1.5rem': '2rem'};
  line-height: 2.9rem;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
export const View = styled.p`
  color: #313131;
  font-size: ${(props)=> props.card ? '1.5rem': '2rem'};
  line-height: 2.9rem;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
