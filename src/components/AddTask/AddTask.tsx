import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducer.ts";
import styles from "./style.module.css";

function AddTask() {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value);
  }

  function addTask() {
    if (todo === "") {
    } else {
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 1000) + 1,
          item: todo,
          completed: false,
        })
      );
      setTodo("");
    }
  }

  return (
    <div className={styles.form}>
      <input
        type="text"
        onChange={handleChange}
        className={styles.input}
        value={todo}
      />
      <button type="button" className={styles.add} onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
