import React, { useContext } from "react";
import { Context } from "../store/appContext";



export const Contacts = () => {

    const {store, actions} = useContext(Context)

    return (
        <>
        {store.contacts.map((item, index) => (
        <ul key={index} className="list-group" >
            <p style={{margin: '0 auto', backgroundColor:'red', border: '1px solid black'}}>Datos de : {item.name}</p>
            {/* <li className="list-group-item" style={{margin: '0 auto'}}>{item.name}</li> */}
            <li className="list-group-item" style={{margin: '0 auto'}}>Dirección: {item.address}</li>
            <li className="list-group-item" style={{margin: '0 auto'}}> Número de teléfono: {item.phone}</li>
          
        </ul>

        ))}
        </>
    )
}