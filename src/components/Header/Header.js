import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

// this is the navbar page
// I've used NavLink to link pages

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom border-2 shadow-sm">
            <div className="container">
                <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/home" >
                    <img src={logo} alt="" className="logo" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/home" className="nav-link" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/services" className="nav-link" aria-current="page" >Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/mentors" className="nav-link" aria-current="page" >Mentors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/about" className="nav-link">
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/benefits" className="nav-link">
                                Benefits
                            </NavLink>
                        </li>

                    </ul>
                    <div className="d-flex justify-content-center">
                        <NavLink to="/signup" >
                            <div className="btn btn-primary me-2">Sign Up</div>
                        </NavLink>
                        <NavLink to="/login" >
                            <div className="btn btn-outline-primary">Log In</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;