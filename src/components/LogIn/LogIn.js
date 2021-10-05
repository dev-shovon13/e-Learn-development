import React from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../images/login.png'
import './LogIn.css'

const LogIn = () => {
    const clickHandle = event => {
        event.preventDefault()
    }
    return (
        <div className="log-in-bg pt-5 pb-4">
            <div className="container mb-5">
                <div className="margin-top-nav"></div>
                <div className="bg-white rounded shadow p-5 pb-2 g-4 w-75 mx-auto log-sign">
                    <div className="row align-items-center">
                        <form className="col-12 col-lg-6 pt-2 pt-lg-0 login-form">
                            <h3 className="pb-3 text-secondary">Log In</h3>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="User ID" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="mb-3 text-start">
                                <NavLink to="/login" className="text-decoration-none text-info">Forgot Password ?</NavLink>
                            </div>
                            <button onClick={clickHandle} className="btn btn-primary w-100">Log In</button>
                        </form>
                        <div className="col-12 col-lg-6 login-img">
                            <img src={login} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <p className="text-secondary pt-3">New Member ? <NavLink to="/signup" className="text-decoration-none"><span className="text-info fw-bold">Register</span></NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;