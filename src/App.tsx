import React, { useState } from "react";
import "./App.css";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import WindowWrapper from "./components/Layout/WindowWrapper";
import SignIn from "./pages/SignIn";

function App() {
  const [hasSignedIn, setHasSignedIn] = useState(false);

  if (!hasSignedIn) return <SignIn onSignIn={() => setHasSignedIn(true)} />;

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
