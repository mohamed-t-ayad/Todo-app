import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TodoProvider } from "./context/TodoContext.jsx";
// ✅ 1. Third-party CSS libraries first (Bootstrap, Tailwind, etc.)
import "bootstrap/dist/css/bootstrap.min.css"; 

// ✅ 2. Global CSS files next (custom project-wide styles)
import "./index.css";  
import "./styles/global.css";

// ✅ 3. Third-party JS files (if needed, like Bootstrap JS)
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

// ✅ 4. React App Component (after styles are loaded)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
