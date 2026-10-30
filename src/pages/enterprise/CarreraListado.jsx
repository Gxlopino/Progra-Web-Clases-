import { useState,useEffect } from 'react';
import './CarreraListado.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function CarreraListado() {
const carrers2 = [];
const[carrers,setCarrers] = useState(carrers2);
const[message,setMessage] = useState("");
const[statusmessage,setStatusMessage] = useState(false);

 useEffect(() => { 
  _cargarCarreras();
},[]);

const _cargarCarreras = async () => {
  try {
    const response = await axios.get('/api/v1/carrers');
    //console.log(response.data);
    setCarrers(response.data.data);
    setMessage(response.data.message);
    setStatusMessage(response.data.success);
  }catch (error) {
    console.error(error);
  }

};
  return <>
          <h2>Carreras</h2>
         <p>Bienvenido al panel de la empresa</p>
        {message != "" ? (
          <div className={`alert ${statusmessage ? 'alert-success' : 'alert-danger'}`} role="alert" id="alertMessage">
          {message} {statusmessage}
          </div>) : (<div></div>)
        }
        <NavLink to="/enterprise/carrers/new" className="btn btn-secondary">
        Agregar Carrera
        </NavLink>
        
         <table className='table'> 
          <thead>
            <th>Id</th>
            <th>Nombre</th>
            <th>operaciones</th>
          </thead>
          <tbody>
            {Array.isArray(carrers) && carrers.map((carrer) => (
              <tr>
                <td>{carrer.id}</td>
                <td>{carrer.name}</td>
                <td>
                  <button className="btn btn-primary">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
         </table>
         </>
};