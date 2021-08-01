import React from "react";
import { ImageGalleryItem, Image } from "./ImageGalleryItem.styles";

function ImageGalleryItems({ smallImage, tag, onClick }) {
  return (
    <ImageGalleryItem onClick={onClick}>
      <Image src={smallImage} alt={tag} />
    </ImageGalleryItem>
  );
}

export default ImageGalleryItems;
