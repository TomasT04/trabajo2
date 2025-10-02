import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contacto from "./contacto";
import Servicios from "./servicios";
import Home from "./home";







export default function App() {
  return (
    <Router>
      {/* Menú de navegación */}
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/servicios">Servicios</Link>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}
