import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DetailsService = () => {
    const {serviceId} = useParams();
    const [details,setDetails] = useState([]);
   

   useEffect(()=>{
       fetch('/allservices.json')
       .then(res=>res.json())
       .then(data=>setDetails(data))
   },[]);

   const serviceDetails = details.find(deatial=>deatial.id == serviceId);


    return (
        <div className="my-4">
            <div className="row shadow-lg p-3 m-5 bg-body rounded">
                <div className="col-md-12 ">
                <h2><span className="text-primary">All details of this section</span></h2>
                <img className="rounded" width="50%" height="50%" src={serviceDetails?.img} alt="" />
                <h3><span className="text-danger">{serviceDetails?.name}</span></h3>
                <h5 className="">{serviceDetails?.discription}</h5>
                <Link to={`/services`}>
                <button className="btn btn-primary mt-3">Go Previous</button>
                </Link>
            
                </div> 
            </div>
        </div>
    );
};

export default DetailsService;