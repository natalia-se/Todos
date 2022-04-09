import React from "react";
import AddTodo from "../components/AddTodo";

const HomePage = () => {
  const handleSaveTodo = () => {
    console.log("handleSaveTodo", handleSaveTodo);
  };
  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {/* {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))} */}
    </main>
  );
};

export default HomePage;
