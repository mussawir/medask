import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Iconreadmore from '../images/Group23.png';
import greenhr from '../images/greenhr.png';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faArrowDown, faHome, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import doctornursespecialequipment from '../images/doctornursespecialequipment.png';


function Section1() { 
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });

    };
    const location = useLocation(); // Get the current location
    const activePath = location.pathname; // Get the current path

  return (
    <div className='herocontent BGofFirstSection'>
    
         <div className="scroll-container" >
        
                    <a href="https://www.facebook.com" className="social-icon fb-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.twitter.com" className="social-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.linkedin.com" className="social-icon">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://www.instagram.com" className="social-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <div className="divider"></div>

                    <div className="scroll-down-text">Scroll Down</div>
                    <button className="scroll-button" onClick={scrollToBottom}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>
               <div className="text-content">
                
                        <h1 className="welcome-headline Ali-medaskHeading">Welcome to MedAsk</h1>
                        <h1 className="medask-headline1 Ali-subtitile">Medicine & Care</h1>
                        <h1 className="medask-headline Ali-subtitile">Ask Anytime</h1>
                        <hr className="hr-line" />
                        <img src={greenhr} className="greenhr" />
                        <p className="welcome-para1">Welcome to MedAsk, your trusted healthcare partner dedicated to delivering high-quality medical services.</p>
                        {/* <p className="welcome-para">be distracted by the readable content of a page.</p> */}
                        <a href="#" className='read-moreBtn'>Read More <img src={Iconreadmore} alt="read more" /></a>
                    </div>
                    {/* <img className="icon2" src={icon2} alt="doctornurse"  /> */}
                    {/* <div>
                   
                        <img src={doctornursespecialequipment} alt="doctor" className="doctornursespecialequipment" />
                    </div> */}
    </div>
  )
}

export default Section1