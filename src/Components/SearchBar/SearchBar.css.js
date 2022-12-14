import styled from "styled-components";

export const SearchBox = styled.div`
  width: 59.88vw;
  height: 17vh;
  position: absolute;
  top: 34vw;
  display: flex;
  align-items: center;
  right: 20.05vw;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  width: 59.88vw;
  height: 8.5vh;
  border: none;
  outline: 1px solid #045d51;
  border-radius: 5px 0 0 5px;
  padding: 0;
  color: #045d51;
  font-size: 1.61vw;
  padding-left: 2vw;
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);
  @media (max-width: 480px) {
    height: 5vh;
    font-size: 2vw;
    border-radius: 5px;
  }
`;
export const SearchBtnDiv = styled.div`
  display: inline;
  position: relative;
  @media (max-width: 480px) {
    display: none;
  }
`;
