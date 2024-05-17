import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const DetailsUsers = () => {

  const { store, actions } = useContext(Context)
  console.log("hola, soy currentUser ", store.currentUser);

  return (

    <div className="card" style={{ width: '19rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        {/* <h5 className="card-title">{store.currentUser.name}</h5> */}
        <p>
          {store.currentUser ?

          <span>{store.currentUser.name}</span> 
          
          :

          "NO HAY NADA"
        }</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )

}