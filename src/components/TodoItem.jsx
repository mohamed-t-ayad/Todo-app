// todoITem to handel every item oprtations

function TodoItem({ todo, toggleCompleted, deleteTodo  }) {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? "bg-light text-muted" : ""}`}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleCompleted(todo.id)}
      >
        {todo.text}
      </span>
      {/* delete button  */}
      <button
        className="btn btn-danger btn-sm"
        onClick={(e) => {
            e.stopPropagation();
            deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
export default TodoItem;
