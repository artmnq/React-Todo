import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";

type StateType = {
  name: string;
  isEmptyField: boolean;
};

const state: StateType = {
  name: "",
  isEmptyField: false,
};

function LoginPage() {
  const [name, setName] = useState(state.name);
  const [isEmptyField, setIsEmptyField] = useState(state.isEmptyField);
  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    setIsEmptyField(false);
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value.trim());
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.length === 0) {
      setIsEmptyField(true);

      return;
    }

    navigate("/React-Todo/todo", { state: { name } });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>ENTER YOUR NAME</h1>
      <Input
        name="name"
        title="Your name"
        type="text"
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
        isEmptyField={isEmptyField}
      />
      <Button type="submit" />
    </form>
  );
}

export default LoginPage;
