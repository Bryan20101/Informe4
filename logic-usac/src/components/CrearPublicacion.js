// src/components/CrearPublicacion.js
import React from 'react';
import { Link } from 'react-router-dom'; // Para la navegación
import './CrearPublicacion.css';

function CrearPublicacion() {
  return (
    <div className="crear-pub-container">
      {/* Barra de pestañas superior */}
      <div className="tab-bar">
        <div className="tab inicio">
          <Link to="/Home" className="tab-link">INICIO</Link>
        </div>
        <div className="tab crear active-tab">
          <Link to="/CrearPublicacion" className="tab-link">CREAR PUBLICACION</Link>
        </div>
        <div className="tab perfil">
          <Link to="/MiPerfil" className="tab-link">MI PERFIL</Link>
        </div>
      </div>

      {/* Contenido principal */}
      <h1 className="crear-title">Crear Publicacion</h1>

      <div className="crear-content">
        {/* Sección izquierda */}
        <div className="crear-left">
          {/* Seleccionar Tipo */}
          <div className="tipo-section">
            <h3>SELECCIONAR TIPO</h3>
            <div className="tipo-options">
              <label>
                <input type="checkbox" />
                Curso
              </label>
              <label>
                <input type="checkbox" />
                Catedráticos
              </label>
            </div>
          </div>

          {/* DropDown */}
          <div className="dropdown-section">
            <h4>DropDown</h4>
            <div className="dropdowns">
              <select className="dropdown">
                <option>Curso</option>
                <option>Curso 1</option>
                <option>Curso 2</option>
              </select>
              <select className="dropdown">
                <option>Catedráticos</option>
                <option>Catedrático 1</option>
                <option>Catedrático 2</option>
              </select>
            </div>
          </div>

          {/* Escribir Comentario */}
          <div className="comentario-section">
            <label>Escribir Comentario:</label>
            <textarea
              placeholder="Aca agregue su comentario"
              className="comentario-textarea"
            ></textarea>
          </div>

          {/* Botón Publicar */}
          <button className="publicar-btn">PUBLICAR</button>
        </div>

        {/* Sección derecha (imagen) */}
        <div className="crear-right">
          {/* Reemplaza el src con tu propia imagen si la tienes */}
          <img
            src="https://via.placeholder.com/200x200?text=Globe+Icon"
            alt="Globe Icon"
            className="icon-globe"
          />
        </div>
      </div>
    </div>
  );
}

export default CrearPublicacion;
