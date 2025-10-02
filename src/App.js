import React, { useState } from "react";
import ImageUploader from "./componentes/CargadorImagen";
import emailjs from "emailjs-com";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import simple from "./img/simple.jpeg";
import doble from "./img/doble.jpeg";
import suite from "./img/suite.jpeg";


/* Componente de Inicio */
function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home</h1>
      <h2>Cargador de Imagen </h2>
      <ImageUploader />
    </div>
  );
}


/* Componente de Contacto */
function Contacto() {
  const [name, setNombre] = useState("");
  const [email, setCorreo] = useState("");
  const [message, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fhv91a6", 
        "template_x0h698h",  
        { name, email, message },
        "2ClqmuT9yTWubYfNJ"      
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
      <h1>Contacto</h1>
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d72854.30986933006!2d67.64965278030874!3d47.82849743212203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sar!4v1759435930207!5m2!1ses!2sar" 
      width="600" 
      height="450" 
      style={{border:0}}
      allowfullscreen
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}


const habitaciones = [
  {
    id: 1,
    nombre: "Habitación Simple",
    precio: 5000,
    descripcion: "Para una persona, con todas las comodidades.",
    imagen: simple
  },
  {
    id: 2,
    nombre: "Habitación Doble",
    precio: 8000,
    descripcion: "Para dos personas, ideal para parejas.",
    imagen: doble 
  },
  {
    id: 3,
    nombre: "Suite",
    precio: 15000,
    descripcion: "Amplia y lujosa, con sala de estar.",
    imagen: suite
    }
];

/* Componente de Servicios */
function Servicios() {
    return (
    <div style={{ padding: "20px" }}>
        <h1>Servicios</h1>
        <h2>Nuestras Habitaciones</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {habitaciones.map((hab) => (
            <div
            key={hab.id}
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                width: "220px"
            }}
            >
            <img src={hab.imagen} alt={hab.nombre} style={{ width: "100%", borderRadius: "8px" }}/>
            <h3>{hab.nombre}</h3>
            <p>{hab.descripcion}</p>
            <strong>${hab.precio}</strong>
            </div>
        ))}
        </div>
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
