import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //Fetch todos from API

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/API/notes");
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

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="min-h-screen bg-custom-outer-container p-8 border-l-4 border-r-4 border-gray-300">
      <h1>To-Do Liste</h1>
      <TodoList todos={todos} />
      <button onClick={() => setIsPopupOpen(true)} className="text-white ">
        Add new task
      </button>
      {isPopupOpen && (
        <AddTodoPopup
          addTodo={addTodo}
          closePopup={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
