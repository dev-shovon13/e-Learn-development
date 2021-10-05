import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Service from '../Service/Service';

const ServicesShort = () => {
    // rendering data into UI 
    const [services, setServices] = useState([])

    // loading data from local json file 
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const size = 4
    const items = services.slice(0, size)
    return (
        // services page 
        <div className="container mb-5">
            <div className="margin-top-nav"></div>
            <h1 className="text-secondary">Our <span className="text-info">Services</span></h1>
            <p className="w-75 px-5 p-3 mx-auto fs-5 text-secondary mb-4 services-subheading">Welcome to e-Learn collection of world-class online learning opportunities. <br /> The e-Learn Online Learning portal provides a gateway for the public to access</p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                {
                    items.map(service => <Service key={service.id} service={service} />)
                }
            </div>
            <NavLink to="/services">
                <button className="btn btn-outline-primary mt-5">See More</button>
            </NavLink>
        </div>
    );
};

export default ServicesShort;