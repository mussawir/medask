import React from 'react';
import '../App.css';
import phsection4 from '../images/phsection4.png';
import phsection41 from '../images/phsection41.png';
import { Container } from '@mui/material';
import '../App.css';

const Phsection4: React.FC = () => {
    return (
        <div className='pharmaciessecondsec4'>
            <Container className="distribution-sectionchng" maxWidth="xl">
                <div className="phcenter">
                <div className="text-contentph">
                    <h2 className="brand-name-small ibrtitle1">MedAsk</h2>
                    <h2 className="section-title subtitle">LP Pharmacies</h2>
                    <p className="section-description">
                    Medask LP Pharmacies support military hospitals like CMH and PEMH by providing essential medications through efficient local procurement. We ensure high-quality pharmaceutical products meet the specific needs of military healthcare facilities.
                    Working closely with military medical teams, we fulfill local purchase needs with a comprehensive range of medications and supplies, ensuring critical medications are available for patient care.                    </p>
                </div>
                <div className="image-content">
                    <img src={phsection4} alt="Pharmacy distribution" className="main-image" />
                    <img src={phsection41} alt="Pharmacy team working together" className="small-image" />
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Phsection4;
