import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ loadMore }) => (
  <button type="submit" className={style.Button} onClick={loadMore}>
    Load More
  </button>
);

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
