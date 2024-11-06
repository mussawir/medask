import React, { useEffect } from 'react';
import LatestNews from './LatestNews';
import { useNavigate } from 'react-router-dom';
import VideoCarousel from './Videos';
import ART from './article';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is authenticated
        const isLoggedIn = localStorage.getItem('user'); // Assuming you're storing user info in local storage

        if (!isLoggedIn) {
            // Redirect to login if not authenticated
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Dashboard</h1>
            
            {/* Latest News Section */}
            <div style={styles.section}>
                <LatestNews />
            </div>
            
            {/* Videos Section */}
            <div style={styles.section}>
                <VideoCarousel />
            </div>
       
            <div style={styles.section}>
                <ART />
            </div>
        </div>
    );
};

// Internal styles for Dashboard
const styles = {
    container: {
        width: '100%',
        fontFamily: 'Arial, sans-serif',
        padding: '50px 20px',
        boxSizing: 'border-box' as 'border-box',
    },
    title: {
        textAlign: 'center' as 'center',
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#333',
    },
    section: {
        marginBottom: '40px',
    },
};

export default Dashboard;
