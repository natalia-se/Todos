import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

const TodosPage = () => {
  const [todoText, setTodoText] = useState(null);
  const [todoDescription, setTodoDescription] = useState(null);
  const [todoList, setTodoList] = useState(null);
  const [isTodoCompleted, setIsTodoCompleted] = useState(false);
  const token = localStorage.getItem("Token");

  // const [resStatus, setResStatus] = useState(null);
  // const navigate = useNavigate();

  const handleSaveTodo = (e) => {
    e.preventDefault();
    const url = "/api/todos/create";
    axios
      .post(
        url,
        {
          text: todoText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.status);
        // setResStatus(res.status);
        // if (res.status !== 400 && res.status !== 401) {
        //   navigate("/login");
        // }
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (id) => {
    const url = `/api/todos/${id}`;
    axios
      .patch(url, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.status);
        // setResStatus(res.status);
        // if (res.status !== 400 && res.status !== 401) {
        //   navigate("/login");
        // }
      })
      .catch((err) => console.log(err));
  };

  function fetchTodos() {
    const url = `/api/todos/`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { isTodoCompleted: isTodoCompleted },
      })
      .then((res) => {
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
  }, [isTodoCompleted]);

  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo
        saveTodo={handleSaveTodo}
        setTodoText={setTodoText}
        setTodoDescription={setTodoDescription}
      />
      <label className="container">
        Active todos
        <input
          type="radio"
          checked="checked"
          name="radio"
          onChange={(e) => setIsTodoCompleted(false)}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Completed todos
        <input
          type="radio"
          name="radio"
          onChange={(e) => setIsTodoCompleted(true)}
        />
        <span className="checkmark"></span>
      </label>

      {todoList &&
        todoList.map((todo, index) => (
          <TodoItem
            key={index}
            handleUpdateTodo={handleUpdateTodo}
            // deleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))}
    </main>
  );
};

export default TodosPage;
