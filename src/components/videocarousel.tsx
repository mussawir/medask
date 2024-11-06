import React, { useState, useEffect } from 'react';
import '../App.css';
import pngleft from '../images/vidleft.png';
import pngrig from '../images/vidrigth.png';
import VideoText from './VideoText'; // Import the VideoText component

// Define the Video interface
interface Video {
    id: number;   
    video_url: string;  // Changed to video_url to match your data structure
    caption: string; 
}

const VideoCarousel: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [mainVideoIndex, setMainVideoIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/videos');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Video[] = await response.json();
                setVideos(data);
            } catch (error) {
                console.error('Error fetching videos:', error);
                setError('Failed to load videos. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const switchVideos = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setMainVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
        } else {
            setMainVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
        }
    };

    const getLeftIndex = () => (mainVideoIndex === 0 ? videos.length - 1 : mainVideoIndex - 1);
    const getRightIndex = () => (mainVideoIndex === videos.length - 1 ? 0 : mainVideoIndex + 1);

    const playSmallVideo = (index: number) => {
        setMainVideoIndex(index);
    };

    if (loading) {
        return <div>Loading videos...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="video-carousel">
                {/* Left Small Video */}
                <div className="small-video left" onClick={() => playSmallVideo(getLeftIndex())}>
                    <iframe
                        src={videos[getLeftIndex()]?.video_url.replace("youtu.be", "youtube.com/embed").split("?")[0]} // Use embedded URL
                        className='vidclass'
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        title={`Small Video ${getLeftIndex()}`}
                    />
                </div>

                {/* Main Video */}
                <div className="main-video">
                    <iframe
                        src={videos[mainVideoIndex]?.video_url.replace("youtu.be", "youtube.com/embed").split("?")[0]} // Use embedded URL
                        className="mainvid"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen
                        title={`Main Video ${mainVideoIndex}`}
                    />
                </div>

                {/* Right Small Video */}
                <div className="small-video right" onClick={() => playSmallVideo(getRightIndex())}>
                    <iframe
                        src={videos[getRightIndex()]?.video_url.replace("youtu.be", "youtube.com/embed").split("?")[0]} // Use embedded URL
                        className='vidclass'
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        title={`Small Video ${getRightIndex()}`}
                    />
                </div>

                {/* Navigation Controls */}
                <div className="controls">
                    <button onClick={() => switchVideos('left')}>
                        <img width="30px" height="25px" src={pngleft} alt="Left" />
                    </button>
                    <button onClick={() => switchVideos('right')}>
                        <img width="30px" height="25px" src={pngrig} alt="Right" />
                    </button>
                </div>
            </div>

            {/* Display the caption for the currently playing video */}
            <VideoText text={videos[mainVideoIndex]?.caption} />
        </>
    );
};

export default VideoCarousel;
