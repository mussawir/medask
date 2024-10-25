import React from 'react';
import '../App.css';
import rectangle from '../images/mainImage.png';
import smallImage from '../images/smallImage.png';
import { Container } from '@mui/material';
import '../App.css';

const Phsection2: React.FC = () => {
    return (
        <div className='prg-pharmaciessecondsec'>
            <Container className="prg-distribution-section"> 
                <div className="prg-text-section">   
                    <h2 className="prg-brand-name-small2">MedAsk</h2>
                    <h2 className="prg-section-title2">Pharmacy Distribution</h2>
                    <p className="prg-section-description">
                    <b> MedAsk </b> and its <b> Pharmacy </b>  Distribution services to ensure timely delivery of medications to healthcare facilities. Our network prioritizes efficiency, accuracy, and quality, ensuring compliance with regulatory requirements while maintaining supply chain integrity.
Dedicated to supporting the healthcare system, we provide seamless access to essential medications, allowing healthcare providers to focus on patient care.

                    </p>
                </div>
                <div className="prg-image-content">
                    <img src={rectangle} alt="Pharmacy distribution" className="prg-main-image2" />
                    <img src={smallImage} alt="Pharmacy team working together" className="prg-small-image2" />
                </div>
            </Container>
        </div>
    );
};

export default Phsection2;
