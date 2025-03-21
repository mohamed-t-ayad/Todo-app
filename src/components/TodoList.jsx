import TodoItem from "./TodoItem";
import { useTodo } from "../context/TodoContext";

function TodoList() {
  const { todos, toggleCompleted, deleteTodo } = useTodo();
  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          className="list-group-item d-flex justify-content-between align-items-center"
        />
      ))}
    </ul>
  );
}
export default TodoList;
