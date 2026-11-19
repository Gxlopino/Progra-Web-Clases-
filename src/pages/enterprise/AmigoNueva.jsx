// src/pages/enterprise/amigoNueva.jsx

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AmigoNueva.css';
import axios from 'axios';

export default function AmigoNueva() {
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(false);
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");

  const _agregaramigo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/v1/amigos', {
        name: name,
        apellido: apellido,
        celular: celular
      });

      setMessage(response.data.message);
      setStatusMessage(response.data.success);

      if (response.data.success) {
        setName("")
        setApellido("")
        setCelular("");
      }

    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message || "Error al registrar al amigo"
      );
      setStatusMessage(false);
    }
  };

  return (
    <>
      <h1>amigo Nuevo</h1>

      {message !== "" && (
        <div
          className={`alert ${statusMessage ? 'alert-success' : 'alert-danger'}`}
          role="alert"
          id="alertMessage"
        >
          {message}
        </div>
      )}

      <NavLink to="/enterprise/amigos" className="btn btn-secondary mb-3">
        Retroceder
      </NavLink>

      <form onSubmit={_agregaramigo}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre del Amigo
          </label>

          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Ingrese el nombre del Amigo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={30}
            required
          />
          <label htmlFor="name" className="form-label">
            Apellido del Amigo
          </label>

          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Ingrese el apellido del Amigo"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            maxLength={30}
            required
          />
          
          <label htmlFor="name" className="form-label">
            Celular del Amigo
          </label>

          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Ingrese el celular del Amigo"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            maxLength={30}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar amigo
        </button>

      </form>
    </>
  );
}
