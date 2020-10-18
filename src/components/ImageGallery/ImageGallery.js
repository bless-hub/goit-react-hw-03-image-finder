import React from "react";
import style from "../ImageGallery/ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images, openModal }) => (
  <ul className={style.ImageGallery}>
    {images.map(({ id, largeImageURL, webformatURL, tags }) => (
      <ImageGalleryItem
        key={id}
        url={webformatURL}
        alt={tags}
        modalImage={largeImageURL}
        openModal={openModal}
      />
    ))}
  </ul>
);
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
