function ToDoItem({ todo }) {
  return (
    <div className="bg-custom-inner-container text-white border rounded-lg p-4 mb-6 relative">
      <h2 className="text-xl font-semibold">{todo.title}</h2>
      <p className="mt-2">{todo.description}</p>
      <div className="relative mt-4">
        {/* White line above the date */}
        <div className="absolute top-0 left-0 right-0 border-t border-white -mt-2"></div>
        <p className="pt-2">{todo.createdAt}</p>
      </div>
    </div>
  );
}

export default ToDoItem;
