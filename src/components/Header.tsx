import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png'; // Ensure the logo path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faArrowDown, faHome, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import Iconreadmore from '../images/Group23.png';
import greenhr from '../images/greenhr.png';
import { Container } from '@mui/material';
import Drawer from './Drawer';
import phonetopImg from '../images/phonetopImg.png';
import EmailTopImg from '../images/EmailTopImg.png';
import greyverticalHrNav from '../images/greyverticalHrNav.png';
import doctornursespecialequipment from '../images/doctornursespecialequipment.png';
import './Header.css';
import './aboutusSec1.css'
import icon2 from '../images/TwCbOK.png'
import AboutUsPage from '../Pages/AboutUsPage';
const Header: React.FC = () => {
    // Function to scroll to the bottom of the page
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });

    };
    const location = useLocation(); // Get the current location
    const activePath = location.pathname; // Get the current path

    return (

<>
<nav className="navbar ">
{/* <img className="icon2" src={icon2} alt="doctornurse"  /> */}
                <div className="navbar-top">
                    <div className="logo-top">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>
                    <div className="menu-icon">
                        <Drawer />
                    </div>

                    {/* Added Top Info Section */}
                    <div className="top-info">
                        <Link to="/" className="nav-link-top1">
                            <span className="icon-background">
                                <img src={phonetopImg} alt="phonetopImg" />
                            </span>
                            Call Us: <b>1300 950073</b>
                        </Link>
                        <Link to="/" className="nav-link-top">
                            <span className="icon-background">
                                <img src={EmailTopImg} alt="EmailTopImg" />
                            </span>
                            <a className='outlinenone' href="mailto:info@medask.com.pk" style={{ color: '170C40', textDecoration: 'none' }}>info@medask.com.pk</a>
                        </Link>
                        <Link to="/" className="nav-link available-info" id='available-info'>
                            We’re Available: Monday - Sunday (24/7)
                        </Link>
                    </div>
                    {/* End of Top Info Section */}

                    <ul className="nav-linkssecond">
            <li>
                <Link to="/" className={`nav-link ${activePath === '/' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faHome} /> {/* Home Icon */}
                    Home
                </Link>
            </li>
            <img src={greyverticalHrNav} alt="greyverticalHrNav" />
            <li>
                <Link to="/pharmacies" className={`nav-link ${activePath === '/pharmacies' ? 'active' : ''}`}>
                    Pharmacies
                </Link>
            </li>
            <img src={greyverticalHrNav} alt="greyverticalHrNav" />
            <li>
                <Link to="/medical-tourism" className={`nav-link ${activePath === '/medical-tourism' ? 'active' : ''}`}>
                    Medical Tourism
                </Link>
            </li>
            <img src={greyverticalHrNav} alt="greyverticalHrNav" />
            <li>
                <Link to="/aboutus"  className={`nav-link ${activePath === '/about-us' ? 'active' : ''}`}>
                    About Us
                </Link>
            </li>
            <img src={greyverticalHrNav} alt="greyverticalHrNav" />
            <li>
                <Link to="/contact" className={`nav-link ${activePath === '/contact' ? 'active' : ''}`}>
                    Contact
                </Link>
            </li>
            <li>
                <Link to="/contact" className="nav-link partner-link">
                    <span className="icon-background">
                        <FontAwesomeIcon icon={faBusinessTime} />
                    </span>
                    Become our business partner
                </Link>
            </li>
        </ul>
                </div>
            </nav>
</>

    );
};

export default Header;