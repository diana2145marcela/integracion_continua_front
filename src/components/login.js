import React, { useState } from "react";
import clienteAxios from "../config/axios";
import { useHistory } from "react-router-dom";
import Home from "./home/home";

/* Import Css */
import "../index.css";
import "./form.css";

function Login() {
  const [state, setUser] = useState({
    correo_electronico: " ",
    password: " ",
  });

  const history = useHistory();

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const loginSesion = async (e) => {
    e.preventDefault();
    if (state.correo_electronico === " " || state.password === " ") {
      setError(true);
      return;
    }

    setError(false);
    try {
      const respuesta = await clienteAxios.post("/autenticar", state);
      const { auth_token } = respuesta.data;
      localStorage.setItem("token", auth_token);
      history.push("./dashboard/Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Home />
      <section className="container-form">
        <form id="form" onSubmit={loginSesion}>
          <div className="form">
            <h1>Inicio Sesion</h1>

            {error && (
              <p className="info-error">Debes de completar los campos</p>
            )}

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
            <button type="submit">Ingresar</button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default Login;
