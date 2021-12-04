import React from 'react';
import {NavLink,Link} from "react-router-dom";

const Navbar = (props) => {
    return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top shadow-sm">
            <div className="container-lg">
            <Link to="/" className="navbar-brand fs-5 fw-bold text-white-50" href="#">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink  exact to="/"className="nav-link text-capitalize active">Home</NavLink>
                    <NavLink to="/about_info" className="nav-link text-capitalize">about</NavLink>
                    <NavLink to="/contact" className="nav-link text-capitalize">contact</NavLink>
                </div>
                </div>
            </div>
            </nav>
    );
};

export default Navbar;