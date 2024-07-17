import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Create from "./pages/cruduser/Create";
import Read from "./pages/cruduser/Read";
import Update from "./pages/cruduser/Update";
import ErrorBoundary from "./ErrorBoundary";
// import Delete from "./pages/Delete"; // Halaman Delete ini opsional

function App() {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </Dashboard>
    </Router>
    // <ErrorBoundary>
    // <Dashboard>
    // <h1>Coba</h1>
    // </Dashboard>
    // </ErrorBoundary>
  );
}

export default App;
