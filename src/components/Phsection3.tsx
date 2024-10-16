import React from 'react';
import '../App.css'; // Add your styles here
import phsec3mainImage from '../images/phsec3mainImage.png';
import phsection3Image2 from '../images/phsection3Image2.png';

const Phsection3: React.FC = () => {
  return (
    <div className="prag-Phsection3">
      {/* Image Section */}
      <div className="prag-image-section3">
      <img src={phsec3mainImage} alt="Healthcare professionals" className="prag-image-item13" />
      <img src={phsection3Image2} alt="Discussion in healthcare" className="prag-image-item23" />
      </div>

      {/* Text Section */}
      <div className="prag-text-section3">
        <h1 className="prag-brand-name3 ibrtitle1">MedAsk</h1>
        <h2 className="prag-section-title3 subtitle">Retail Pharmacies</h2>
        <p className="prag-section-description3">
        Our retail pharmacies are dedicated to accessible, high-quality healthcare products and services. We offer prescription medications, over-the-counter drugs, and expert advice from qualified pharmacists.
We prioritize our customers, ensuring personalized care whether you’re filling prescriptions or seeking health consultations. With services like prescription refills and wellness programs, we strive to make healthcare convenient and affordable.
        </p>
      </div>
    </div>
  );
};

export default Phsection3;
