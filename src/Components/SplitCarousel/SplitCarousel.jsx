import { useContext } from "react";
import Heading from "../Headings/Heading";
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
  Row,
  DateTag,
  View,
} from "./SplitCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 480 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const SplitCarousel = (props) => {
  const { Blogs } = useContext(BlogContext);
  console.log(Blogs);
  return (
    <>
      <Heading heading={props.heading} />
      <Carousel
        itemClass='splicarousel-item'
        partialVisible={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="splitcarousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {Blogs.slice(0, 10).map(
          (blogs, index) =>
            index < 10 && (
              <div style={ {}}>
                <Container key={blogs.id}>
                  <Image
                    alt={blogs.featuredImage.altText}
                    src={blogs.featuredImage.link}
                  />
                  <P>Places</P>
                  <H2>{blogs.title}</H2>
                  <Description>{blogs.meta.description}</Description>
                  <AllTags>
                    {Blogs[0].tags.slice(0, 2).map((tags) => {
                      return <Tags>{tags.name}</Tags>;
                    })}
                  </AllTags>
                  <Row>
                    <DateTag>{new Date(blogs.date).toDateString()}</DateTag>
                    <View>
                      <i className="fa fa-eye"></i> 10K viewers
                    </View>
                  </Row>
                  
                </Container>
              </div>
            )
        )}
      </Carousel>
    </>
  );
};
export default SplitCarousel;
