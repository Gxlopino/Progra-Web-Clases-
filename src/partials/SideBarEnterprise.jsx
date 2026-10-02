
 // src/partials/SideBarEnterprise.jsx
 
import { NavLink } from 'react-router-dom'
import './SideBarEnterprise.css'

export default function SideBarEnterprise() {
  // Aplica la clase active automáticamente
  const linkClass = ({ isActive }) =>
    `enterprise-sidebar-link${isActive ? ' active' : ''}`

  return (
    <aside className="enterprise-sidebar">

      {/* Convocatorias */}
      <div className="enterprise-sidebar-section">
        <h6 className="enterprise-sidebar-title">
          CONVOCATORIAS
        </h6>

        <nav className="enterprise-sidebar-nav">

          <NavLink
            to="/enterprise/convocatorias"
            end
            className={linkClass}
          >
            <span className="enterprise-sidebar-bullet" />
            Mis convocatorias
          </NavLink>

          <NavLink
            to="/enterprise/convocatorias/nueva"
            className={linkClass}
          >
            <span className="enterprise-sidebar-bullet" />
            Nueva convocatoria
          </NavLink>

          <NavLink
            to="/enterprise/postulantes"
            className={linkClass}
          >
            <span className="enterprise-sidebar-bullet" />
            Bandeja de postulantes
          </NavLink>

        </nav>
      </div>

      {/* Empresa */}
      <div className="enterprise-sidebar-section">
        <h6 className="enterprise-sidebar-title">
          EMPRESA
        </h6>

        <nav className="enterprise-sidebar-nav">

          <NavLink
            to="/enterprise/perfil"
            className={linkClass}
          >
            <span className="enterprise-sidebar-bullet" />
            Perfil de la empresa
          </NavLink>

          <NavLink
            to="/enterprise/resenas"
            className={linkClass}
          >
            <span className="enterprise-sidebar-bullet" />
            Reseñas recibidas
          </NavLink>

        </nav>
      </div>

      {/* Cuenta */}
      <div className="enterprise-sidebar-section">
        <h6 className="enterprise-sidebar-title">
          CUENTA
        </h6>

        <nav className="enterprise-sidebar-nav">

          <NavLink
            to="/enterprise/cambiar-contrasena"
            className={linkClass}
          >
            <span className="enterprise-sidebar-bullet" />
            Cambiar contraseña
          </NavLink>

          {/* Cerrar sesión: normalmente requiere una petición al servidor */}
          <a
            href="/logout"
            className="enterprise-sidebar-link"
          >
            <span className="enterprise-sidebar-bullet" />
            Cerrar sesión
          </a>

        </nav>
      </div>

    </aside>
  )
}