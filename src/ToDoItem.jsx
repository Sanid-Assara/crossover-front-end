import React from "react";

function ToDoItem({ todo, onEdit }) {
  return (
    <div className="bg-custom-inner-container text-white border rounded-lg p-4 mb-6 relative">
      <h2 className="text-xl font-semibold">{todo.title}</h2>
      <p className="mt-2">{todo.description}</p>
      <div className="relative mt-4">
        {/* White line above the date */}
        <div className="absolute top-0 left-0 right-0 border-t border-white -mt-2"></div>
        <p className="pt-2">{todo.createdAt}</p>
      </div>
      {/* Edit button */}
      <button
        className="absolute top-4 right-4 bg-custom-inner-container text-white px-3 py-1 rounded"
        onClick={() => handleEdit(todo)}
      >
        Edit
      </button>
    </div>
  );
}

export default ToDoItem;
