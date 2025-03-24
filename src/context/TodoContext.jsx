import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // retive saved todos from local storage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // update local storage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  // ✅ Store isAlertEnabled in state
  const [isAlertsEnabled, setIsAlertsEnabled] = useState(() => {
    return JSON.parse(localStorage.getItem("isAlertEnabled")) ?? true;
  });
  // ✅ Sync alerts setting with localStorage
  useEffect(() => {
    localStorage.setItem("isAlertEnabled", JSON.stringify(isAlertsEnabled));
  }, [isAlertsEnabled]);
  // handel alerts
  const showAlert = (message, type) => {
    // const isAlertEnabled = JSON.parse(localStorage.getItem("isAlertEnabled")) ?? true;
    if (!isAlertsEnabled) return;

    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else if (type === "info") {
      toast.info(message);
    }
  };

  // Add To do item
  const addTodo = (text) => {
    // setTodos ([...todos , {id: Date.now() , text , completed: false}])
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
    showAlert("✅ Task Added Successfully", "success");
  };
  // Toggle Completed
  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    showAlert("✔️ Task Updated Successfully", "info");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    showAlert("🗑️ Task Deleted Successfully", "error");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleCompleted,
        deleteTodo,
        isAlertsEnabled,
        setIsAlertsEnabled,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the context
export const useTodo = () => {
  return useContext(TodoContext);
};
