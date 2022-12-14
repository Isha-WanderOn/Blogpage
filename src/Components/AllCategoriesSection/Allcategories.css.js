import styled from "styled-components";

// export const AllCategoriesDiv = styled.div`
//   width: 100vw;
//   height: 11.8vh;
//   background: rgba(3, 94, 80, 0.05);
//   margin-bottom: 64px;
//   margin-top: 7.23vh;
//   box-sizing: border-box;
//   padding: 3vw;
//   display: inline;
// `;

export const AllCategoriesDiv = styled.div`
  width: 100%;
  background: rgba(3, 94, 80, 0.05);
  margin-top: 50px;
  margin-bottom: 50px;
  height: 11.8vh;
  padding: 0.25em 1em;
  
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    overflow-x: scroll;
    /* padding-left: 40vw; */
    justify-content: left;
  }
`;

export const CategoryButton = styled.button`
  background: ${(props) => (props.more ? "#0A9E88" : "white")};
  color: ${(props) => (props.more ? "white" : "#0A9E88")};
  font-size: 2em;
  height: 7vh;
  padding: 0.25em 1em;
  cursor: pointer;
  margin-right: 2%;
  outline: 0.5px solid #045d51;
  border: 1px solid #045d51;
  border-radius: 12px;
  &:hover {
    background-color: #034a41;
    color: white;
  }
  @media (max-width: 480px){
    height: 3vh;
    font-size: 1em;
  }
`;
