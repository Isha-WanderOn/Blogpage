import styled from "styled-components";
import bg from "../../assets/images/reviewbox.png";
import backgroundImage from "../../assets/images/testimonial.png";
export const TestimonialContainer = styled.div`
  margin-top: 10vw;
  padding: 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
`;
export const TestimonialDiv = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  height: fit-content;
`;
export const TestimonialHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  font-weight: 600;
  color: #045d51;
`;

export const HeadingImg = styled.img`
  width: 40vw;
  margin-top: 10vw;
  height: auto;
  @media (max-width: 480px) {
    width: 80vw;
  }
`;

export const Reviewdiv = styled.div`
  width: 30vw;
  padding: 2rem;
  box-sizing: border-box;
  @media (max-width: 480px) {
    width: 100vw;
    height: 50vh;
    overflow: hidden;
    font-size: 0.8rem;
  }
`;

export const ReviewBox = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 25vw;
  display: flex;
  color: #4f4f4f;
  box-sizing: border-box;
  padding: 4rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: justify;
  justify-content: center;
  @media (max-width: 480px) {
    height: 30vh;
    width: 90%;
    font-size: 1rem;
    padding: 10vw 10vw;
    overflow-wrap: break-word;
  }
`;

export const Remark = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Experience = styled.div`
  width: 100%;
  margin-top: 5vw;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
`;
export const ExperienceHeading = styled.h1`
  font-family: "Sen";
  font-style: normal;
  font-weight: 400;
  font-size: 2.78vw;
  line-height: 4.5rem;
  color: #083740;
`;

export const OuterDiv = styled.div`
   /* border: 1px solid blue;  */
  display: flex;  

  &:nth-child(even){
    border: 1px solid green;
  }

`;