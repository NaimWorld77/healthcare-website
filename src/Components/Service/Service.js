import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name,img,id,describtion} = props.service;
    return (
        
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <div class="card" />
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h3 class="card-title">{name}</h3>
                <Link to={`/detailsservice/${id}`}>
                <button className="btn btn-primary mt-2">More details</button>
                </Link>
                </div>
                
</div>
        

    );
};

export default Service;