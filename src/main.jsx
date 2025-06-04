import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import App from "./App.jsx";
import { StoreProvider } from "easy-peasy";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <StoreProvider store={store}>
        <Router>
          <App />
        </Router>
      </StoreProvider>
    </HelmetProvider>
  </StrictMode>
);
