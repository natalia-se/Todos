import React from "react";

const TodoItem = ({ todo, handleUpdateTodo }) => {
  const id = todo._id;

  const updateTodo = (e) => {
    e.preventDefault();
    console.log("todo", id);
    handleUpdateTodo(id);
  };
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={todo.isDone ? `done` : ""}>{todo.text}</h1>
        {/* className={checkTodo} */}
        <span>{todo.description}</span>
      </div>
      <div className="Card--button">
        <button onClick={updateTodo} className={"Card--button__done"}>
          {todo.isDone ? `Add` : "Complete"}
        </button>
        <button
          // onClick={() => deleteTodo(todo._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
