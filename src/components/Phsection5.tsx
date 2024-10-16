import React from 'react';
import '../App.css'; 
import phsec5mainImage from '../images/phsection5.png'; 
import phsection5Image2 from '../images/phsection51.png';
import phsection5Image3 from '../images/phsection53.png';

const Phsection5: React.FC = () => {
  return (
    <div className="phsection5">
     
      {/* Image Section */}
   

      {/* Text Section */}

      <div className="image-section5">
        <div className="image-item-wrap">
          <img src={phsec5mainImage} alt="Healthcare professionals" className="image-item-main" />
        </div>
        <div className="image-item-wrap">
          <img src={phsection5Image2} alt="Discussion in healthcare" className="image-item-sub1" />
        </div>
        <div className="image-item-wrap">
          <img src={phsection5Image3} alt="Healthcare team meeting" className="image-item-sub2" />
        </div>
      </div>

      <div className="text-section5">
      <div>
              <h1 className="brand-name5 ibrtitle1">MedAsk</h1>
              <h2 className="section-title5">Commercial-Flagship Pharmacies</h2>
              </div>
        <p className="section-description5">
        We are launching our Commercial Flagship Pharmacies, designed to set new standards in healthcare retail. These locations will feature an extensive selection of services, including digital prescription management and health screenings.
Located in key areas, our flagship pharmacies will serve as healthcare hubs, combining convenience with exceptional service. We remain committed to accessible, high-quality healthcare for all.
        </p>
      </div>
    </div>
  );
};

export default Phsection5;
