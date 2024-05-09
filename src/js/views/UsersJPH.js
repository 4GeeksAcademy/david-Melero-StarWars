import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import imagen from "../../img/starWars.jpg"


export const UsersJPH = () => {
  const { store, actions } = useContext(Context)

  const handlEye = (user) => {
    actions.settingUser(user)
    // Si tengo que realizar un fetch() para traer datos de una API...
    //    opcion 1: hacer aquí el fetch() a la API
    //    opcion 2: ejecutar un actions que tenga el fetch() a la API
  }

  return (

    <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-3 ms-5">
      {store.users.map((item) => (
        <div key={item.uid} className="card  bg-dark ms-3" style={{ width: '18rem' }}>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-between">
              <a href="#" className="btn btn-outline-primary text-white">Details</a>
              <a href="#" className="btn btn-outline-danger"></a>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}


{/* <ul className="list-group">
{store.users.map((item) => 
  <li key={item.id} className="list-group-item d-flex justify-content-between">
    {item.uid}
    <div>
      {/* <Link className="text-primary me-2" to={`/user-details/${item.id}`} */}
//    <Link className="text-primary me-2" to={`/user-details/${item.id}`}
//         onClick={() => handlEye(item)}>
//         <i className="far fa-eye"></i>
//       </Link>
//       <span className="text-success me-2"><i className="far fa-edit"></i></span>
//       <span className="text-danger"><i className="fas fa-trash"></i></span>
//     </div>
//   </li>
// )}
// </ul> */}











/*
 const getUsers = async () => {
   const uri = 'https://jsonplaceholder.typicode.com/users';
   const options = {
     method: 'GET'
   };
   const response = await fetch(uri, options)  // esta instrucción es la q demora, por ello tenmos que esperarla (await)
   if (!response.ok) {
     // Tratamos el error
     console.log('Error: ', response.ok, response.status, response.statusText);
     // El return es muy importante, salimos de la función
     return 'Error: ' + response.status + ' - ' + response.statusText
   }
   console.log('Esto se ejecuta si la resputas es true');
   // console.log(response);
   const data = await response.json();
   console.log(data)
   setUsers(data)
 } 
 */