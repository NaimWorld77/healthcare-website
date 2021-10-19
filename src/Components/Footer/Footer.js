import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark p-3">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3 className="text-danger">NA HealthCare</h3>
                    <h6 className="text-white">Adresss: 55 Commercial Rd, Melbourne VIC 3004
                    (03) 9076 2000</h6>
                    <p className="text-white">Emergency Contact: <br />  <i className="fas text-primary fa-phone-alt"></i> (03) 9076 1000
                    <br /><i className="fas text-primary fa-fax"></i> (+9)12542 </p>
                    <h3 className="text-light">Follow Us</h3>
                    <p className="text-danger"><i className="fab fa-facebook-f me-3"></i> 
                    <i className="fab fa-instagram me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-facebook-messenger"></i></p>

                </div>
                <div className="col-md-6 col-sm-12">
                    <h1 className="text-danger">Our Best</h1>
                   <div className="text-white">
                   <p>Health professionals</p>
                    <p>For GPs</p>
                    <p>Clinical resources</p>
                    <p>Nursing careers & education</p>
                    <p>Medical careers</p>
                    <p>Clinical support services</p>
                   </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;