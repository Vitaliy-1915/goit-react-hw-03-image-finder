import React from "react";
import ImageGalleryItems from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styles";

function ImageGallery() {
  return (
    <ImageGalleryList>
      <ImageGalleryItems />
    </ImageGalleryList>
  );
}

export default ImageGallery;
