// src/pages/enterprise/PerfilNueva.jsx

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './PerfilNueva.css';
import axios from 'axios';

export default function PerfilNueva() {
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(false);
  const [name, setName] = useState("");

  const _agregarPerfil = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/v1/profiles', {
        name: name
      });

      setMessage(response.data.message);
      setStatusMessage(response.data.success);

      if (response.data.success) {
        setName("");
      }

    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message || "Error al registrar el perfil"
      );
      setStatusMessage(false);
    }
  };

  return (
    <>
      <h1>Perfil Nuevo</h1>

      {message !== "" && (
        <div
          className={`alert ${statusMessage ? 'alert-success' : 'alert-danger'}`}
          role="alert"
          id="alertMessage"
        >
          {message}
        </div>
      )}

      <NavLink to="/enterprise/profiles" className="btn btn-secondary mb-3">
        Retroceder
      </NavLink>

      <form onSubmit={_agregarPerfil}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre del perfil
          </label>

          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Ingrese el nombre del perfil"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={30}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar Perfil
        </button>

      </form>
    </>
  );
}
