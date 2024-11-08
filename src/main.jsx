import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Wrap BrowserRouter with basename to set the base URL
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/testing">
    {/* Set the base path for routing */}
    <App />
  </BrowserRouter>
);
