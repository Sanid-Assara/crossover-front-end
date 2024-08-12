import React, { useState } from 'react'
import TodoList from './TodoList'
import AddTodoPopup from './AddTodoPopup'

function App() {
  const [todos, setTodos] = useState([])
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <div>
      <h1>To-Do Liste</h1>
      <TodoList todos={todos} />
      <button onClick={() => setIsPopupOpen(true)}>Add entry</button>
      {isPopupOpen && <AddTodoPopup addTodo={addTodo} closePopup={() => setIsPopupOpen(false)} />}
    </div>
  )
}

export default App
