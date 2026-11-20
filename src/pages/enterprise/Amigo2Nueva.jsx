import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AmigoNueva.css';

export default function Amigo2Nueva() {
  const navigate = useNavigate();
  const initial = { name: '', apellido: '', celular: '', email: '', birth_date: '', picture_url: '', description: '', user_id: '' };
  const [form, setForm] = useState(initial);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get('/api/v1/users').then((response) => setUsers(response.data?.data || [])).catch(console.error);
  }, []);

  const cambiar = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const guardar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/amigos2', form);
      setMessage(response.data?.message || '');
      setSuccess(response.data?.success || false);
      if (response.data?.success) navigate('/enterprise/amigos2');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error al crear amigo2');
      setSuccess(false);
    }
  };

  return (
    <>
      <h1>Nuevo amigo 2</h1>
      {message && <div className={`alert ${success ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
      <NavLink to="/enterprise/amigos2" className="btn btn-secondary mb-3">Retroceder</NavLink>
      <form onSubmit={guardar}>
        <div className="row">
          <div className="col-md-6 mb-3"><label className="form-label">Nombre</label><input name="name" className="form-control" value={form.name} onChange={cambiar} required /></div>
          <div className="col-md-6 mb-3"><label className="form-label">Apellido</label><input name="apellido" className="form-control" value={form.apellido} onChange={cambiar} required /></div>
          <div className="col-md-6 mb-3"><label className="form-label">Email</label><input name="email" type="email" className="form-control" value={form.email} onChange={cambiar} /></div>
          <div className="col-md-6 mb-3"><label className="form-label">Celular</label><input name="celular" className="form-control" value={form.celular} onChange={cambiar} /></div>
          <div className="col-md-6 mb-3"><label className="form-label">Fecha de nacimiento</label><input name="birth_date" type="date" className="form-control" value={form.birth_date} onChange={cambiar} /></div>
          <div className="col-md-6 mb-3"><label className="form-label">URL de foto</label><input name="picture_url" className="form-control" value={form.picture_url} onChange={cambiar} /></div>
        </div>
        <div className="mb-3"><label className="form-label">Usuario vinculado (único)</label><select name="user_id" className="form-control" value={form.user_id} onChange={cambiar}><option value="">Selecciona un usuario</option>{users.map((user) => <option key={user.id} value={user.id}>{user.id} - {user.email}</option>)}</select></div>
        <div className="mb-3"><label className="form-label">Descripción</label><textarea name="description" rows="4" className="form-control" value={form.description} onChange={cambiar} /></div>
        <button className="btn btn-primary" type="submit">Guardar amigo 2</button>
      </form>
    </>
  );
}
