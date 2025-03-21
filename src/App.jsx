import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useTodo } from "./context/TodoContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Settings from "./pages/Settings";
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  // const { todos , setTodos } = useTodo();
  return (
    
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
