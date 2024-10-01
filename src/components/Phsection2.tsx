import React from 'react';
import './Phsection2.css';
import rectangle from '../images/mainImage.png';
import smallImage from '../images/smallImage.png';
import { Container } from '@mui/material';
import '../App.css';

const Phsection2: React.FC = () => {
    return (
        <div className='pharmaciessecondsec'>
            <Container className="distribution-section">
                <div className="PHcenter">
                <div className="text-contentph">
                    <h2 className="brand-name-small">Medask</h2>
                    <h2 className="section-title">Pharmacy Distribution</h2>
                    <p className="section-description">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                    </p>
                </div>
                <div className="image-content">
                    <img src={rectangle} alt="Pharmacy distribution" className="main-image" />
                    <img src={smallImage} alt="Pharmacy team working together" className="small-image" />
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Phsection2;