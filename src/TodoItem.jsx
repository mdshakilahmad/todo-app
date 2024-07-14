import React from "react";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-2"
        />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
