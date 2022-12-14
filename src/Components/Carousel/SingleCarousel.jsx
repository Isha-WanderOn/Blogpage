import React from "react";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { BlogContext } from "../../context/Blogs";
import "react-multi-carousel/lib/styles.css";
import {
  Container,
  Image,
  P,
  H2,
  Description,
  AllTags,
  Tags,
  DateTag,
} from "./SingleCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const SingleCarousel = () => {
  const { Blogs } = useContext(BlogContext);
  return (
    <>
      <Carousel
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {Blogs.slice(0, 10).map(
          (blogs, index) =>
            index < 10 && (
              <>
                <Container key={blogs.id}>
                  <Image alt={blogs.featuredImage.altText} src={blogs.featuredImage.link} />
                  <P>
                    Places
                    <span
                      style={{
                        marginLeft: "70vw",
                      }}
                    >
                      <i className="fa fa-share-nodes"></i>
                    </span>
                  </P>
                  <H2>{blogs.title}</H2>
                  <Description>
                    {blogs.meta.description} It’s time to turn the fun quotient
                    up a notch for your New Year celebration in India this year!
                    Dive into a sea of enthralling experiences and taste new
                    adventures amid surreal landscapes as you wait for a new
                    year, a new beginning to unfurl! We bring you some super
                    exciting destinations......
                    <span style={{ color: "black", fontWeight: 600 }}>
                      Read More
                    </span>
                  </Description>
                  <AllTags>
                    {Blogs[0].tags.slice(0, 3).map((tags) => {
                      return <Tags>{tags.name}</Tags>;
                    })}
                  </AllTags>
                  <DateTag>
                    {new Date(blogs.date).toDateString()}
                    <span
                      style={{
                        marginLeft: "55vw",
                        color: "black",
                        fontSize: "1.5rem"
                      }}
                    >
                      <i className="fa fa-eye"></i> 10K viewers
                    </span>
                  </DateTag>
                </Container>
              </>
            )
        )}
      </Carousel>
    </>
  );
};

export default SingleCarousel;
