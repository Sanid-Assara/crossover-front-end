import React from 'react'

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>{todo.date}</p>
        </li>
      ))}
    </ul>
  )
}

export default TodoList