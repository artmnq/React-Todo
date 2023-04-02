import React from "react";
import styles from "./style.module.css";

interface InputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  type: string;
  title: string;
  isEmptyField?: boolean;
}

function Input(props: InputProps) {
  const { name, value, onChange, onBlur, type, title, isEmptyField } = props;

  return (
    <>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}
        type={type}
        name={name}
        placeholder={title}
      />
      {isEmptyField && (
        <div className={styles.fieldError}>Type your name, please!</div>
      )}
    </>
  );
}

export default Input;
