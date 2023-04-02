import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import TodoPage from "./pages/TodoPage/TodoPage.tsx";

const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/React-Todo/" element={<LoginPage />} />
        <Route path="/React-Todo/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
};

export default App;
