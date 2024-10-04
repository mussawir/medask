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
                    <h2 className="prg-brand-name-small2">Medask</h2>
                    <h2 className="prg-section-title2">Pharmacy Distribution</h2>
                    <p className="prg-section-description">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
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
