import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Formulario() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData); 
  };
  const handleSubmitChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  return (
    <div className="containerPrincipal">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="containerSecundario">
          <div className="form-group">
            <label>email: </label>
            <br />
            <input
              type="email"
              className="form-control"
              onChange={(event) =>
                handleSubmitChange("email", event.target.value)
              }
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              onChange={(event) =>
                handleSubmitChange("password", event.target.value)
              }
              className="form-control"
            />
            <br />
            <button className="btn btn-primary" type="submit">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
