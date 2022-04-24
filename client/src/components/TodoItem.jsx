import React from "react";

const TodoItem = ({ todo }) => {
  console.log("todo", todo);
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>{todo.text}</h1>
        {/* className={checkTodo} */}
        <span>{todo.description}</span>
      </div>
      <div className="Card--button">
        <button
          // onClick={() => updateTodo(todo)}
          className={todo.isDone ? `hide-button` : "Card--button__done"}
        >
          Complete
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
