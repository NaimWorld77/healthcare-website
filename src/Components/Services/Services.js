import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('/allservices.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2 className="pt-4 text-danger">Our All Services Here</h2>
            <div className="service-container">
            {
                services.map((service) => <Service service={service}></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;