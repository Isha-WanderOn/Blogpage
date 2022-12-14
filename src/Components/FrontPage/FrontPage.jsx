import React from "react";
import Allcategories from "../AllCategoriesSection/Allcategories";
import SingleCarousel from "../Carousel/SingleCarousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Heading from "../Headings/Heading";
import SplitCarousel from "../SplitCarousel/SplitCarousel";

const FrontPage = () => {
  return (
    <div>
      <Header />
      <Allcategories />
      <Heading heading='Featured' />
      <SingleCarousel />
      <SplitCarousel heading='Latest' />
      <Footer />
    </div>
  );
};

export default FrontPage;
