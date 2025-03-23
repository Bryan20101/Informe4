import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importamos los componentes
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import CrearPublicacion from './components/CrearPublicacion';
import MiPerfil from './components/MiPerfil';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          {/* Login por defecto en la raíz */}
          <Route path="/" element={<Login />} />

          {/* Registro */}
          <Route path="/register" element={<Register />} />

          {/* Home (publicaciones) */}
          <Route path="/Home" element={<Home />} />

          {/* Crear Publicación */}
          <Route path="/CrearPublicacion" element={<CrearPublicacion />} />

          {/* Mi Perfil */}
          <Route path="/MiPerfil" element={<MiPerfil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
