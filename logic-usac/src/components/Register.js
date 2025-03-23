// src/components/Register.jsx
import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Registrar Usuario</h2>
        <form>
          <div className="form-group">
            <label>Registro académico</label>
            <input type="text" placeholder="CUI / CARNET" />
          </div>

          <div className="form-group">
            <label>Nombres</label>
            <input type="text" placeholder="Nombres" />
          </div>

          <div className="form-group">
            <label>Apellidos</label>
            <input type="text" placeholder="Apellidos" />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña" />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" placeholder="Correo electrónico" />
          </div>

          <button type="submit" className="btn-registrar">REGISTRAR</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
