import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Hello from "./pages/Hello.tsx";
import Projects from "./pages/Projects.tsx";
import Connect from "./pages/Connect.tsx";
import Work from "./pages/Work.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hello />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
