import { useState,useEffect } from 'react';
import './PerfilListado.css'
import axios from 'axios';
import { NavLink,useNavigate } from 'react-router-dom';

export default function PerfilListado() {

const navigate=useNavigate();
const profiles2 = [];
const[profiles,setProfiles] = useState(profiles2);
const[message,setMessage] = useState("");
const[statusmessage,setStatusMessage] = useState(false);

 useEffect(() => { 
  _cargarPerfiles();
},[]);

const _cargarPerfiles = async () => {
  try {
    const response = await axios.get('/api/v1/profiles');
    //console.log(response.data);
    setProfiles(response.data.data);
    setMessage(response.data.message);
    setStatusMessage(response.data.success);
  }catch (error) {
    console.error(error);
  }

};

  const _eliminar = async (e,id) => {
    try {
      const response = await axios.delete('/api/v1/profiles/'+id);
      //console.log(response.data);
      _cargarPerfiles();
      setMessage(response.data.message);
      setStatusMessage(response.data.success);
    }catch (error) {
      console.error(error);
    }
  }

  const _editar = async (e,id) => {
    navigate('/enterprise/profiles/'+id+'/edit')
  }
  
  return <>
          <h2>Perfiles</h2>
         <p>Bienvenido al panel de la empresa</p>
        {message != "" ? (
          <div className={`alert ${statusmessage ? 'alert-success' : 'alert-danger'}`} role="alert" id="alertMessage">
          {message} {statusmessage}
          </div>) : (<div></div>)
        }
        <NavLink to="/enterprise/profiles/new" className="btn btn-secondary">
        Agregar Perfil
        </NavLink>
        
         <table className='table'> 
          <thead>
            <th>Id</th>
            <th>Nombre</th>
            <th>operaciones</th>
          </thead>
          <tbody>
            {Array.isArray(profiles) && profiles.map((profile) => (
              <tr>
                <td>{profile.id}</td>
                <td>{profile.name}</td>
                <td>
                  <button className="btn btn-primary" onClick ={(e)=> _editar(e,profile.id)}>Editar</button>
                  <button className="btn btn-danger" onClick={(e)=> _eliminar(e,profile.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
         </table>
         </>
};