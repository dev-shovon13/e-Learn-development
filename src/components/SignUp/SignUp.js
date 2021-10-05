import React from 'react';
import './SignUp.css'
import signup from '../../images/signup.png'
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    const clickHandle = event => {
        event.preventDefault()
    }
    return (
        <div className="sign-up-bg pt-4 pb-2">
            <div className="container mb-5">
                <div className="margin-top-nav"></div>
                <div className="bg-white rounded shadow p-5 pb-2 g-4 w-75 mx-auto log-sign">
                    <div className="row  align-items-center">
                        <div className="col-12 col-lg-6">
                            <img src={signup} alt="" className="img-fluid" />
                        </div>
                        <form className="col-12 col-lg-6">
                            <h3 className="pb-3 text-secondary">Sign Up</h3>
                            <div className="mb-3 d-flex ">
                                <input type="text" className="form-control me-3" placeholder="First Name" />
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Enter Your Email" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="User ID" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Confirm Password" />
                            </div>
                            <div className="mb-3 form-check text-start">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label text-secondary">I accept the <NavLink to="/signup" className="text-decoration-none text-info">Terms of Use</NavLink> & <NavLink to="/signup" className="text-decoration-none text-info">Privacy Policy</NavLink></label>
                            </div>
                            <button onClick={clickHandle} className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                    <p className="text-secondary pt-3">Already have an Account ? <NavLink to="/login" className="text-decoration-none"><span className="text-info fw-bold">Log In</span></NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;