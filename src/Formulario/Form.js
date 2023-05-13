import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from '../config/axiosClient'

export default function Formulario() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [token, setToken] = useState(undefined)

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    /* clienteAxios(formData) */
    /* Copiamos el fetch pero para hacer login */
    await fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token) & localStorage.setItem("token", token))

    if (token) {
      Navigate("/")
    } else {
      alert("Hubo un problema")
    }



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
              Iniciar sesiòn
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
