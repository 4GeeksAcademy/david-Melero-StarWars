import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { json } from "react-router";

export const DetailsCharacters = () => {

  const { store, actions } = useContext(Context)

  const [currentUser, setCurrentUser] = useState({});

  // useEffect(() => {
  //   setCurrentUser(store.currentUser);
  // }, [store.currentUser]);

  console.log("hola", store.currentUser);


  return (


    <div className="card" style={{ width: '19rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">


        <p>
          {Object.values(store.currentUser).length ?

            <span>{store.currentUser?.properties?.name}</span>

            :

            "NO HAY NADA"

          }</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

