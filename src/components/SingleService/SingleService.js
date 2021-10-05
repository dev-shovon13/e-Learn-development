import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const { serviceID } = useParams()
    console.log(serviceID);
    // rendering data into UI 
    const [service, setService] = useState([])

    // loading data from local json file 
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const arr1 = data.filter(d => d.id === serviceID);
                console.log('arr1', arr1);
                setService(arr1)
            })
    }, [serviceID])
    return (
        <div className="container mb-5">
            <div className="margin-top-nav"></div>
            <h1>{serviceID}</h1>
            <h1>{service.id}</h1>
        </div>
    );
};

export default SingleService;