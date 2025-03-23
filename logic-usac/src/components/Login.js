import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo-usac.png'; // Ajusta la ruta si fuera necesario

function Login() {
  const [showRecoverModal, setShowRecoverModal] = useState(false);
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowRecoverModal(true);
  };

  const handleRecover = () => {
    setShowRecoverModal(false);
    setShowNewPasswordModal(true);
  };

  const handleComplete = () => {
    setShowNewPasswordModal(false);
  };

  const handleCloseRecoverModal = () => {
    setShowRecoverModal(false);
  };

  const handleCloseNewPasswordModal = () => {
    setShowNewPasswordModal(false);
  };

  const handleRegister = () => {
    window.location.href = '/register';
  };

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = '/Home';
  };

  return (
    <div className="login-container">
      {/* Imagen que contiene el logo y texto de la Facultad en un solo archivo */}
      <img src={logo} alt="Facultad de Ingeniería USAC" className="logo-usac" />

      {/* Título principal */}
      <h2 className="title-login">INICIAR SESION INGENIERIA USAC</h2>

      {/* Formulario de Login */}
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          name="cui"
          placeholder="CUI / REGISTRO ACADÉMICO / REGISTRO PERSONAL"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />

        <div className="remember-me">
          <input type="checkbox" id="rememberUser" />
          <label htmlFor="rememberUser">Recordar mi Usuario</label>
        </div>

        <button type="submit" className="btn-login">
          INICIAR SESIÓN
        </button>
      </form>

      {/* Sección de enlaces inferiores */}
      <div className="extra-links">
        <a href="#olvido-contraseña" onClick={handleForgotPassword}>
          ¿Olvidó su contraseña?
        </a>
        {/* Elimina este botón si NO lo deseas en tu diseño final */}
        <button type="button" className="btn-register" onClick={handleRegister}>
          Registrarme
        </button>
      </div>

      {/* Modal de RECUPERAR CONTRASEÑA */}
      {showRecoverModal && (
        <div className="modal-overlay">
          <div className="modal-box">
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
