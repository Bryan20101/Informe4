// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Barra de pestañas superior */}
      <div className="tab-bar">
        <div className="tab inicio">
          <Link to="/Home" className="tab-link">INICIO</Link>
        </div>
        <div className="tab crear">
          <Link to="/CrearPublicacion" className="tab-link">CREAR PUBLICACION</Link>
        </div>
        <div className="tab perfil">
          <Link to="/MiPerfil" className="tab-link">MI PERFIL</Link>
        </div>
      </div>

      {/* Título principal */}
      <h1 className="main-title">Inicio-Publicaciones</h1>

      {/* Sección de filtros */}
      <div className="filters-section">
        <span className="filters-label">FILTROS</span>

        {/* Select para "Cursos" */}
        <select className="filter-select">
          <option value="">Cursos</option>
          <option value="curso1">Curso 1</option>
          <option value="curso2">Curso 2</option>
        </select>

        {/* Select para "Catedráticos" */}
        <select className="filter-select">
          <option value="">Catedráticos</option>
          <option value="prof1">Prof. 1</option>
          <option value="prof2">Prof. 2</option>
        </select>

        {/* Barra de búsqueda */}
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar..."
          />
        </div>
      </div>

      {/* Publicación 1 */}
      <div className="publication-card">
        <div className="publication-title">Publicación 1</div>
        <div className="publication-info">
          (Usuario : curso/catedrático : Fecha)
        </div>
        <p className="publication-text">
          Recomendado 100%, paciente, interesante, etc
        </p>
        <textarea
          className="comment-input"
          placeholder="Comentar..."
        ></textarea>
      </div>

      {/* Publicación 2 */}
      <div className="publication-card">
        <div className="publication-title">Publicación 2</div>
        <div className="publication-info">
          (Bryan : Progra/Walter : 22/03/2025)
        </div>
        <p className="publication-text">
          Recomendado 100%, paciente, interesante, etc. A mí no me gustó tanto, 70 de 100 muy estricto.
        </p>
        <textarea
          className="comment-input"
          placeholder="Comentar..."
        ></textarea>
      </div>
    </div>
  );
}

export default Home;
