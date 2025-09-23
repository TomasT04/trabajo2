import React, { useState } from "react";
import ImageUploader from "./componentes/CargadorImagen";
import emailjs from "emailjs-com";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home</h1>
      <h2>Cargador de Imagen </h2>
      <ImageUploader />
    </div>
  );
}

function Contacto() {
  const [name, setNombre] = useState("");
  const [email, setCorreo] = useState("");
  const [message, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fhv91a6",   // 👈 ID de tu servicio en EmailJS
        "template_x0h698h",  // 👈 ID de tu template en EmailJS
        { name, email, message },
        "2ClqmuT9yTWubYfNJ"       // 👈 tu user ID de EmailJS
      )
      .then(() => {
        alert("✅ Mensaje enviado con éxito");
        setNombre("");
        setCorreo("");
        setMensaje("");
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Error al enviar el mensaje");
      });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>📞 Contacto</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Nombre </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <br />
        <label>Correo</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <br />
        <label>Mensaje</label>
        <textarea
          value={message}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      {/* Menú de navegación */}
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}
