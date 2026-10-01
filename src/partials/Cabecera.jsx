
import './Cabecera.css'

export default function Cabecera() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">

                {/* Logo de la aplicación */}
                <a className="navbar-brand fw-bold" href="/">
                    <span className="text-info">Mi</span>Aplicación
                </a>

                {/* Botón responsive para móviles */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuNavegacion"
                    aria-controls="menuNavegacion"
                    aria-expanded="false"
                    aria-label="Abrir menú de navegación"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Opciones de navegación */}
                <div
                    className="collapse navbar-collapse"
                    id="menuNavegacion"
                >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/nosotros">
                                Nosotros
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/servicios">
                                Servicios
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/contacto">
                                Contacto
                            </a>
                        </li>

                    </ul>

                    {/* Botón Login a la derecha */}
                    <div className="d-flex">
                        <a
                            href="/login"
                            className="btn btn-outline-info px-4"
                        >
                            Login
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    )
}