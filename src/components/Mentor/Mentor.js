import React from 'react';
import './Mentor.css'

const Mentor = (props) => {
    const { name, instructor, img, price, location } = props.mentor
    return (
        <div className="col">
            <div className="card h-100 bg-light">
                <div className="row align-items-center">
                    <div className="col-4">
                        <img src={img} alt="" className="rounded-circle mentor-img p-2" />
                    </div>
                    <div className="col-8 p-2 text-start">
                        <h5>{name}</h5>
                        <p className="my-0 text-secondary"><span className="fw-bold">Instructor: </span>{instructor}</p>
                        <p className="my-0 text-secondary"><span className="fw-bold">Location: </span>{location}</p>
                        <p className="my-0 text-secondary"><span className="fw-bold">Charge: </span><span className="text-warning fw-bold">$</span>{price} /hr.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentor;