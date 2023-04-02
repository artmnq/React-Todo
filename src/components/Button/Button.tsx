import React from "react";
import styles from "./style.module.css";

interface Props {
  type: "submit" | "reset" | "button";
}

function Button({ type }: Props) {
  return (
    <button className={styles.save} type={type} aria-label="save name">
      Save
    </button>
  );
}

export default Button;
