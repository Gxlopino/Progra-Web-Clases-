// src/entries/owner.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import Cabecera from '../partials/Cabecera'

// 2. Pasamos los valores (props) desde el componente principal
function HolaMundo() {
  return (
    <>
    <p>te amo ferkix</p>
    <p> Estamos entendiendo</p>
    </>
)
}

// 3. Montaje en el DOM
const container = document.getElementById('root')

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <Cabecera />
      <HolaMundo />
    </React.StrictMode>
  )
}