import React from 'react';
import './Footer.css'; // Add custom styles for the footer
import LOGO1 from '../images/LOGO1.png';
import Rectangle from '../images/Rectangle.png';
import Frame1 from '../images/Frame1.svg';
import Email from '../images/Email.svg';
import Vector from '../images/Vector.png';
import Group20 from '../images/Group20.svg';
import Group21 from '../images/Group21.svg';
import Group22 from '../images/Group22.svg';
import phonecolor from '../images/phonecolor.png';
import emailcolor from '../images/emailcolor.png';

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="footer-uls">
        <ul className='footer-ul1'>
          <li>
            <img src={LOGO1} className="App-logo1" alt="logo" />
          </li>
          <li>
            <div style={{ display: 'flex', margin: '18px', gap: '12px' }}>
              <img src={Group20} alt="Group20" />
              <img src={Group21} alt="Group21" />
              <img src={Group22} alt="Group22" />
            </div>
          </li>
        </ul>
        <img src={Vector} alt="Vector" className="hide-on-sm" />
 
        <ul className='footer-ul1'>
          <li>
            <h3 className='footerheadlinks'>Quick Links</h3>
          </li>
          <li className="footer-links">
            <img src={Rectangle} className='RectangleFooter' alt="Rectangle" />
            <a href="/privacy">About Us</a>
          </li>
          <li className='footer-links'>
          <img src={Rectangle} className='RectangleFooter' alt="Rectangle" />
          <a href="/privacy">Corporate Panel</a>
          </li>
          <li className='footer-links'>
          <img src={Rectangle} className='RectangleFooter' alt="Rectangle" />
          <a href="/privacy">Lab Software (Staff Only)</a>
          </li>
          <li className='footer-links'>
          <img src={Rectangle} className='RectangleFooter' alt="Rectangle" />
          <a href="/privacy">Mobile App Portal (Staff Only)</a>
          </li>
        </ul>
        <img src={Vector} alt="Vector" className="hide-on-sm" />

        <ul className='footer-ul1'>
          <li>
            <h3 className='footerheadlinks'>Popular Links</h3>
          </li>
          <li className="footer-links">
          <img src={Rectangle} className='RectangleFooter' alt="Rectangle" />
          <a href="/privacy">Location</a>
          </li>
          <li className='footer-links'>
          <img src={Rectangle} className='RectangleFooter' alt="Rectangle" />
          <a href="/privacy">Our Vision</a>
          </li>
          <li className='footer-links'>
          <img src={Rectangle} className='RectangleFooter' alt="Rectangle" />
          <a href="/privacy">Careers</a>
          </li>
          <li className='footer-links'>
          <img src={Rectangle} className='RectangleFooter' alt="Rectangle" />
          <a href="/privacy">Contact Us</a>
          </li>
        </ul>

        <img src={Vector} alt="Vector" className="hide-on-sm" />

        <ul className='footer-ul1'>
          <li>
            <h3 className='footerheadlinks'>Contact</h3>
          </li>
          <li className='footer-links'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
              <img src={phonecolor} alt="phonecolor" className="EmailTopImginftr" />
              </div>
              <div style={{ marginLeft: '4px' }}>
                <h5 style={{ margin: '0' }}>Call Us :</h5>
                <a href="/privacy">UAN 111-633-275</a>
              </div>
            </div>
          </li>
          <li className='footer-links'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                                <img src={emailcolor} alt="emailcolor" className="EmailTopImginftr" />
                            </div>
              <div style={{ marginLeft: '4px' }}>
                <h5 style={{ margin: '0' }}>Email Us :</h5>
                <a href="/privacy">info@medask.com.pk</a>
              </div>
            </div>
          </li>
          <li className='footer-links'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <img src={Frame1} alt="Rectangle" />
              </div>
              <div style={{ marginLeft: '4px' }}>
                <h5 style={{ margin: '0' }}>Location:</h5>
                <a href="/privacy">1st Floor, AWT Plaza, Mall Road</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
