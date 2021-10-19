import React from 'react';
import im1 from '../../images/im1.jpg';
import im2 from '../../images/im2.jpg';
import im3 from '../../images/im3.jpg';

const Covid19 = () => {
    return (
        <div className="m-3 bg-light">
            <h2 className="text-danger py-3">COVID-19 affects different people in different ways. </h2>
            <div className="row">
                <div className="col-md-6 text-start">
                    <h5>Most common symptoms:
                        <p>
                        <ul>
                            <li>fever</li>
                            <li>cough</li>
                            <li>tiredness</li>
                            <li>loss of taste or smell</li>
                        </ul>
                        </p></h5>
                </div>
                <div className="col-md-6 text-start">
                <h5>Less common symptoms:</h5>
                <p>
                <ul>
                    <li>sore throat</li>
                    <li>headache</li>
                    <li>aches and pains</li>
                    <li>diarrhoea</li>
                    <li>a rash on skin, or discolouration of fingers or toes</li>
                    <li>red or irritated eyes</li>
                </ul>
                </p>
                </div>
            </div>
            <div>
                <div className="row p-4">
                    <div className="col-md-4">
                        <img className="img-fluid rounded" src={im1} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded" src={im2} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded" src={im3} alt="" />
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covid19;