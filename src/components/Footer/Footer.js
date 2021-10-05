import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

// this is the footer page
const Footer = () => {
    return (
        <div className="footer pt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-start px-3">
                    <div className="col mb-3 mb-md-0">
                        <h5>CONTACT INFO</h5>
                        <p className="w-75 text-secondary">A powerhouse of cutting-edge education, research & teaching in The World</p>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faHome} className="f-icon" />
                            <p className="text-secondary ms-3 mb-0 f-text">Wari, Dhaka-1203, Bangladesh</p>
                        </div>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faPhoneAlt} className="f-icon" />
                            <p className="text-secondary ms-3 mb-0 f-text">+88 017 123429847</p>
                        </div>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faEnvelope} className="f-icon" />
                            <p className="text-secondary ms-3 mb-0 f-text">devshovon13@example.com</p>
                        </div>
                    </div>
                    <div className="col mb-3 mb-md-0">
                        <h5>OUR COURSES</h5>
                        <p className="mb-2 text-secondary f-courses">Node.js Development</p>
                        <p className="mb-2 text-secondary f-courses">Angular Development</p>
                        <p className="mb-2 text-secondary f-courses">React Development</p>
                        <p className="mb-2 text-secondary f-courses">Laravel Development</p>
                        <p className="mb-2 text-secondary f-courses">PHP Development</p>
                        <p className="mb-2 text-secondary f-courses">UI/UX Designing</p>
                    </div>
                    <div className="col">
                        <h5 className="text-center">OUR Instructors</h5>
                        <div className="d-flex justify-content-between">
                            <div >
                                <p className="mb-2 text-secondary f-mentor">Dan Cederholm</p>
                                <p className="mb-2 text-secondary f-mentor">Dave Shea</p>
                                <p className="mb-2 text-secondary f-mentor">Rachel Andrew</p>
                                <p className="mb-2 text-secondary f-mentor">Veerle Pieters</p>
                            </div>
                            <div >
                                <p className="mb-2 text-secondary f-mentor">Robert Piterson</p>
                                <p className="mb-2 text-secondary f-mentor">Jeffrey Zeldman</p>
                                <p className="mb-2 text-secondary f-mentor">Simon Collison</p>
                                <p className="mb-2 text-secondary f-mentor">John Smilga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top border-2 bg-gradiant">
                <div className="d-md-flex justify-content-between align-items-center container">
                    <p className="p-3 mb-0 text-dark ">© 2021 devShovon13. All rights reserved.</p>
                    <div className="d-flex justify-content-center pb-3 pb-md-0">
                        <FontAwesomeIcon icon={faTwitter} className="fa-social-icon icon-1 fs-3 me-3" />
                        <FontAwesomeIcon icon={faFacebook} className="fa-social-icon icon-2 fs-3 me-3" />
                        <FontAwesomeIcon icon={faInstagram} className="fa-social-icon icon-3 fs-3 me-3" />
                        <FontAwesomeIcon icon={faLinkedin} className="fa-social-icon icon-4 fs-3 me-3" />
                        <FontAwesomeIcon icon={faYoutube} className="fa-social-icon icon-5 fs-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;