import { createContext, useContext, useState, useEffect } from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // retive saved todos from local storage
  const [todos, setTodos] = useState( () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  // const [ filter , setFilter] = useState("all"); // add filter state

  // update local storage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

    // Add To do item
    const addTodo = (text) => {
        // setTodos ([...todos , {id: Date.now() , text , completed: false}])
        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text, completed
            : false }]);
        toast.success("Task Added Successfully");
    }
    // Toggle Completed
    const toggleCompleted = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map(todo => 
                todo.id === id ? { ...todo, completed : !todo.completed } : todo
            )
        );
        toast.info("Task Updated Successfully");
    };

    // Delete Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
        toast.error("Task Deleted Successfully");
    };

    // function retuen fillterd Todos
    // const filteredTodos = todos.filter(todo => {
    //   if (filter === "active") {
    //     return !todo.completed;
    //   } else if (filter === "completed") {
    //     return todo.completed;
    //   } else {
    //     return true;
    //   }
    // })

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleCompleted, deleteTodo  }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the context
export const useTodo = () => {
  return useContext(TodoContext);
};