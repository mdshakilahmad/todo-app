import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const newTodos = [...todos];
      newTodos[editIndex] = input;
      setTodos(newTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl mb-4">ToDo List</h1>
        <form onSubmit={addTodo} className="mb-4">
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded w-full py-2 px-3 mb-2"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
            {editIndex !== null ? "Update todo" : "Add todo"}
          </button>
        </form>
        <div>
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-200 p-4 rounded mb-2"
            >
              <span>{todo}</span>
              <div>
                <button
                  onClick={() => editTodo(index)}
                  className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
