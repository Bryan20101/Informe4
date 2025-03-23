import React from 'react';
import { Link } from 'react-router-dom';
import './MiPerfil.css';

function MiPerfil() {
  return (
    <div className="perfil-container">
      {/* Barra de pestañas superior */}
      <div className="tab-bar">
        <div className="tab inicio">
          <Link to="/Home" className="tab-link">
            INICIO
          </Link>
        </div>
        <div className="tab crear">
          <Link to="/CrearPublicacion" className="tab-link">
            CREAR PUBLICACION
          </Link>
        </div>
        <div className="tab perfil active-tab">
          <Link to="/MiPerfil" className="tab-link">
            MI PERFIL
          </Link>
        </div>
      </div>

      {/* Contenedor principal (dos secciones: izquierda "Mi Perfil" y derecha "Ver Perfil") */}
      <div className="perfil-content">
        {/* Sección Izquierda: Mi Perfil */}
        <div className="perfil-left">
          <h1>Mi Perfil</h1>
          <h2>INFORMACIÓN PERSONAL</h2>
          <p>
            Registro académico: <span className="info-link">Mostrar información</span>
          </p>
          <p>
            Nombre: <span className="info-link">Mostrar información</span>
          </p>
          <p>
            Apellidos: <span className="info-link">Mostrar información</span>
          </p>
          <p>
            Contraseña: <span className="info-link">Mostrar información</span>
          </p>
          <p>
            Correo electrónico: <span className="info-link">Mostrar información</span>
          </p>
          <button className="editar-btn">EDITAR</button>

          <h3>
            CURSOS APROBADOS <span className="creditos">(CREDITOS) (CR)</span>
          </h3>
          <ul>
            <li>Introducción a la Programación 1 (5 CR)</li>
            <li>Lógica de Sistemas (3 CR)</li>
          </ul>
        </div>

        {/* Sección Derecha: Ver Perfil */}
        <div className="perfil-right">
          <h1>Ver Perfil</h1>
          <p>Ingrese Registro Académico:</p>
          <input type="text" className="input-registro" />

          <p>
            Registro académico: <span className="info-link">Mostrar información</span>
          </p>
          <p>
            Nombre: <span className="info-link">Mostrar información</span>
          </p>
          <p>
            Apellidos: <span className="info-link">Mostrar información</span>
          </p>

          <h3>
            CURSOS APROBADOS <span className="creditos">(CREDITOS) (CR)</span>
          </h3>
          <ul>
            <li>Introducción a la Programación 1 (5 CR)</li>
            <li>Lógica de Sistemas (3 CR)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MiPerfil;
