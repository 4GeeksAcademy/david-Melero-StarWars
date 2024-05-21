import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { json } from "react-router";

export const DetailsCharacters = () => {

  const { store, actions } = useContext(Context)

  // const [currentUser, setCurrentUser] = useState({});

  // useEffect(() => {
  //   setCurrentUser(store.currentUser);
  // }, [store.currentUser]);

  console.log("hola", store.currentUser);


  return (


    <div class="card mb-3 m-4 bg-dark" >
      <div class="row g-0">
        <div class="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${store.currentUser.uid}.jpg`} class="img-fluid rounded-start" alt="..." />
        </div>
        {Object.values(store.currentUser).length

          ?

          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title text-white "> Name: <span >{store.currentUser.properties.name}</span></h4>
              <hr style={{color: "white"}}></hr>
              <p class="card-text text-white"><span className="fs-6">Eye color: </span> 
               {store.currentUser.properties.eye_color}</p>
              <p class="card-text text-white"><span className="fs-6">Hair color: </span> 
               {store.currentUser.properties.hair_color}</p>
              <p class="card-text text-white"><span className="fs-6">Skin color: </span> 
               {store.currentUser.properties.skin_color}</p>
              <p class="card-text text-white"><span className="fs-6">Birth year: </span> 
               {store.currentUser.properties.birth_year}</p>
              <p class="card-text text-white"><span className="fs-6">Gender: </span> 
               {store.currentUser.properties.gender}</p>
            
            </div>
          </div>
          :

          "No hay nada"
        }
      </div>
    </div>

  )
}

{/* 
    <div className="card mt-2 " style={{ width: '19rem', margin: '0 auto' }}>
      <div className="d-flex flex-row mb-3">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${store.currentUser.uid}.jpg`} className="card-img-top"style={{height: '100%'}} />
        <div className="card-body">
          <p>
            {Object.values(store.currentUser).length ?

              <h3>{store.currentUser?.properties?.name}</h3>

              :

              "NO HAY NADA"

            }</p>
        </div>
      </div>
    </div> */}


