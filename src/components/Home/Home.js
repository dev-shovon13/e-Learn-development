import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import location from '../../images/location.png'
import institute from '../../images/institute.png'
import Mentors from '../Mentors/Mentors';
import About from '../About/About';
import Benefits from '../Benefits/Benefits';
import './Home.css'
import ServicesShort from '../ServicesShort/ServicesShort';

// this is the container of all pages 
const Home = () => {
    return (
        <div>
            <div className="bg">
                <div className="margin-top-nav"></div>
                <div className="w-75 mx-auto py-5  text-white">
                    <h1 className="title">Search Teacher in <span className="text-info">Mentoring Appointment</span></h1>
                    <p className="subtitle">Discover the best Mentors & institutions the city nearest to you.</p>
                    <div className="my-5 grid row align-items-center justify-content-between w-75 mx-auto">
                        <div className="mb-3 col-md-4 input-container">
                            <img src={location} alt="" className="input-img" />
                            <input type="text" className="form-control title-input" placeholder="Search Location" />
                        </div>
                        <div className="mb-3 col-md-7 input-container">
                            <img src={institute} alt="" className="input-img img-2" />
                            <input type="text" className="form-control title-input" placeholder="Search Schools, Online Educational Centers, etc" />
                        </div>
                        <button className=" btn btn-primary col-md-1 mb-3 py-2 title-btn">
                            <FontAwesomeIcon className="fasicon" icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
            <ServicesShort />
            <Mentors />
            <About />
            <Benefits />
        </div>
    );
};

export default Home;