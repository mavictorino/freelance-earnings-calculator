import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import EarningsList from "./pages/EarningsList";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/earnings" element={<EarningsList />} />
      </Routes>
    </Router>
  );
}

export default App;