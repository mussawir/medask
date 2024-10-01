import React from 'react';
import './Phsection3.css'; // Add your styles here
import phsec5mainImage from '../images/phsection5.png';
import phsection5Image2 from '../images/phsection51.png';

const Phsection3: React.FC = () => {
  return (
    <div className="Phsection3">
      {/* Image Section */}
      <div className="image-section">
      <img src={phsec5mainImage} alt="Healthcare professionals" className="image-item1" />
      <img src={ phsection5Image2} alt="Discussion in healthcare" className="image-item2" />
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h1 className="brand-name">Medask</h1>
        <h2 className="section-title">Commercial-Flagship Pharmacies</h2>
        <p className="section-description">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>
      </div>
    </div>
  );
};

export default Phsection3;