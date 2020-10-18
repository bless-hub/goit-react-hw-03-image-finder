import React from "react";
import style from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ modalImage, closeModal }) => {
  return (
    <div onClick={closeModal} className={style.Overlay}>
      <div className={style.Modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
