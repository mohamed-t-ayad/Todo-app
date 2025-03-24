import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useTodo } from "./context/TodoContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Settings from "./pages/Settings";
import { ToastContainer } from "react-toastify";


function App() {
  // const { todos , setTodos } = useTodo();
  return (
    
    <div>
      
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
