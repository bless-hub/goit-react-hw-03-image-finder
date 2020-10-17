import React from "react";
import style from "./Button.module.css";

const Button = ({ loadMore }) => (
  <button type="submit" className={style.Button} onClick={loadMore}>
    Load More
  </button>
);

export default Button;
