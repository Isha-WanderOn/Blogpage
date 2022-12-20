import React from "react";
import "./styles.css";
import {
  TestimonialContainer,
  TestimonialDiv,
  TestimonialHeading,
  HeadingImg,
  Reviewdiv,
  ReviewBox,
  Remark,
  NameDiv,
  Experience,
  ExperienceHeading,
  ExperienceSocial,
  Google,
  Rating,
  NumReview,
  Icon,
  // OuterDiv,
} from "./Testimonial.css";
import headingUrl from "../../assets/images/testimonialHeading.png";
import emoji from "../../assets/images/emoji.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialHeading>
        <HeadingImg src={headingUrl} alt="heading" />
      </TestimonialHeading>
      <TestimonialDiv>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition={"transform 300ms ease-in-out"}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item1"
          partialVisible={true}
        >
          <Reviewdiv>
            <ReviewBox>
              <div style={{ width: "80%", position: "absolute", top: "10%" }}>
                WanderOn is one of the best travel communities I have traveled
                with. Awesome folks, interesting fun activities across the trip.
                They provide comfortable stay.....
              </div>
            </ReviewBox>
            <NameDiv>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </NameDiv>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              <div style={{ width: "80%", position: "absolute", top: "10%" }}>
                WanderOn is one of the best travel communities I have traveled
                with. Awesome folks, interesting fun activities across the trip.
                They provide comfortable stay.....
              </div>
            </ReviewBox>
            <NameDiv>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </NameDiv>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              <div style={{ width: "80%", position: "absolute", top: "10%" }}>
                WanderOn is one of the best travel communities I have traveled
                with. Awesome folks, interesting fun activities across the trip.
                They provide comfortable stay.....
              </div>
            </ReviewBox>
            <NameDiv>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </NameDiv>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              <div style={{ width: "80%", position: "absolute", top: "10%" }}>
                WanderOn is one of the best travel communities I have traveled
                with. Awesome folks, interesting fun activities across the trip.
                They provide comfortable stay.....
              </div>
            </ReviewBox>
            <NameDiv>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </NameDiv>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              <div style={{ width: "80%", position: "absolute", top: "10%" }}>
                WanderOn is one of the best travel communities I have traveled
                with. Awesome folks, interesting fun activities across the trip.
                They provide comfortable stay.....
              </div>
            </ReviewBox>
            <NameDiv>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </NameDiv>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              <div style={{ width: "80%", position: "absolute", top: "10%" }}>
                WanderOn is one of the best travel communities I have traveled
                with. Awesome folks, interesting fun activities across the trip.
                They provide comfortable stay.....
              </div>
            </ReviewBox>
            <NameDiv>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </NameDiv>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              <div style={{ width: "80%", position: "absolute", top: "10%" }}>
                WanderOn is one of the best travel communities I have traveled
                with. Awesome folks, interesting fun activities across the trip.
                They provide comfortable stay.....
              </div>
            </ReviewBox>
            <NameDiv>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </NameDiv>
          </Reviewdiv>
        </Carousel>
      </TestimonialDiv>
      <Experience>
        <ExperienceHeading>
          Get ready for 5-star Experience with us
        </ExperienceHeading>
      </Experience>
      <ExperienceSocial>
        <Google>
          <Icon
            src="https://img.icons8.com/fluency/48/null/google-logo.png"
            alt="google"
          />
          <Rating>⭐ 4.9</Rating>
          <NumReview>(1499 reviews)</NumReview>
        </Google>
        <Google>
          <Icon
            src="https://img.icons8.com/color/48/null/instagram-new--v1.png"
            alt="Instagram"
          />
          <Rating>⭐ 5</Rating>
          <NumReview>(1499 reviews)</NumReview>
        </Google>
        <Google>
          <Icon
            src="https://img.icons8.com/color/48/null/facebook-new.png"
            alt="Facebook"
          />
          <Rating>⭐ 4.8</Rating>
          <NumReview>(1499 reviews)</NumReview>
        </Google>
      </ExperienceSocial>
    </TestimonialContainer>
  );
};

export default Testimonial;
