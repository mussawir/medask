import React, { useState, useEffect } from 'react';
import '../App.css';
import play1 from '../images/play1.svg'; // Left button
import play2 from '../images/play2.svg'; // Right button
import arrowleft from '../images/arrowleft.png';
import arrowright from '../images/arrowright.png';
import axios from 'axios'; // Import axios

const Bnews: React.FC = () => {
    const [texts, setTexts] = useState<string[]>([]); // State to store news articles
    const [currentIndex, setCurrentIndex] = useState(0); // Current text index
    const [slide, setSlide] = useState(false); // State for slide animation

    // Fetch news articles from the database
    const fetchNews = async () => {
        try {
            const response = await axios.get<{ id: number; n_paragraph: string }[]>('http://localhost:8000/api/latestnews'); // Adjust the endpoint as needed
            // Extract the n_paragraph from each object and set it to the texts state
            const newsTexts = response.data.map(item => item.n_paragraph);
            setTexts(newsTexts); // Set fetched articles to state
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews(); // Fetch news articles on component mount
    }, []);

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
                        <span className='btn-textofsec4bottomsmallscreen'>Latest News:</span>
                    </button>
                    <div className={`text-boxsmallscreen ${slide ? 'slide-left' : ''}`}>
                        <p style={{ width: '350px' }}>{texts[currentIndex]}</p> {/* Display the current text */}
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
                    <div className={`text-box ${slide ? 'slide-left' : ''}`}>
                        <p>{texts[currentIndex]}</p> {/* Display the current text */}
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
