// import TodoItem from "./TodoItem";
import { useTodo } from "../context/TodoContext";
import { useState } from "react";

function TodoList() {
  const { todos, toggleCompleted, deleteTodo } = useTodo();
  const [filter, setFilter] = useState("all");

  // filter Todos
  const filterTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });
  return (
    <div>
      {/* filter buttons   */}
      <div className="filter-buttons d-flex gap-2 my-3">
        <button
          className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-primary text-dark"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`btn ${filter === "active" ? "btn-primary" : "btn-outline-primary text-dark"}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`btn ${filter === "completed" ? "btn-primary" : "btn-outline-primary text-dark"}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      
      {/* Todo items  */}
      <ul className="list-group mt-3">
        {filterTodos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
                className="me-2"
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button className="btn btn-danger btn-sm text-white" onClick={() => deleteTodo(todo.id)}>
              <i className="fas fa-trash fa-fx"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>

    // this is before usign the filterdTodos
    // <ul className="list-group mt-3">
    //   {todos.map((todo) => (
    //     <TodoItem
    //       key={todo.id}
    //       todo={todo}
    //       toggleCompleted={toggleCompleted}
    //       deleteTodo={deleteTodo}
    //       className="list-group-item d-flex justify-content-between align-items-center"
    //     />
    //   ))}
    // </ul>
  );
}
export default TodoList;
