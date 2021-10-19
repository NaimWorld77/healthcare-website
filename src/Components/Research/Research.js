import React from 'react';
import img1 from '../../images/m1.jpg';
import img2 from '../../images/m2.jpg';

const Research = () => {
    return (
        <div className="py-4 bg-light">
            <h1>We have some Research section</h1>
            <div className="row m-4">
                <div className="col-md-4 text-start container-sm">
                    <h3><span className="text-danger">Why is health research important?</span></h3>
                    <p>What we know about cancer changes over time as more research is done. Health research has led to the medical treatments and health programs available today. These advances have helped the five-year survival rate for all cancers to rise from 52% to 68% over the past 20 years.The search for better ways to prevent, diagnose and treat human diseases is ongoing. It requires the active participation of patients, carers and healthy people.</p>
                </div>
                <div className="col-md-4 text-start container-sm">
                    <h3><span className="text-danger">Why participate in research?</span></h3>
                    <p>The involvement of patients, carers and healthy people in research is necessary to help researchers learn more about a disease and ways to treat it. Most people diagnosed with cancer who decide to participate in research do so because they want to help improve outcomes for others in the future, as well as for themselves.Adults and children can participate in different ways, including:consenting to their medical records being accessed completing surveys trialling treatments agreeing to be examined regularly by health professionals allowing samples taken during tests or treatment to be used for research.</p>
                </div>
                <div className="col-md-4 text-start container-sm">
                    <h4><span className="text-danger">Who can participate in research?</span></h4>
                    <p>All research studies, including clinical trials, have guidelines setting out who can participate. Both adults and children can take part, but children under the age of 18 need a parent’s or guardian’s permission. Most cancer research involves current patients, however, some studies target former patients, carers, family members, people at risk of cancer or people who have not had the disease.It is important that people of all ages and social, economic and racial backgrounds take part so the results reflect Australia’s diverse population. Deciding to take part can help you weigh up the benefits and risks of being in a study, and answer other questions you may have. Learn more about participating in clinical trials or other types of cancer research.</p>
                </div>
                
            </div>
            <div>
                <div className="row">
                    <div className="col-md-6 container-sm">
                        <img className="img-fluid rounded" src={img1} alt="" />
                        <h4>More resources</h4>
                    </div>
                    <div className="col-md-6 container-sm">
                    <img className="img-fluid rounded" src={img2} alt="" />
                    <h4>health research</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;