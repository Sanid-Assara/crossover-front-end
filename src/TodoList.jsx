
import { useState } from "react";
import AddTodoPopup from "./AddTodoPopup";

function TodoList({ todos }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (

    <div>
      <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
        Add New Task
      </button>
      <AddTodoPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateTask}
      />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.date}</p>
          </li>
        ))}
      </ul>
    </div>

   
  );
}

export default TodoList;
