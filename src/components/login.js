import React, { useState } from "react";
import '../index.css'
import './form.css';

function Login (){

    const [state, setUser] = useState ({
        correo_electronico: ' ',
        password: ' '
    })

    const [error, setError] = useState (false)

    const handleChange = e => {
        setUser ({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const loginSesion = e => {
        e.preventDefault()
        if( state.correo_electronico === ' ' || 
            state.password === ' ') {
            setError(true)
            return
        }

    setError(false)
    }

    return(
        <section className="container-form">
            <form action="#" method="POST" id="form" onSubmit={loginSesion}>
                <div className="form">
                    <h1>Inicio Sesion</h1>

                    {error && <p className="info-error">Debes de completar los campos</p>}

                    <div className="form-input">
                        <input type="email" name="correo_electronico" onChange={handleChange} />
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
        
    );
}

export default Login;