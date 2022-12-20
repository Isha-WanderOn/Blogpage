import {React, useContext} from "react";
import Allcategories from "../AllCategoriesSection/Allcategories";
import SingleCarousel from "../Carousel/SingleCarousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Heading from "../Headings/Heading";
import Testimonial from "../Testimonial/Testimonial";
import SplitCarousel from "../SplitCarousel/SplitCarousel";
import { Marginer } from "./FrontPage.css";
import About from "../About/About";
import { BlogContext } from "../../context/Blogs";
import LoadingComponent from "../Loading/LoadingComponent";

const FrontPage = () => {
  const {loading} = useContext(BlogContext);
  return (
    <div>
      <Header />
      {loading ? <LoadingComponent />:
      <>
      <Allcategories />
      <Heading heading="Featured" />
      <SingleCarousel />
      <Marginer>
        <SplitCarousel heading="Latest" />
        <SplitCarousel heading="Trending" />
        <SplitCarousel heading="Backpacking Trips" />
        <SplitCarousel heading="Honeymoon" />
      </Marginer>
      <Testimonial />
      <About />
      </>
    }
      <Footer />
    </div>
  );
};

export default FrontPage;
