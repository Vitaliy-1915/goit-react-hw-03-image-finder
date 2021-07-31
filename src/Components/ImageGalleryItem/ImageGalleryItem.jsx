import React from "react";
import { ImageGalleryItem, Image } from "./ImageGalleryItem.styles";

function ImageGalleryItems({ smallImage, tag }) {
  return (
    <ImageGalleryItem>
      <Image src={smallImage} alt={tag} />
    </ImageGalleryItem>
  );
}

export default ImageGalleryItems;
