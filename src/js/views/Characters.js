import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import imagen from "../../img/starWars.jpg"


export const Characters = () => {
  const { store, actions } = useContext(Context)

  const handlEye = (user) => {
    actions.settingUser(user)
    // Si tengo que realizar un fetch() para traer datos de una API...
    //    opcion 1: hacer aquí el fetch() a la API
    //    opcion 2: ejecutar un actions que tenga el fetch() a la API
  }

  return (
     
    <div className="row row-cols-3 row-cols-lg-5 g-2  " style={{margin: '10px', backgroundImage: `url(${imagen})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
      {store.users.map((item) => (
        <div key={item.uid} className="card  bg-dark mt-2" style={{ width: '18rem', margin: '0 auto' }}>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top mt-2 " alt="..." />
          <div className="card-body">
            <h5 className="card-title text-white text-center">{item.name}</h5>
            
            <div className="d-flex justify-content-between">

              <Link to={"/details"} className="btn btn-outline-primary text-white ">Details </Link>

              <a href="#" className="btn btn-outline-danger text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></a>
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