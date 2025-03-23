// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo-usac.png'; // Ajusta la ruta de tu logotipo

function Login() {
  // Control de los modales
  const [showRecoverModal, setShowRecoverModal] = useState(false);
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);

  // Abrir la ventana de "Recuperar Contraseña"
  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowRecoverModal(true);
  };

  // Al hacer clic en "Recuperar", cierra la de recuperar y abre la de nueva contraseña
  const handleRecover = () => {
    setShowRecoverModal(false);
    setShowNewPasswordModal(true);
  };

  // Al hacer clic en "Completar", cierra la ventana de nueva contraseña
  const handleComplete = () => {
    setShowNewPasswordModal(false);
  };

  // Cerrar la ventana de "Recuperar Contraseña" sin continuar
  const handleCloseRecoverModal = () => {
    setShowRecoverModal(false);
  };

  // Cerrar la ventana de "Nueva Contraseña" sin continuar
  const handleCloseNewPasswordModal = () => {
    setShowNewPasswordModal(false);
  };

  // Redirigir a la pantalla de registro
  const handleRegister = () => {
    window.location.href = '/register';
  };

  // Redirigir a la pantalla de Home al iniciar sesión
  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = '/Home';
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Encabezado con el logotipo */}
        <div className="logo-header">
          <img src={logo} alt="Facultad de Ingeniería USAC" />
        </div>

        <h2>INICIAR SESIÓN INGENIERÍA USAC</h2>

        {/* Formulario de Login */}
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="cui">CUI / REGISTRO ACADÉMICO / REGISTRO PERSONAL</label>
          <input
            type="text"
            id="cui"
            name="cui"
            placeholder="Ingrese su CUI o registro"
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
          />

          {/* Recordar usuario */}
          <div className="remember-me">
            <input type="checkbox" id="rememberUser" name="rememberUser" />
            <label htmlFor="rememberUser">Recordar mi Usuario</label>
          </div>

          {/* Botón de inicio de sesión */}
          <button type="submit">INICIAR SESIÓN</button>
        </form>

        {/* Link de "¿Olvidó su contraseña?" y el botón de "Registrarme" */}
        <div className="extra-links">
          <a href="#olvido-contraseña" onClick={handleForgotPassword}>
            ¿Olvidó su contraseña?
          </a>
          <button type="button" className="btn-register" onClick={handleRegister}>
            Registrarme
          </button>
        </div>
      </div>

      {/* Modal de RECUPERAR CONTRASEÑA */}
      {showRecoverModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            {/* Botón para cerrar la ventana */}
            <button className="close-btn" onClick={handleCloseRecoverModal}>
              &times;
            </button>

            <h2>Recuperar Contraseña</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Ingrese su registro académico</label>
                <input type="text" placeholder="CUI / CARNET" />
              </div>

              <div className="form-group">
                <label>Ingrese su correo electrónico</label>
                <input type="email" placeholder="Ingrese su correo" />
              </div>

              <button type="button" className="btn-modal" onClick={handleRecover}>
                Recuperar
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal de NUEVA CONTRASEÑA */}
      {showNewPasswordModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            {/* Botón para cerrar la ventana */}
            <button className="close-btn" onClick={handleCloseNewPasswordModal}>
              &times;
            </button>

            <h2>Nueva contraseña</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Registrar nueva contraseña</label>
                <input type="password" placeholder="Contraseña" />
              </div>

              <div className="form-group">
                <label>Ingresa de nuevo</label>
                <input type="password" placeholder="Contraseña" />
              </div>

              <button type="button" className="btn-modal" onClick={handleComplete}>
                Completar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
