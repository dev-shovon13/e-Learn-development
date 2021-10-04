import React from 'react';
import './Benefits.css'
import benefit1 from '../../images/benefit-1.png'
import benefit2 from '../../images/benefit-2.png'
import benefit3 from '../../images/benefit-3.png'

// this is the benefit page 

const Benefits = () => {
    return (
        <div className="benefit-bg pb-5">
            <div className="margin-top-nav"></div>
            <div className="container text-white">
                <p className="fs-4 fw-light">MENTORING FLOW</p>
                <h1>How does it works ?</h1>
                <p className="w-75 mx-auto fs-5 fw-light">Are you looking to join online institutions? Now it's very simple, Sign up with mentoring</p>
                <div className="mt-5">
                    {/* card section start*/}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-dark g-4">
                        <div className="col">
                            <div class="card h-100  p-3 bg-white rounded ">
                                <img src={benefit1} alt="" className="p-2 rounded-circle border border-2 mb-3 benefit-img" />
                                <h4>Sign up</h4>
                                <p className="w-75 mx-auto mt-1 text-secondary">Are you looking to join online Learning? Now it's very simple, Now Sign up</p>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card h-100  p-3 bg-white rounded ">
                                <img src={benefit2} alt="" className="p-2 rounded-circle border border-2 mb-3 benefit-img" />
                                <h4>Collaborate</h4>
                                <p className="w-75 mx-auto mt-1 text-secondary">Collaborate on your own timing, by scheduling with mentor booking</p>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card h-100  p-3 bg-white rounded ">
                                <img src={benefit3} alt="" className="p-2 rounded-circle border border-2 mb-3 benefit-img" />
                                <h4>Improve & Get Back</h4>
                                <p className="w-75 mx-auto mt-1 text-secondary">you can gather different skill set, and you can become mentor too</p>
                            </div>
                        </div>
                    </div>
                    {/* card section end*/}
                </div>
            </div>
        </div>
    );
};

export default Benefits;