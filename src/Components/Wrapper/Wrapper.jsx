import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGalleryList from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import { WrapperContainer } from "./Wrapper.styles";

class Wrapper extends Component {
  render() {
    return (
      <WrapperContainer>
        <Searchbar />
        <ImageGalleryList />
        <Button />
      </WrapperContainer>
    );
  }
}

export default Wrapper;
