import React from 'react';
import { faBookOpen, faGraduationCap, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css'

const About = () => {
    return (
        // about page 
        <div className="about-bg pb-5">
            <div className="margin-top-nav"></div>
            <div className="container">
                <h1>About <span className="text-info fw-bold"><span className="bg-info text-white pb-2 px-3 rounded-circle">e</span>-Learn</span></h1>
                <p className="w-50 mx-auto fs-5 text-secondary about-subheading">Welcome to e-Learn collection of world-class online learning opportunities. The e-Learn Online Learning portal provides a gateway for the public to access</p>

                {/* card section start  */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-4">
                    <div className="col">
                        <FontAwesomeIcon icon={faGraduationCap} className="fas-icon text-dark" />
                        <h4 className="my-3">Facility OF Scholarship</h4>
                        <p className="text-secondary fs-5 w-75 mx-auto">A scholarship is an award of financial aid for a student to further their education.</p>
                        <button className="btn btn-outline-success btn-sm">Learn More</button>
                    </div>
                    <div className="col">
                        <FontAwesomeIcon icon={faBookOpen} className="fas-icon text-success" />
                        <h4 className="my-3">Book library & store</h4>
                        <p className="text-secondary fs-5 w-75 mx-auto">A library is a collection of materials, books or media that are easily accessible.</p>
                        <button className="btn btn-outline-success btn-sm">Learn More</button>
                    </div>
                    <div className="col">
                        <FontAwesomeIcon icon={faPlayCircle} className="fas-icon text-danger" />
                        <h4 className="my-3">Learn online courses</h4>
                        <p className="text-secondary fs-5 w-75 mx-auto">Choose from hundreds of free Information Technology courses or pay to earn.</p>
                        <button className="btn btn-outline-success btn-sm">Learn More</button>
                    </div>
                </div>
                {/* card section end  */}

            </div>
        </div>
    );
};

export default About;