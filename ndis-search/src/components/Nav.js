import React , {useState, useContext}  from 'react';
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import {LoginContext} from '../App';    
import {LoggedIn} from './LoggedIn';


const Nav = () => {

    const context = useContext(LoginContext);

    return (
    <nav className="navbar navbar-expand-lg navbar-dark  branding-nav mb-4">
        <Link className="navbar-brand" to="/">Karista</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        {context.loginState && <LoggedIn />}

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/provider">Provider</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/provider/create">Create</Link>
                </li>
                               
            </ul>
        </div>
    </nav>
)
}


export default Nav;