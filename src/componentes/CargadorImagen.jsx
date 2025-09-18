import React, { useState } from "react";

export default function ImageUploader() {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validar que sea una imagen con File API
    if (!file.type.startsWith("image/")) {
      setError("El archivo seleccionado no es una imagen.");
      setPreview(null);
      return;
    }

    setError("");
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <h2>Subir Imagen</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {preview && (
        <div>
          <h3>Vista previa:</h3>
          <img
            src={preview}
            alt="preview"
            style={{ maxWidth: "300px", marginTop: "10px" }}
          />
        </div>
      )}
    </div>
  );
}
