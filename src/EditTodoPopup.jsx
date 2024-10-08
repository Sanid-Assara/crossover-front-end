import React, { useState, useEffect } from 'react'

const EditTodoPopup = ({ isOpen, onClose, onEdit, todo }) => {
  const [taskTitle, setTaskTitle] = useState(todo.title)
  const [description, setDescription] = useState(todo.description)
  const [importance, setImportance] = useState(todo.importance)
  const [date, setDate] = useState(todo.date)
  const [time, setTime] = useState(todo.time)
  const [category, setCategory] = useState(todo.category)

  const handleEdit = async () => {
    const updatedTodo = {
      ...todo,
      title: taskTitle,
      description,
      importance,
      date,
      time,
      category,
    }
    onEdit(updatedTodo)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-blue-950 text-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-center text-xl font-semibold mb-4">Edit Task</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium">Task title</label>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Edit Task Name..."
            className="mt-1 p-2 w-full rounded-md bg-white border text-black focus:outline-none focus:ring focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Edit description..."
            className="mt-1 p-2 w-full rounded-md bg-white text-black focus:outline-none focus:ring focus:ring-blue-600"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            id="importance"
            type="checkbox"
            checked={importance}
            onChange={(e) => setImportance(e.target.checked)}
            className="h-4 w-4 text-blue-600 bg-white border border-blue-700 rounded focus:ring-blue-500"
          />
          <label htmlFor="importance" className="ml-2 text-sm font-medium">
            Importance
          </label>
        </div>

        <div className="mb-4 flex space-x-2">
          <div className="flex-1">
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 w-full rounded-md bg-white text-black text-base font-normal font-['Lexend'] focus:outline-none focus:ring focus:ring-blue-600"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 p-2 w-full rounded-md bg-white text-black text-base font-normal font-['Lexend'] focus:outline-none focus:ring focus:ring-blue-600"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium">Category</label>
          <div className="mt-1 flex space-x-2">
            <button
              className={`flex-1 p-2 rounded-md border ${
                category === 'Personal'
                  ? 'text-center text-blue-600 text-base font-normal font-["Lexend"]'
                  : 'bg-white text-neutral-400 font-normal font-["Lexend"]'
              } text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-600`}
              onClick={() => setCategory('Personal')}
            >
              Personal
            </button>
            <button
              className={`flex-1 p-2 rounded-md border ${
                category === 'Group'
                  ? 'text-center text-blue-600 text-base font-normal font-["Lexend"]'
                  : 'bg-white text-neutral-400 font-normal font-["Lexend"]'
              } text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-600`}
              onClick={() => setCategory('Group')}
            >
              Group
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400"
            onClick={handleEdit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditTodoPopup