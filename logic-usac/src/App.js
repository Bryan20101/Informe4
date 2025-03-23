// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que muestra el Login */}
        <Route path="/" element={<Login />} />

        {/* Ruta para la pantalla de Registro */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
