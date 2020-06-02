import React, { useState } from "react";
import clienteAxios from "../config/axios";
import Home from "./home/home";

/* Import Estilos*/
import "../index.css";
import "./form.css";

function Form() {
  const [usuario, setUsuario] = useState({
    nombre: " ",
    correo_electronico: " ",
    password: " ",
    password_confirmation: " ",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    console.log(process.env.REACT_APP_URL);
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const submitInfo = async (e) => {
    e.preventDefault();
    if (
      usuario.nombre === " " ||
      usuario.correo_electronico === " " ||
      usuario.password === " " ||
      usuario.password_confirmation === " "
    ) {
      setError(true);
      return;
    }

    setError(false);
    try {
      await clienteAxios.post("/usuarios", { usuario });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Home />
      <section className="container-form">
        <form id="form" onSubmit={submitInfo}>
          <div className="form">
            <h1>Registro Usuario</h1>

            {error && (
              <p className="info-error">Debes de completar todos los campos</p>
            )}

            <div className="form-input">
              <input type="text" name="nombre" onChange={handleChange} />
              <span className="barra-form"></span>
              <label>Nombre Completo</label>
            </div>
            <div className="form-input">
              <input
                type="email"
                name="correo_electronico"
                onChange={handleChange}
              />
              <span className="barra-form"></span>
              <label>Correo Electronico</label>
            </div>
            <div className="form-input">
              <input type="password" name="password" onChange={handleChange} />
              <span className="barra-form"></span>
              <label>Contraseña</label>
            </div>
            <div className="form-input">
              <input
                type="password"
                name="password_confirmation"
                onChange={handleChange}
              />
              <span className="barra-form"></span>
              <label>Confirmación de Contraseña</label>
            </div>
            <button type="submit">Registrarse</button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default Form;
