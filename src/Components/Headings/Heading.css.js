import styled from "styled-components";

export const CaurselHeading = styled.h1`
  color: #045d51;
  margin: 100px auto;
  max-width: 600px;
  text-align: center;
  font-size: 3rem;
  position: relative;
  margin-bottom: 2rem;
  &:before {
    content: "";
    display: block;
    width: 35%;
    height: 2px;
    background: black;
    left: 0;
    top: 50%;
    position: absolute;
  }
  &:after {
    content: "";
    display: block;
    width: 35%;
    height: 2px;
    background: black;
    right: 0;
    top: 50%;
    position: absolute;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
    &:before{
      width: 17vw;
      left: 10vw;
    }
    &:after{
      width: 17vw;
      right: 10vw;
    }
  }
`;
