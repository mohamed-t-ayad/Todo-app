import { useTodo } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

function Completed() {
  const { todos, toggleCompleted, deleteTodo } = useTodo();
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h2 className="mb-3">Completed Tasks</h2>
      {completedTodos.length > 0 ? (
        <ul className="list-group">
          {completedTodos.map ((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
              />
          ))}
        </ul>
      ) : (
        <p>No completed tasks yet!</p>
      )}

    </div>
  );
}
export default Completed;