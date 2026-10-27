import { useState,useEffect } from 'react';
import './CarreraListado.css'
import axios from 'axios';


export default function CarreraListado() {
const carrers2 = [];
const[carrers,setCarrers] = useState(carrers2);
  
 useEffect(() => { 
  cargarCarreras();
},[]);

const cargarCarreras = async () => {
  try {
    const response = await axios.get('/api/v1/carrers');
    setCarrers(response.data.data.list);
  }catch (error) {
    console.error(error);
  }
};
  return <>
          <h2>Carreras</h2>
         <p>Bienvenido al panel de la empresa</p>
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