import React from "react";
import style from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ url, alt, openModal, modalImage }) => {
  return (
    <div>
      <li
        className={style.ImageGalleryItem}
        onClick={() => openModal(modalImage)}
      >
        <img src={url} alt={alt} className={style.ImageGalleryItem_image} />
      </li>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
