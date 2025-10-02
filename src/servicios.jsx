import simple from "./img/simple.jpeg";
import doble from "./img/doble.jpeg";
import suite from "./img/suite.jpeg";

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
export default Servicios;