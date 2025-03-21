import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  const [todos, setTodos] = useState( () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

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