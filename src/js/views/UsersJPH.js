import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const UserJPH = () => {
  const { store, actions } = useContext(Context)

  // const handlEye = (user) => {
  //   actions.settingUser(user)
  //   // Si tengo que realizar un fetch() para traer datos de una API...
  //   //    opcion 1: hacer aquí el fetch() a la API
  //   //    opcion 2: ejecutar un actions que tenga el fetch() a la API
  // }

  return (
  <div>
   <ul className="list-group">
  {store.users.map((item) => {
    <li key={item.id} className="list-group-item">
      {item.name}
    </li>
  })}
</ul>
  </div>
  )
}




// <div className="container text-start">
//       <h1 className="text-center text-success">Consumiendo APIs con fetch()</h1>
//       <ul className="list-group">
//         {store.users.map((item) =>
//           <li key={item.id} className="list-group-item d-flex justify-content-between">
//             {item.name}
//        
//           </li>
//         )}
//       </ul>
//     </div>



{/* //               <Link className="text-primary me-2" to={`/user-details/${item.id}`}
//                 onClick={() => handlEye(item)}>
//                 <i className="far fa-eye"></i>
//               </Link>
//               <span className="text-success me-2"><i className="far fa-edit"></i></span>
//               <span className="text-danger"><i className="fas fa-trash"></i></span>
//             </div> */}