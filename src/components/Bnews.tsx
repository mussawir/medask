import React, { useState, useEffect } from 'react';
import '../App.css';
import play1 from '../images/play1.svg'; // Left button
import play2 from '../images/play2.svg'; // Right button
import tickrounded from '../images/tickrounded.png';
import arrowleft from '../images/arrowleft.png';
import arrowright from '../images/arrowright.png';

const Bnews: React.FC = () => {
    // Define the texts for the buttons
    const texts = [
        "Breaking News: MedAsk is launching its new Home Health Services this month!",
        "MedAsk expands its pharmacy network to provide better access to medications for patients.",
        "Upcoming: MedAsk will be participating in the Health Asia Expo this October 2024.",
        "MedAsk's commitment to patient care continues with the introduction of advanced diagnostic services.",
        "Our core values remain strong: Compassion, Integrity, Hard Work, Care & Trust."
    ];

    // State to manage the current text index
    const [currentIndex, setCurrentIndex] = useState(0); // Default to the first text
    const [slide, setSlide] = useState(false); // State for slide animation

    // Handlers for button clicks
    const handleLeftClick = () => {
        setSlide(true); // Set slide state to true
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
    };

    const handleRightClick = () => {
        setSlide(true); // Set slide state to true
        setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
    };

    // Auto change text every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(true); // Set slide state to true
            setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
        }, 10000); // Change every 10 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [texts.length]);

    // Reset slide state after animation
    useEffect(() => {
        if (slide) {
            const timer = setTimeout(() => {
                setSlide(false);
            }, 500); // Duration matches the CSS transition

            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [slide]);

    return (
            <>
        <div className='bottomSec4smallscreen'>
                <div className='text-boxsmallscreendiv'>
                <button className='firstbtnofbottomSec4smallscreen'>
            <span className='btn-textofsec4bottomsmallscreen'>
            Latest News:</span>
                </button>
                <div className={`text-boxsmallscreen ${slide ? 'slide-left' : ''}`}>
                    <p style={{width: '350px'}}>{texts[currentIndex]}</p> {/* Display the current text */}
                    <div className='btn-g'>
                    <div className='btn-box-1' onClick={handleLeftClick}>
                        <img className='imgnonoesmallscreen' src={arrowleft} alt="Previous" />
                    </div>
                    <div className='btn-box-2' onClick={handleRightClick}>
                        <img className='imgnonoesmallscreen' src={arrowright} alt="Next" />
                    </div>
                </div>
                </div>
                </div>
        </div>
        <div className='center'>
            <div className='box12'>
                <div className='box13'>
                  <h1 className='h12'>Latest News:</h1>
                </div>
                <div className={`text-box  ${slide ? 'slide-left' : ''}`}>
                    <p >{texts[currentIndex]}</p> {/* Display the current text */}
                </div>
                <div className='btn-g'>
                    <div className='btn-box-1' onClick={handleLeftClick}>
                        <img className='imgnonoe' src={play1} alt="Previous" />
                    </div>
                    <div className='btn-box-2' onClick={handleRightClick}>
                        <img className='imgnonoe' src={play2} alt="Next" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Bnews;