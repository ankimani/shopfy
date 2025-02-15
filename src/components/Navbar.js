import React from 'react'
import {Link} from 'react-router-dom'
import './navstyle.css'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
            <Link className="navbar-brand" Link to="/">Shopfy</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" Link to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" Link to="/contacts">Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" Link to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" Link to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" Link to="/signup">SignUp</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar