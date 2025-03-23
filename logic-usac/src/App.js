// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CrearPublicacion from './components/CrearPublicacion';
import MiPerfil from './components/MiPerfil';
import Login from './components/Login'; // si lo usas
import Register from './components/Register'; // si lo usas

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CrearPublicacion" element={<CrearPublicacion />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
      </Routes>
    </Router>
  );
}

export default App;
