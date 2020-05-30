import React, { useState } from "react";

/* Import Estilos*/
import '../index.css'
import './form.css';

function Form() {

    const [state, setState] = useState ({
        nombre: ' ',
        correo_electronico: ' ',
        password: ' ',
        password_confirmation: ' '
    })

    const [error, setError] = useState (false)

    const handleChange = e => {
        setState ({
            ...state, 
            [e.target.name] : e.target.value
        })
    }

    const submitInfo = e => {
        e.preventDefault()
        if(state.nombre === ' ' || 
            state.correo_electronico === ' ' || 
            state.password === ' ' || 
            state.password_confirmation === ' '){
            setError(true)
            return
        }

        setError(false)
    }

    return (
        <section className="container-form">
            <form action="#" method="POST" id="form" onSubmit={submitInfo} >   
                <div className="form">
                    <h1>Registro Usuario</h1>

                    {error && <p className="info-error">Debes de completar todos los campos</p>}

                    <div className="form-input">
                        <input type="text" name="nombre" onChange={handleChange} />
                        <span className="barra-form"></span>
                        <label>Nombre Completo</label>
                    </div>
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
                    <div className="form-input">
                        <input type="password" name="password_confirmation" onChange={handleChange} />
                        <span className="barra-form"></span>
                        <label>Confirmación de Contraseña</label>
                    </div>
                    <button type="submit">Registrarse</button>
                </div>
            </form>
        </section>
    );
}

export default Form;