import React from "react";
import style from "../ImageGallery/ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, ...otherProps }) => (
  <ul className={style.ImageGallery}>
    {images.map(({ id, ...imgProps }) => (
      <ImageGalleryItem key={id} {...imgProps} {...otherProps} />
    ))}
  </ul>
);

export default ImageGallery;
