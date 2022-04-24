import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

const TodosPage = () => {
  const [todoText, setTodoText] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoList, setTodoList] = useState(null);
  const [searchList, setSearchList] = useState(null);
  const [isTodoCompleted, setIsTodoCompleted] = useState(false);
  const [search, setSearch] = useState(null);
  const token = localStorage.getItem("Token");

  // const [resStatus, setResStatus] = useState(null);
  // const navigate = useNavigate();

  function fetchTodos() {
    const url = `/api/todos/`;
    console.log("Search", search);
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          isTodoCompleted: isTodoCompleted,
          search: search,
        },
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

  function searchTodos(e) {
    e.preventDefault();
    const url = `/api/todos/`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          isTodoCompleted: isTodoCompleted,
          search: search,
        },
      })
      .then((res) => {
        setSearchList(res.data);
        // console.log("resStatus", res.status);
        // console.log("Search", res.data);
        // setResStatus(res.status);
        // if (res.status !== 400 && res.status !== 401) {
        //   navigate("/login");
        // }
      })
      .catch((err) => console.log(err));
  }

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
      })
      .catch((err) => console.log(err));

    fetchTodos();
    setTodoText("");
  };

  const handleUpdateTodo = async (id) => {
    const url = `/api/todos/${id}`;
    await axios
      .patch(url, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => console.log(err));

    await fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    const url = `/api/todos/${id}`;
    await axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => console.log(err));

    await fetchTodos();
  };

  useEffect((e) => {
    fetchTodos(e);
  }, []);

  const list = searchList ? searchList : todoList;

  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo
        saveTodo={handleSaveTodo}
        todoText={todoText}
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

      <div className="search-container">
        <form className="Form">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" onClick={searchTodos}>
            Search
          </button>
        </form>
      </div>

      {list &&
        list.map((todo, index) => (
          <TodoItem
            key={index}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))}
    </main>
  );
};

export default TodosPage;
