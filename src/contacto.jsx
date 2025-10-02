import React, { useState } from "react";
import emailjs from "emailjs-com";


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


export default Contacto;