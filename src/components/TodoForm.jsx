import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };
  return (
    <div className="input-group mt-3">
      <input
        type="text"
        className="form-control outline-none "
        placeholder="Add new Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn btn-primary btn-sm" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};
export default TodoForm;
