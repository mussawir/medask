import React from 'react'
import './Section4.css'
import image1Sec3 from '../images/image1Sec3.png'
import image2Sec3 from '../images/image2Sec3.png'
import image3Sec3 from '../images/image3Sec3.png'
import { Container, Typography } from '@mui/material';
import Custombtn from './Custombtn';
import './Custombtn.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import tickrounded from '../images/tickrounded.png';
function Section4() {
  return (
<div className='Section4Bg'>
<Container maxWidth="lg">
    <div className='Section4Content' content='contained'>
        <div className='Section4Images'>
          <div className='Section4Imagestop'>
            <img src={image1Sec3} alt="image1sec3" />
             <img src={image3Sec3} alt="image3sec3" />
          </div>
            <img src={image2Sec3} alt="image2sec3" className='image2Sec3' />
       </div>
        <div className='Section4Textright'>
            <h2 className='WhoWeAre'>Who We Are</h2>
            <h1 className='EDMedaskMessage'>ED Medask Message</h1>
            <Custombtn/>
            <p className='EDMedaskMessagePara'>MedAsk is a commercial entity that plans to work on the idea of public-private partnership in order to expand and assist the medical services. It aims to initiate a number of projects in phases that will generate capacity and profits which can be utilized to boost the resources of the Medical Corps and also the general public.</p>
            <p className='EDMedaskMessagePara'>Our mission is to undertake commercial ventures related to healthcare and allied fields in order to generate resources for Healthcare while striving to emerge as a leading national healthcare provider. Our core values are:</p>
        </div>
    </div>

    <div className='Section4Contentsmallscreen' content='contained'>

        <div className='Section4Textright'>
            <h2 className='WhoWeAre'>Who We Are</h2>
            <h1 className='EDMedaskMessage'>ED Medask Message</h1>
            <Custombtn/>
        </div>
        <div className='Section4Images'>
          <div className='Section4Imagestop'>
            <img src={image1Sec3} alt="image1sec3" className='Section4ImageOne' />
             <img src={image3Sec3} alt="image3sec3" className='Section4ImageOne' />
          </div>
            <img src={image2Sec3} alt="image2sec3" className='image2Sec3' />
       </div>
       <p className='EDMedaskMessagePara'>MedAsk is a commercial entity that plans to work on the idea of public-private partnership in order to expand and assist the medical services. It aims to initiate a number of projects in phases that will generate capacity and profits which can be utilized to boost the resources of the Medical Corps and also the general public.</p>
       <p className='EDMedaskMessagePara'>Our mission is to undertake commercial ventures related to healthcare and allied fields in order to generate resources for Healthcare while striving to emerge as a leading national healthcare provider. Our core values are:</p>
    </div>

   <div className='Section4BottomBtns'>
   <button className='firstbtnofbottomSec4'>
      <span className='btn-textofsec4bottom'>
        <img src={tickrounded} alt="tickrounded" />
        Compassion</span>
    </button>
    <button className='SecondbtnofbottomSec4'>
      <span className='btn-textofsec4bottom'><img src={tickrounded} alt="tickrounded" />Hardwork</span>
    </button>
    <button className='firstbtnofbottomSec4'>
      <span className='btn-textofsec4bottom'><img src={tickrounded} alt="tickrounded" />Integrity</span>
    </button>
    <button className='SecondbtnofbottomSec4'>
      <span className='btn-textofsec4bottom'><img src={tickrounded} alt="tickrounded" />Care & Trust</span>
    </button>
   </div>

    
    </Container>
 </div>
  )
}

export default Section4