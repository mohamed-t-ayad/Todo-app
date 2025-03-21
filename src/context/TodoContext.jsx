import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  //const [filter, setFilter] = useState("all");

    // Add To do item
    const addTodo = (text) => {
        // setTodos ([...todos , {id: Date.now() , text , completed: false}])
        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text, completed
            : false }]);
    }
    // Toggle Completed
    const toggleCompleted = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map(todo => 
                todo.id === id ? { ...todo, completed : !todo.completed } : todo
            )
        )
    };

    // Delete Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleCompleted, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the context
export const useTodo = () => {
  return useContext(TodoContext);
};