import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";
import clienteAxios from "../config/axiosClient";

export const UserContext = createContext();

export default function Register() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (console.log(data)))

    /* Limpiar el formulario después de enviar la data */
    setFormData({
      name: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    })
  };
  const handleSubmitChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div>
      <div className="containerPrincipal">
        <h1>Crear Cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="containerSecundario">
            <div className="form-group">
              <label>Nombre: </label>
              <br />
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  handleSubmitChange("name", event.target.value)
                }
              />
              <label>Apellido: </label>
              <br />
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  handleSubmitChange("lastname", event.target.value)
                }
              />
              <br />
              <label>Nombre de usuario: </label>
              <br />
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  handleSubmitChange("username", event.target.value)
                }
              />
              <br />
              <label>email: </label>
              <br />
              <input
                type="email"
                className="form-control"
                onChange={(event) =>
                  handleSubmitChange("email", event.target.value)
                }
              />
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
                Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
