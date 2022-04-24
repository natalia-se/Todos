import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

const TodosPage = () => {
  const [todoList, setTodoList] = useState(null);
  // const [resStatus, setResStatus] = useState(null);
  // const navigate = useNavigate();

  const handleSaveTodo = () => {
    console.log("handleSaveTodo", handleSaveTodo);
  };

  function fetchTodos() {
    const url = "/api/todos/";
    const token = localStorage.getItem("Token");

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("res.data.total", res.data);
        setTodoList(res.data);
        // console.log("resStatus", res.status);
        // console.log("todoList", todoList);
        // setResStatus(res.status);
        // if (res.status !== 400 && res.status !== 401) {
        //   navigate("/login");
        // }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  console.log("todoList", todoList);

  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todoList &&
        todoList.map((todo, index) => (
          <TodoItem
            key={index}
            // updateTodo={handleUpdateTodo}
            // deleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))}
    </main>
  );
};

export default TodosPage;
