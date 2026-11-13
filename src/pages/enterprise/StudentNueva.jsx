import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './StudentNueva.css';
import axios from 'axios';

const initialForm = {
  names: '',
  last_names: '',
  email: '',
  phone: '',
  district_id: '',
  picture_url: '',
  summary: '',
  carrere_id: '',
  sementer_id: '',
  user_id: ''
};

export default function StudentNueva() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const _agregarStudent = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      district_id: form.district_id ? Number(form.district_id) : null,
      carrere_id: form.carrere_id ? Number(form.carrere_id) : null,
      sementer_id: form.semeter_id ? Number(form.semeter_id) : null,
      user_id: form.user_id ? Number(form.user_id) : null,
      phone: form.phone || null,
      picture_url: form.picture_url || null,
      summary: form.summary || null
    };

    try {
      const response = await axios.post('/api/v1/students', payload);
      setMessage(response.data?.message || '');
      setStatusMessage(response.data?.success || false);

      if (response.data?.success) {
        setForm(initialForm);
        navigate('/enterprise/students');
      }
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || 'Error al registrar el estudiante');
      setStatusMessage(false);
    }
  };

  return (
    <>
      <h1>Nuevo Estudiante</h1>

      {message !== '' && (
        <div
          className={`alert ${statusMessage ? 'alert-success' : 'alert-danger'}`}
          role="alert"
          id="alertMessage"
        >
          {message}
        </div>
      )}

      <NavLink to="/enterprise/students" className="btn btn-secondary mb-3">
        Retroceder
      </NavLink>

      <form onSubmit={_agregarStudent}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="names" className="form-label">Nombres</label>
            <input
              type="text"
              id="names"
              name="names"
              className="form-control"
              value={form.names}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="last_names" className="form-label">Apellidos</label>
            <input
              type="text"
              id="last_names"
              name="last_names"
              className="form-control"
              value={form.last_names}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="district_id" className="form-label">Distrito</label>
            <input
              type="number"
              id="district_id"
              name="district_id"
              className="form-control"
              value={form.district_id}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="carrere_id" className="form-label">Carrera</label>
            <input
              type="number"
              id="carrere_id"
              name="carrere_id"
              className="form-control"
              value={form.carrere_id}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="semeter_id" className="form-label">Semestre</label>
            <input
              type="number"
              id="semeter_id"
              name="semeter_id"
              className="form-control"
              value={form.semeter_id}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="user_id" className="form-label">Usuario</label>
            <input
              type="number"
              id="user_id"
              name="user_id"
              className="form-control"
              value={form.user_id}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="picture_url" className="form-label">URL de foto</label>
            <input
              type="text"
              id="picture_url"
              name="picture_url"
              className="form-control"
              value={form.picture_url}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="summary" className="form-label">Resumen</label>
          <textarea
            id="summary"
            name="summary"
            className="form-control"
            rows="4"
            value={form.summary}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar Estudiante
        </button>
      </form>
    </>
  );
}
