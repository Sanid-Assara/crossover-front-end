import React from "react";
import ToDoItem from "./ToDoItem";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem key={index} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
