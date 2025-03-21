// import { useTodo } from "../context/TodoContext";  // ✅ Don't need this anymore we separate the context
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Home() {
  return (
    <div>
      <h2>To-Do List</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Home;
