import React, { Component } from "react";
import ImageGalleryItems from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styles";

class ImageGallery extends Component {
  render() {
    return (
      <ImageGalleryList>
        <ImageGalleryItems />
      </ImageGalleryList>
    );
  }
}

export default ImageGallery;
