import React, { useState } from 'react';
import video1 from '../images/video1.mp4';
import video2 from '../images/video2.mp4';
import video3 from '../images/video3.mp4';
// import thumbnail1 from '../images/rigthvid.png'; // Add your thumbnail images
// import thumbnail2 from '../images/biv.png';
// import thumbnail3 from '../images/leftimg.png';
import '../App.css';
import pngleft from '../images/vidleft.png';
import pngrig from '../images/vidrigth.png';
import VideoText from './VideoText'; // Import the VideoText component

const VideoCarousel = () => {
    const videos = [video1, video2, video3]; // Imported videos
    // const thumbnails = [thumbnail1, thumbnail2, thumbnail3]; // Thumbnails for the videos

    const [mainVideoIndex, setMainVideoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false); // Track whether the video is playing

    // Array of text corresponding to each video
    const videoTexts = [
        'MedAsk is committed to excellence in healthcare and setting a brand name that is cost effective, high quality and commensurate with ethical international standards for the general public.',
        'Our mission is to bring healthcare solutions to every corner of the world, leveraging technology and innovation to make medical assistance more accessible and reliable.',
        'By working closely with healthcare professionals, we strive to create a network of trust and expertise that benefits both patients and practitioners globally.'
    ];

    const switchVideos = (direction: 'left' | 'right') => {
        setIsPlaying(false); // Stop current video before switching
        if (direction === 'left') {
            setMainVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
        } else {
            setMainVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
        }
    };

    const getLeftIndex = () => (mainVideoIndex === 0 ? videos.length - 1 : mainVideoIndex - 1);
    const getRightIndex = () => (mainVideoIndex === videos.length - 1 ? 0 : mainVideoIndex + 1);

    const playSmallVideo = (index: number) => {
        setMainVideoIndex(index); // Set the main video to the clicked small video
        setIsPlaying(true); // Start playing the new video
    };

    return (
        <>
            <div className="video-carousel">
                <div className="small-video left" onClick={() => playSmallVideo(getLeftIndex())}>
                    <video
                        src={videos[getLeftIndex()]}
                        className='vidclass'
                        // poster={thumbnails[getLeftIndex()]}
                        muted // Muted to allow autoplay if needed
                    />
                </div>

                <div className="main-video">
                    <video
                        className="mainvid"
                        src={videos[mainVideoIndex]}
                        width="100%"
                        controls
                        // poster={thumbnails[mainVideoIndex]}
                        onEnded={() => switchVideos('right')} // Automatically switch to next video when current ends
                        onPause={() => setIsPlaying(false)} // Track if video is paused
                        onPlay={() => setIsPlaying(true)} // Track if video is playing
                    />
                </div>

                <div className="small-video right" onClick={() => playSmallVideo(getRightIndex())}>
                    <video
                        src={videos[getRightIndex()]}
                         className='vidclass'
                        // poster={thumbnails[getRightIndex()]}
                        muted // Muted to allow autoplay if needed
                    />
                </div>

                <div className="controls">
                    <button onClick={() => switchVideos('left')}>
                        <img width="30px" height="25px" src={pngleft} alt="Left" />
                    </button>
                    <button onClick={() => switchVideos('right')}>
                        <img width="30px" height="25px" src={pngrig} alt="Right" />
                    </button>
                </div>
            </div>

            {/* Pass the specific text for the currently playing video */}
            <VideoText text={videoTexts[mainVideoIndex]} />
        </>
    );
};

export default VideoCarousel;
