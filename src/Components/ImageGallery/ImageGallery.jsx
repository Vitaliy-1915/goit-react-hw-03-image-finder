import React from "react";
import ImageGalleryItems from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styles";

function ImageGallery({ images }) {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItems key={id} tag={tags} smallImage={webformatURL} />
      ))}
    </ImageGalleryList>
  );
}

export default ImageGallery;
