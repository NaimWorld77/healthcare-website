import React from 'react';
import im1 from '../../images/doctor1.jpg';
import im2 from '../../images/doctor2.jpg';
import im3 from '../../images/doctor3.jpg';
import im4 from '../../images/doctor4.jpg';
import im5 from '../../images/doctor5.jpg';
import im6 from '../../images/doctor6.jpg';

const Doctors = () => {
    return (
        <div className="m-3">
            <h1>Our all Doctor</h1>
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid" src={im1} alt="" />
                    <div className="bg-info">
                    <h4> FAMILY PHYSICIANS</h4>
                    <p>Contact Number: +5486318964</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={im2} alt="" />   
                    <div className="bg-info">
                    <h4>INTERNISTS</h4>
                    <p>Contact Number: +5486311024</p> 
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid w-75" src={im3} alt="" /> 
                    <div className="bg-info">
                    <h4>EMERGENCY PHYSICIANS</h4>
                    <p>Contact Number: +5486315487</p></div>   
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={im4} alt="" />
                   <div className="bg-info"> 
                   <h4>Name: PSYCHIATRISTS</h4>
                    <p>Contact Number: +548634568</p>
                   </div>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={im5} alt="" />
                    <div className="bg-info">
                    <h4> GYNECOLOGISTS</h4>
                    <p>Contact Number: +5486313265</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={im6} alt="" />
                    <div className="bg-info">
                    <h4> NEUROLOGISTS</h4>
                    <p>Contact Number: +5486345698</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;