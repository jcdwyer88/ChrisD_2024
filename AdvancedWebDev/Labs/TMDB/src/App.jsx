import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Results from "./components/Results";
import ErrorPage from "./components/Error";
import Theme from "./components/Theme";
import Home from "./components/Home"; // Ensure you have this component
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
      <Theme>
        <Router>
          <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/results" element={<Results searchTerm={searchTerm} />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Theme>
  );
};

export default App;
