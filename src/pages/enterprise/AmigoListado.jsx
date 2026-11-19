import { useState,useEffect } from 'react';
import './AmigoListado.css'
import axios from 'axios';
import { NavLink,useNavigate } from 'react-router-dom';

export default function AmigoListado() {

const navigate=useNavigate();
const amigos2 = [];
const[amigos,setAmigos] = useState(amigos2);
const[message,setMessage] = useState("");
const[statusmessage,setStatusMessage] = useState(false);

useEffect(() => {
  _cargarAmigos();
},[]);

const _cargarAmigos = async () => {
  try {
    const response = await axios.get('/api/v1/amigos');
    //console.log(response.data);
    setAmigos(response.data.data.list);
    setMessage(response.data.message);
    setStatusMessage(response.data.success);
  }catch (error) {
    console.error(error);
  }

};

  const _eliminar = async (e,id) => {
    try {
      const response = await axios.delete('/api/v1/amigos/'+id);
      //console.log(response.data);
      _cargarAmigos();
      setMessage(response.data.message);
      setStatusMessage(response.data.success);
    }catch (error) {
      console.error(error);
    }
  }

  const _editar = async (e,id) => {
    navigate('/enterprise/amigos/'+id+'/edit')
  }
  
  return <>
        <h2>Amigos</h2>
        <p>Bienvenido al panel de la empresa</p>
        {message != "" ? (
          <div className={`alert ${statusmessage ? 'alert-success' : 'alert-danger'}`} role="alert" id="alertMessage">
          {message} {statusmessage}
          </div>) : (<div></div>)
        }
        <NavLink to="/enterprise/amigos/new" className="btn btn-secondary">
        Agregar Amigo
        </NavLink>
        
        <table className='table'>
          <thead>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Celular</th>
            <th>operaciones</th>
          </thead>
          <tbody>
            {Array.isArray(amigos) && amigos.map((amigo) => (
              <tr>
                <td>{amigo.id}</td>
                <td>{amigo.name}</td>
                <td>{amigo.apellido}</td>
                <td>{amigo.celular}</td>
                <td>
                  <button className="btn btn-primary" onClick ={(e)=> _editar(e,amigo.id)}>Editar</button>
                  <button className="btn btn-danger" onClick={(e)=> _eliminar(e,amigo.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
};