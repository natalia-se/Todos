import React from "react";

const AddTodo = ({ saveTodo, setTodoText, setTodoDescription }) => {
  return (
    <form
      className="Form"
      // onSubmit={(e) => saveTodo(e, formData)}
    >
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setTodoText(e.target.value)}
            type="text"
            id="name"
          />
        </div>
        {/* <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={(e) => setTodoDescription(e.target.value)}
            type="text"
            id="description"
          />
        </div> */}
      </div>
      <button onClick={saveTodo}>Add Todo</button>
    </form>
  );
};

export default AddTodo;
