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

                    <ul className="list-group mt-3 text-center" style={{ margin: '0 auto' }}>
                        <li className="list-group-item col-sm-6 col-md-4 col-lg-3" style={{ margin: '0 auto' }}>{item.name}</li>
                        <li className="list-group-item col-sm-6 col-md-4 col-lg-3" style={{ margin: '0 auto' }}>{item.address}</li>
                        <li className="list-group-item col-sm-6 col-md-4 col-lg-3" style={{ margin: '0 auto' }}>A third item</li>
                    </ul>
                    <div className="d-flex justify-content-center">
                            <Link to='/login' className="btn btn-success mt-2 me-4" style={{ marginRight: "100px" }}>Add contact</Link>
                            <Link to='/login' className="btn btn-danger mt-2 me-3" style={{ marginRight: "100px" }}>Cancel</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}