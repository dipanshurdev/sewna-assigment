import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import DiscoverPage from "./components/routes_component/Discover.jsx";
import CreateAccount from "./components/routes_component/CreateAccount.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/welcome" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
