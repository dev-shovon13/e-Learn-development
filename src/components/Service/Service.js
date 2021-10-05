import React from 'react';
import './Service.css'

const Service = (props) => {
    // destructuring props 
    const { name, img, price, oldprice, duration } = props.service
    return (
        // service card 
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid card-image" alt="..." />
                <div className="card-body card-bg">
                    <h5 className="card-title service-title fw-light">{name}</h5>
                    <div className="card-text my-1"><span className="text-secondary fw-bold">Price:</span><h5 className="d-inline"> <span className="text-warning fw-bold">$</span><span className="text-decoration-line-through text-danger">{oldprice}</span> <span className="text-warning fw-bold"> $</span><span className="text-success">{price}</span></h5></div>
                    <p className="card-text text-secondary"><span className="fw-bold">Duration:</span> {duration} Hours</p>
                </div>
            </div>
        </div>
    );
};

export default Service;