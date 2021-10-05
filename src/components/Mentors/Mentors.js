import React, { useEffect, useState } from 'react';
import Mentor from '../Mentor/Mentor';
import './Mentors.css'

const Mentors = () => {
    // rendering data into UI 
    const [mentors, setMentors] = useState([])

    // loading data from local json file 
    useEffect(() => {
        fetch('./mentors.json')
            .then(res => res.json())
            .then(data => setMentors(data))
    }, [])
    return (
        // mentor page 
        <div className="mentor-bg pb-5">
            <div className="margin-top-nav"></div>
            <div className="container pb-3">
                <h1 className="text-white">Our <span className="text-info">Mentors</span></h1>
                <p className="w-75 mx-auto fs-5 text-white rounded p-3 px-5 sub-heading-bg mb-4">Do you want to move on next step? Choose your most popular leaning mentors, it will help you to achieve your professional goals.</p>
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    {
                        mentors.map(mentor => <Mentor key={mentor.id} mentor={mentor} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Mentors;