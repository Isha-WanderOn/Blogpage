import React from "react";
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
  OuterDiv,
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
    partialVisibilityGutter: 40 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Testimonial = () => {
  return (
   
    <TestimonialContainer>
      <TestimonialHeading>
        <HeadingImg src={headingUrl} alt="heading" />
      </TestimonialHeading>
      <OuterDiv>
      <TestimonialDiv>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition={'transform 300ms ease-in-out'}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          partialVisible={true}
        >
          <Reviewdiv>
            <ReviewBox>
              WanderOn is one of the best travel communities I have traveled
              with. Awesome folks, interesting fun activities across the trip.
              They provide comfortable stay.....
            </ReviewBox>
            <div style={{ display: "flex", alignItems: "center"}}>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </div>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              It was fun teavelling with WanderOn all the arrangemetns were
              perfect, Manish was our tour guide he was very careful and
              cooperative throughout the trip.....
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
              I am extremely happy with my Spiti tour of 5 day. Team
              captains(Maneesh, Gaurav, and Ojas) have proven to be very
              friendly and helpful from very beginning, they gave us information
              of each sight visiting.....
            </ReviewBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </div>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              WanderOn is one of the best travel communities I have traveled
              with. Awesome folks, interesting fun activities across the trip.
              They provide comfortable stay.....
            </ReviewBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </div>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              WanderOn is one of the best travel communities I have traveled
              with. Awesome folks, interesting fun activities across the trip.
              They provide comfortable stay.....
            </ReviewBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </div>
          </Reviewdiv>
          <Reviewdiv>
            <ReviewBox>
              WanderOn is one of the best travel communities I have traveled
              with. Awesome folks, interesting fun activities across the trip.
              They provide comfortable stay.....
            </ReviewBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={emoji} alt="emoji" />
              <Remark>
                <h1>⭐⭐⭐⭐⭐</h1>
                <h1>Isha Sharma</h1>
              </Remark>
            </div>
          </Reviewdiv>
        </Carousel>

      </TestimonialDiv>
      </OuterDiv>
      <Experience>
        <ExperienceHeading>
        Get ready for 5-star Experience with us
        </ExperienceHeading>
      </Experience>
    </TestimonialContainer>
  );
};

export default Testimonial;
