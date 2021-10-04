import { faEnvelope, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer pt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-start px-3">
                    <div className="col mb-3">
                        <h5>CONTACT INFO</h5>
                        <p className="w-75 text-secondary">A powerhouse of cutting-edge education, research & teaching in The World</p>
                        <div className="d-flex align-items-center mb-2">
                            <FontAwesomeIcon icon={faHome} />
                            <p className="text-secondary ms-3 mb-0">Wari, Dhaka-1203, Bangladesh</p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <p className="text-secondary ms-3 mb-0">+88 017 123429847</p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className="text-secondary ms-3 mb-0">devshovon13@example.com</p>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <h5>OUR COURSES</h5>
                        <p className="mb-2 text-secondary">Angular Development</p>
                        <p className="mb-2 text-secondary">Node.js Development</p>
                        <p className="mb-2 text-secondary">React Development</p>
                        <p className="mb-2 text-secondary">Laravel Development</p>
                        <p className="mb-2 text-secondary">PHP Development</p>
                        <p className="mb-2 text-secondary">UI/UX Designing</p>
                    </div>
                    <div className="col">
                        <h5 className="text-center">OUR Instructors</h5>
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <p className="mb-2 text-secondary">Dan Cederholm</p>
                                <p className="mb-2 text-secondary">Dave Shea</p>
                                <p className="mb-2 text-secondary">Rachel Andrew</p>
                                <p className="mb-2 text-secondary">Veerle Pieters</p>
                            </div>
                            <div className="">
                                <p className="mb-2 text-secondary">Robert Piterson</p>
                                <p className="mb-2 text-secondary">Jeffrey Zeldman</p>
                                <p className="mb-2 text-secondary">Simon Collison</p>
                                <p className="mb-2 text-secondary">John Smilga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top border-2 bg-gradiant">
                <div className="d-md-flex justify-content-between align-items-center container">
                    <p className="p-3 mb-0 text-dark ">© 2021 devShovon13. All rights reserved.</p>
                    <div className="d-flex justify-content-center">
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