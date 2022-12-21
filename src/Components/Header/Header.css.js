import styled from "styled-components";

export const TopContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const BackgroundImage = styled.img`
  width: 100%;
  display: inline-block;
`;
export const Heading = styled.span`
  position: absolute;
  left: 45.8vw;
  color: #ffffff;
  font-size: 5rem;
  font-family: 'Comforter Brush', cursive;
  font-weight: 400;
  font-style: normal;
  z-index: 1;
  top: 5.44vh;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TopContainerImage = styled.img`
  width: 78.03vw;
  position: absolute;
  top: 20.77vh;
  left: 11vw;
  box-shadow: 4px 4px 42px 1px rgba(4, 93, 81, 0.19);
  border-radius: 4px;
  @media(max-width: 480px) {
    top: 10.77vh;
    width: 90%;
    left: 5vw
  }

`;

export const TopHeadingContainer = styled.div`
  width: 62.81vw;
  position: absolute;
  top: 39.5vh;
  left: 18.74vw;
  text-align: center;
  /* line-height: 3rem; */
  @media (max-width: 480px) {
    top: 15vh;
    width: 100vw;
    left: 0;
    line-height: 1.5rem;
  }
  @media (min-width: 1024px) and (max-width: 1440) {
    width: 100vw;
    left: 1vw;
  }
`;

export const TopHeading = styled.h1`
  font-weight: 600;
  color: #FFFFFF;
  font-size: 3.5rem;
  text-shadow: 1px 1px 7px rgba(0, 0, 0, 0.9);
  @media (max-width: 480px) {
    font-size: 3vw;
  }
  @media (min-width: 1024px)  {
    font-size: 2.5vw;
  }
`;
