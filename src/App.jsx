import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import AddTodoPopup from "./AddTodoPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "./Navbar";

function App() {
  const [todos, setTodos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fetch todos from API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://notes-back-end-78zv.onrender.com/API/notes"
        );
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

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
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

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="min-h-screen bg-custom-outer-container flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8"></h1>
      <Navbar />
      <TodoList todos={todos} />
      <div className="flex flex-col items-center justify-center flex-grow">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-custom-inner-container text-white font-bold py-4 px-8 mb-4  rounded-lg shadow-xl hover:bg-custom-outer-container focus:outline-none focus:ring-4 focus:ring-custom-outer-container transition duration-300 flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-3 text-xl" />
          Add new Task
        </button>
      </div>
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
