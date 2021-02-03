import React from "react";
import styles from "./button.module.css";

const Button = ({ submit, text, clicked, style }) => {
  return (
    <button
      style={style}
      onClick={clicked}
      type={submit}
      className={styles.Button}
    >
      {text}
    </button>
  );
};

export default Button;
