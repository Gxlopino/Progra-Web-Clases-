import { useState, useEffect } from 'react';
import './StudentListado.css';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const PAGE_SIZE = 5;

export default function StudentListado() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState(false);
  const [search, setSearch] = useState('');
  const [carrera, setCarrera] = useState('');
  const [distrito, setDistrito] = useState('');
  const [semestre, setSemestre] = useState('');
  const [carreras, setCarreras] = useState([]);
  const [distritos, setDistritos] = useState([]);
  const [semestres, setSemestres] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _cargarCatalogos();
  }, []);

  useEffect(() => {
    _cargarStudents(1, search, carrera, distrito, semestre);
  }, [carrera, distrito, semestre]);

  const _cargarCatalogos = async () => {
    try {
      const [carrerasRes, distritosRes, semestresRes] = await Promise.all([
        axios.get('/api/v1/carrers'),
        axios.get('/api/v1/districts'),
        axios.get('/api/v1/semesters')
      ]);

      setCarreras(carrerasRes.data?.data || []);
      setDistritos(distritosRes.data?.data || []);
      setSemestres(semestresRes.data?.data || []);
    } catch (error) {
      console.error('Error cargando catálogos', error);
    }
  };

  const _cargarStudents = async (currentPage = 1, currentSearch = '', currentCarrera = '', currentDistrito = '', currentSemestre = '') => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/students', {
        params: {
          page: currentPage,
          limit: PAGE_SIZE,
          search: currentSearch,
          carrer_id: currentCarrera,
          district_id: currentDistrito,
          semester_id: currentSemestre
        }
      });

      const payload = response.data?.data || {};
      setStudents(payload.list || []);
      setTotalPages(payload.pages || 1);
      setPage(payload.page || currentPage);
      setMessage(response.data?.message || '');
      setStatusMessage(response.data?.success || false);
    } catch (error) {
      console.error(error);
      setMessage('Error al cargar estudiantes');
      setStatusMessage(false);
    } finally {
      setLoading(false);
    }
  };

  const _buscar = (e) => {
    e.preventDefault();
    setPage(1);
    _cargarStudents(1, search, carrera, distrito, semestre);
  };

  const _limpiar = () => {
    setSearch('');
    setCarrera('');
    setDistrito('');
    setSemestre('');
    setPage(1);
    _cargarStudents(1, '', '', '', '');
  };

  const _cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina < 1 || nuevaPagina > totalPages) return;
    setPage(nuevaPagina);
    _cargarStudents(nuevaPagina, search, carrera, distrito, semestre);
  };

  const _eliminar = async (e, id) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`/api/v1/students/${id}`);
      setMessage(response.data?.message || '');
      setStatusMessage(response.data?.success || false);
      await _cargarStudents(page, search, carrera, distrito, semestre);
    } catch (error) {
      console.error(error);
      setMessage('Error al eliminar estudiante');
      setStatusMessage(false);
    }
  };

  const _editar = (e, id) => {
    e.preventDefault();
    navigate(`/enterprise/students/${id}/edit`);
  };

  return (
    <>
      <h2>Estudiantes</h2>
      <p>Bienvenido al panel del administrador</p>

      {message !== '' && (
        <div className={`alert ${statusMessage ? 'alert-success' : 'alert-danger'}`} role="alert" id="alertMessage">
          {message}
        </div>
      )}

      <div className="card mb-3">
        <div className="card-body">
          <form className="row g-2 align-items-end" onSubmit={_buscar}>
            <div className="col-md-3">
              <label htmlFor="search" className="form-label">Nombre</label>
              <input
                id="search"
                type="text"
                className="form-control"
                placeholder="Buscar por nombre o email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="carrera" className="form-label">Carrera</label>
              <select id="carrera" className="form-select" value={carrera} onChange={(e) => setCarrera(e.target.value)}>
                <option value="">Todas</option>
                {carreras.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="distrito" className="form-label">Distrito</label>
              <select id="distrito" className="form-select" value={distrito} onChange={(e) => setDistrito(e.target.value)}>
                <option value="">Todos</option>
                {distritos.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="semestre" className="form-label">Semestre</label>
              <select id="semestre" className="form-select" value={semestre} onChange={(e) => setSemestre(e.target.value)}>
                <option value="">Todos</option>
                {semestres.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
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
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Email</th>
              <th>Distrito</th>
              <th>Carrera</th>
              <th>Semestre</th>
              <th>Perfil</th>
              <th style={{ width: '220px' }}>Operaciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" className="text-center">Cargando...</td>
              </tr>
            ) : Array.isArray(students) && students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.names}</td>
                  <td>{student.last_names}</td>
                  <td>{student.email}</td>
                  <td>{student.district?.name || '-'}</td>
                  <td>{student.carrers?.name || '-'}</td>
                  <td>{student.semester?.name || '-'}</td>
                  <td>{student.user?.profile?.name || student.user?.email || '-'}</td>
                  <td>
                    <button className="btn btn-primary me-2" onClick={(e) => _editar(e, student.id)}>Editar</button>
                    <button className="btn btn-danger" onClick={(e) => _eliminar(e, student.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">No se encontraron estudiantes.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <nav aria-label="Paginación de estudiantes" className="mt-3">
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
