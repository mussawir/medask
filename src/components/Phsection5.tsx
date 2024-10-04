import React from 'react';
import '../App.css'; 
import phsec5mainImage from '../images/phsection5.png'; 
import phsection5Image2 from '../images/phsection51.png';
import phsection5Image3 from '../images/phsection53.png';

const Phsection5: React.FC = () => {
  return (
    <div className="phsection5">
              <h1 className="brand-name5 ibrtitle1">Medask</h1>
              <h2 className="section-title5">Commercial-Flagship Pharmacies</h2>
      {/* Image Section */}
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

      {/* Text Section */}
      <div className="text-section5">

        <p className="section-description5">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>
      </div>
    </div>
  );
};

export default Phsection5;
