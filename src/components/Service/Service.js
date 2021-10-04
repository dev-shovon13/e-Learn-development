import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, price, oldprice, duration } = props.service
    return (
        <div class="col">
            <div class="card h-100 bg-light">
                <img src={img} class="card-img-top img-fluid card-image" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <div class="card-text my-1"><span className="text-secondary fw-bold">Price:</span><h5 className="d-inline"> <span className="text-warning fw-bold">$</span><span className="text-decoration-line-through text-danger">{oldprice}</span> <span className="text-warning fw-bold"> $</span><span className="text-success">{price}</span></h5></div>
                    <p class="card-text text-secondary"><span className="fw-bold">Duration:</span> {duration} Hours</p>
                </div>
            </div>
        </div>
    );
};

export default Service;