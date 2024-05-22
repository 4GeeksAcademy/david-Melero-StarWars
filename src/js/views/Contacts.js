import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"



export const Contacts = () => {

    const { store, actions } = useContext(Context)

    return (
        <div className="container">
            <h1 className="text-center bg-white border border-success border border-4 rounded">Contacts</h1>
            {store.contacts.map((item, index) => (
                <div>
                    <p className="text-center" style={{width:'130%'}}>
                    <Link to='/login' className="btn btn-success" >Add contact</Link>
                    </p>
                    <ul className="list-group mt-3 text-center" style={{ margin: '0 auto', width: '500px' }}>
                        <li className="list-group-item col-sm-6 col-md-4 col-lg-3">{item.name}</li>
                        <li className="list-group-item col-sm-6 col-md-4 col-lg-3">{item.address}</li>
                        <li className="list-group-item col-sm-6 col-md-4 col-lg-3">A third item</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}