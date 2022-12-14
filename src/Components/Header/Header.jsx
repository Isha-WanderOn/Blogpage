import React from "react";
import {
  Heading,
  TopHeading,
  TopContainer,
  TopContainerImage,
  BackgroundImage,
  TopHeadingContainer,
} from "./Header.css";
import imageURL from "../../assets/images/topContainer.png";
import topImageURL from "../../assets/images/image1.png";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <TopContainer>
      <BackgroundImage src={imageURL} alt="topimage" />
      <Heading>Blogs</Heading>
      <TopContainerImage src={topImageURL} alt="topimage2" />
      <TopHeadingContainer>
        <TopHeading>
          Let’s Take a look as to what the coolest travel
          <br /> community says about the upcoming travel trends!
        </TopHeading>
      </TopHeadingContainer>
      <SearchBar />
    </TopContainer>
  );
};

export default Header;
