import { useLocation } from "react-router-dom";
import { useState } from "react";
import TodoList from "../../components/TodoList/TodoList.tsx";
import AddTask from "../../components/AddTask/AddTask.tsx";

import styles from "./TodoPage.module.css";

type LocationState = {
  name?: string;
};

function TodoPage() {
  const location = useLocation<LocationState>();
  const { name } = location.state || {};
  const [taskCount, setTaskCount] = useState(0);

  return (
    <div className={styles.main}>
      <header className={styles.name}>{`${name}: ${taskCount}`}</header>
      <div className={styles.add}>
        <AddTask />
        <TodoList setTaskCount={setTaskCount} />
      </div>
    </div>
  );
}

export default TodoPage;
