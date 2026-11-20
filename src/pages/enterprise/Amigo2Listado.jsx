import { useState, useEffect } from 'react';
import './AmigoListado.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PAGE_SIZE = 5;

export default function Amigo2Listado() {
  const navigate = useNavigate();
  const [amigos, setAmigos] = useState([]);
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState(false);
  const [search, setSearch] = useState('');
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _cargarCatalogos();
  }, []);

  useEffect(() => {
    _cargarAmigos(1, search, usuario);
  }, [usuario]);

  const _cargarCatalogos = async () => {
    try {
      const usuariosRes = await axios.get('/api/v1/users');
      setUsuarios(usuariosRes.data?.data || []);
    } catch (error) {
      console.error('Error cargando usuarios', error);
    }
  };

  const _cargarAmigos = async (currentPage = 1, currentSearch = '', currentUsuario = '') => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/amigos2', {
        params: {
          page: currentPage,
          limit: PAGE_SIZE,
          search: currentSearch,
          user_id: currentUsuario
        }
      });

      const payload = response.data?.data || {};
      setAmigos(payload.list || []);
      setTotalPages(payload.pages || 1);
      setPage(payload.page || currentPage);
      setMessage(response.data?.message || '');
      setStatusMessage(response.data?.success || false);
    } catch (error) {
      console.error(error);
      setMessage('Error al cargar amigos2');
      setStatusMessage(false);
    } finally {
      setLoading(false);
    }
  };

  const _buscar = (e) => {
    e.preventDefault();
    setPage(1);
    _cargarAmigos(1, search, usuario);
  };

  const _limpiar = () => {
    setSearch('');
    setUsuario('');
    setPage(1);
    _cargarAmigos(1, '', '');
  };

  const _cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina < 1 || nuevaPagina > totalPages) return;
    setPage(nuevaPagina);
    _cargarAmigos(nuevaPagina, search, usuario);
  };

  const _eliminar = async (e, id) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`/api/v1/amigos2/${id}`);
      setMessage(response.data?.message || '');
      setStatusMessage(response.data?.success || false);
      await _cargarAmigos(page, search, usuario);
    } catch (error) {
      console.error(error);
      setMessage('Error al eliminar amigo2');
      setStatusMessage(false);
    }
  };

  const _editar = (e, id) => {
    e.preventDefault();
    navigate(`/enterprise/amigos2/${id}/edit`);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="mb-0">Amigos 2</h2>
          <p className="mb-0">Bienvenido al panel del administrador</p>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate('/enterprise/amigos2/new')}
        >
          Agregar amigo 2
        </button>
      </div>

      {message !== '' && (
        <div
          className={`alert ${statusMessage ? 'alert-success' : 'alert-danger'}`}
          role="alert"
          id="alertMessage"
        >
          {message}
        </div>
      )}

      <div className="card mb-3">
        <div className="card-body">
          <form className="row g-2 align-items-end" onSubmit={_buscar}>
            <div className="col-md-5">
              <label htmlFor="search" className="form-label">Nombre</label>
              <input
                id="search"
                type="text"
                className="form-control"
                placeholder="Buscar por nombre, apellido, celular o email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="usuario" className="form-label">Usuario</label>
              <select
                id="usuario"
                className="form-select"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              >
                <option value="">Todos</option>
                {usuarios.map((item) => (
                  <option key={item.id} value={item.id}>{item.email}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3 d-flex gap-2">
              <button type="button" className="btn btn-outline-secondary flex-fill" onClick={_limpiar}>
                Limpiar
              </button>
              <button type="submit" className="btn btn-primary flex-fill">
                Filtrar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th style={{ width: '60px' }}>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Usuario</th>
              <th style={{ width: '220px' }}>Operaciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center">Cargando...</td>
              </tr>
            ) : Array.isArray(amigos) && amigos.length > 0 ? (
              amigos.map((amigo) => (
                <tr key={amigo.id}>
                  <td>{amigo.id}</td>
                  <td>{amigo.name}</td>
                  <td>{amigo.apellido}</td>
                  <td>{amigo.email || '-'}</td>
                  <td>{amigo.celular || '-'}</td>
                  <td>{amigo.user?.email || '-'}</td>
                  <td>
                    <button className="btn btn-primary me-2" onClick={(e) => _editar(e, amigo.id)}>Editar</button>
                    <button className="btn btn-danger" onClick={(e) => _eliminar(e, amigo.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">No se encontraron amigos2.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <nav aria-label="Paginación de amigos2" className="mt-3">
        <ul className="pagination justify-content-center mb-0">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => _cambiarPagina(page - 1)}>Anterior</button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((numero) => (
            <li key={numero} className={`page-item ${numero === page ? 'active' : ''}`}>
              <button className="page-link" onClick={() => _cambiarPagina(numero)}>{numero}</button>
            </li>
          ))}

          <li className={`page-item ${page >= totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => _cambiarPagina(page + 1)}>Siguiente</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
