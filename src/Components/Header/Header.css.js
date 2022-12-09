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
  font-size: 4.68vw;
  font-family: "Comforter";
  font-weight: 400;
  font-style: normal;
  z-index: 1;
  top: 5.44vh;
`;

export const TopContainerImage = styled.img`
  width: 78.03vw;
  position: absolute;
  top: 20.77vh;
  left: 11vw;
  box-shadow: 4px 4px 42px 1px rgba(4, 93, 81, 0.19);
  border-radius: 4px;
  @media(max-width: 675px) {
    top: 10.77vh
  }

`;

export const TopHeadingContainer = styled.div`
  width: 62.81vw;
  position: absolute;
  top: 39.5vh;
  left: 18.74vw;
  text-align: center;
  line-height: 39px;
  @media (max-width: 675px) {
    top: 17.5vh;
    line-height: 15px;
  }
`;

export const TopHeading = styled.h1`
  font-weight: 600;
  color: #FFFFFF;
  font-size: 2.34vw;
  text-shadow: 1px 1px 7px rgba(0, 0, 0, 0.9);
`;
