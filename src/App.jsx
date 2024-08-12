import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://notes-back-end-78zv.onrender.com/API/notes");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.log("Whoops", error);
      }
    };

    fetchTodos();
  }, []);

  const editTodo = async (updatedTodo) => {
    try {
      const response = await axios.put(
        `https://notes-back-end-78zv.onrender.com/API/notes/${updatedTodo.id}`,
        {
          title: updatedTodo.title,
          description: updatedTodo.description,
        }
      );
      if (response.status === 200) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          )
        );
      }
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };

  return (
    <div className="min-h-screen bg-custom-outer-container p-8 border-l-4 border-r-4 border-gray-300">
      <h1>To-Do Liste</h1>
      <TodoList todos={todos} onEdit={editTodo} />
    </div>
  );
}

export default App;