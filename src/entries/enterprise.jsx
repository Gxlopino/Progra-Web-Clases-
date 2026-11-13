// src/entries/enterprise.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom'

import CabeceraEnterprise from '../partials/CabeceraEnterprise'
import SideBarEnterprise from '../partials/SideBarEnterprise'
import FooterEnterprise from '../partials/FooterEnterprise'
import MisConvocatorias from '../pages/enterprise/MisConvocatorias'
import NuevaConvocatoria from '../pages/enterprise/NuevaConvocatoria'
import BandejaPostulantes from '../pages/enterprise/BandejaPostulantes'
import PerfilEmpresa from '../pages/enterprise/PerfilEmpresa'
import ResenasRecibidas from '../pages/enterprise/ResenasRecibidas'
import CambiarContrasena from '../pages/enterprise/CambiarContrasena'
import ConfiguracionEmpresa from '../pages/enterprise/ConfiguracionEmpresa'
import NoEncontrado from '../pages/enterprise/NoEncontrado'
import CarreraListado from '../pages/enterprise/CarreraListado'
import CarreraNueva from '../pages/enterprise/CarreraNueva'
import CarreraDetalle from '../pages/enterprise/CarreraDetalle'
import StudentListado from '../pages/enterprise/StudentListado'
import StudentNueva from '../pages/enterprise/StudentNueva'
import StudentDetalle from '../pages/enterprise/StudentDetalle'

import './enterprise.css'

// Layout general
function EnterpriseLayout() {
  return (
    <>
      <CabeceraEnterprise />

      <div className="enterprise-layout">
        <SideBarEnterprise />

        <main className="enterprise-content">
          <Outlet />
        </main>
      </div>

      <FooterEnterprise />
    </>
  )
}

// Función App: contiene solamente las rutas
function App() {
  return (
    <Routes>
      <Route
        path="/enterprise"
        element={<EnterpriseLayout />}
      >
        <Route index element={<MisConvocatorias />} />

        <Route
          path="convocatorias"
          element={<MisConvocatorias />}
        />

        <Route
          path="convocatorias/nueva"
          element={<NuevaConvocatoria />}
        />

        <Route
          path="postulantes"
          element={<BandejaPostulantes />}
        />

        <Route
          path="perfil"
          element={<PerfilEmpresa />}
        />

        <Route
          path="resenas"
          element={<ResenasRecibidas />}
        />

        <Route
          path="carrers"
          element={<CarreraListado />}
        />

        <Route
          path="carrers/new"
          element={<CarreraNueva />}
        />
        
        <Route
          path="carrers/:id/edit"
          element={<CarreraDetalle />}
        />

        <Route
          path="students"
          element={<StudentListado />}
        />

        <Route
          path="students/new"
          element={<StudentNueva />}
        />

        <Route
          path="students/:id/edit"
          element={<StudentDetalle />}
        />

        <Route
          path="cambiar-contrasena"
          element={<CambiarContrasena />}
        />

        <Route
          path="configuracion"
          element={<ConfiguracionEmpresa />}
        />
      </Route>

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  )
}

// Montaje en el DOM
const container = document.getElementById('root')

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}