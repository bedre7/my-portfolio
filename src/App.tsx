import React from "react";
import "./App.css";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import WindowWrapper from "./components/Layout/WindowWrapper";

function App() {
  return (
    <div className="relative min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<WindowWrapper />} />
      </Routes>
      <BottomBar />
    </div>
  );
}

export default App;