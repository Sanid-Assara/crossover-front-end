import { useState } from "react";
import AddTodoPopup from "./AddTodoPopup";
import EditTodoPopup from "./EditTodoPopup";

function TodoList({ todos, onEdit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleCreateTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (updatedTodo) => {
    onEdit(updatedTodo);
    setIsEditModalOpen(false);
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
      {currentTodo && (
        <EditTodoPopup
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onEdit={handleEditTask}
          todo={currentTodo}
        />
      )}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.date}</p>
            <button
              onClick={() => {
                setCurrentTodo(todo);
                setIsEditModalOpen(true);
              }}
              className="btn btn-secondary"
            >
              Edit todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;