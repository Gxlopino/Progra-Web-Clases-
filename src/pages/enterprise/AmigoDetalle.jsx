import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './AmigoDetalle.css';
import axios from 'axios';

export default function AmigoDetalle() {
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(false);
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [name, setName] = useState("");
  const { id } = useParams();

  const _obtenerAmigo = async () => {
    if (id !== undefined) {
      try {
        const response = await axios.get('/api/v1/amigos/' + id);
        setName(response.data.data.name);
        setApellido(response.data.data.apellido);
        setCelular(response.data.data.celular);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    _obtenerAmigo();
  }, [id]);

  const _guardarAmigo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('/api/v1/amigos/' + id, {
        name: name,
        apellido: apellido,
        celular: celular
      });

      setMessage(response.data.message);
      setStatusMessage(response.data.success);

    } catch (error) {
      console.error(error);

      setMessage(
        error.response?.data?.message || "Error al actualizar el amigo"
      );
      setStatusMessage(false);
    }
  };

  return (
    <>
      <h1>Editar Amigo</h1>

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

      <form onSubmit={_guardarAmigo}>
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

          <label htmlFor="apellido" className="form-label mt-2">
            Apellido del Amigo
          </label>
          <input
            type="text"
            id="apellido"
            className="form-control"
            placeholder="Ingrese el apellido del Amigo"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            maxLength={30}
            required
          />

          <label htmlFor="celular" className="form-label mt-2">
            Celular del Amigo
          </label>
          <input
            type="text"
            id="celular"
            className="form-control"
            placeholder="Ingrese el celular del Amigo"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            maxLength={15}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar Amigo
        </button>
      </form>
    </>
  );
}
