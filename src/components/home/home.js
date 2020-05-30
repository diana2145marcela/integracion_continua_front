import React from 'react';
import { 
    Link, 
  } 
  from "react-router-dom";
import '../../index.css';
import './home.css';

function Home () {
    return(
        <header>
            <p><Link className="logo" to="/">Contabilidad Personal</Link></p>
            <nav>
                <ul className="nav-bar">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                   <li>
                        <Link  to="/registro">Registrarse</Link>
                    </li>
                    <li>
                        <Link to="/login">Iniciar Sesión</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Home;