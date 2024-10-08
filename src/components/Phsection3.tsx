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
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          in some form, by injected humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
          in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
          making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
        </p>
      </div>
    </div>
  );
};

export default Phsection3;
