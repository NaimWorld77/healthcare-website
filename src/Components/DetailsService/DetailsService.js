import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const DetailsService = () => {
    const {serviceId} = useParams();

   useEffect(()=>{
       fetch(`services/${serviceId}`)
       .then(res=>res.json())
       .then(data=>console.log(data))
   },[]);

    return (
        <div>
            <h3>this is single details page {serviceId}</h3>
        </div>
    );
};

export default DetailsService;