import React from "react";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;
