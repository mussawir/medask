import React from 'react'
import BrandSlider from './BrandSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NovartisLogo from '../images/Novartis.png';
import SanofiLogo from '../images/Sanofi.png';
import PfizerLogo from '../images/Pfizer.png';
import AbbVieLogo from '../images/AbbVie.png';
import SinovacLogo from '../images/Sinovac.png';
import MerckLogo from '../images/Merck.png';
function Section3() {
    const brands = [
        { name: "Novartis", logo: NovartisLogo },
        { name: "Sanofi", logo: SanofiLogo },
        { name: "Pfizer", logo: PfizerLogo },
        { name: "AbbVie", logo: AbbVieLogo },
        { name: "Sinovac", logo: SinovacLogo },
        { name: "Merck", logo: MerckLogo }, 
    ];
  return (
    <div>
        <BrandSlider brands={brands}/>
    </div>
  )
}

export default Section3