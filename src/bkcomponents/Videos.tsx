import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Video {
    id: number;
    video_url: string;
    caption: string;
}

const Videos: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [editingVideo, setEditingVideo] = useState<Video | null>(null);
    const [videoUrl, setVideoUrl] = useState<string>('');
    const [caption, setCaption] = useState<string>('');

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get<Video[]>('http://localhost:8000/api/videos');
                setVideos(response.data);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching videos.');
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const handleAddOrUpdate = async () => {
        try {
            if (editingVideo) {
                // Update video
                await axios.put(`http://localhost:8000/api/videos/${editingVideo.id}`, {
                    video_url: videoUrl,
                    caption,
                });
                setVideos(prevVideos =>
                    prevVideos.map(video =>
                        video.id === editingVideo.id ? { ...video, video_url: videoUrl, caption } : video
                    )
                );
            } else {
                // Add new video
                const response = await axios.post('http://localhost:8000/api/videos', {
                    video_url: videoUrl,
                    caption,
                });
                setVideos(prevVideos => [...prevVideos, response.data]);
            }
            resetForm();
        } catch (err) {
            setError('Failed to save video');
        }
    };

    const handleEdit = (video: Video) => {
        setEditingVideo(video);
        setVideoUrl(video.video_url);
        setCaption(video.caption);
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8000/api/videos/${id}`);
            setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
        } catch (err) {
            setError('Failed to delete video');
        }
    };

    const resetForm = () => {
        setVideoUrl('');
        setCaption('');
        setEditingVideo(null);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error}</p>;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Video Management Dashboard</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Video URL"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleAddOrUpdate} style={styles.button}>
                    {editingVideo ? 'Update Video' : 'Add Video'}
                </button>
                {editingVideo && <button onClick={resetForm} style={styles.cancelButton}>Cancel</button>}
            </div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Caption</th>
                        <th style={styles.th}>URL</th>
                        <th style={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {videos.map(video => (
                        <tr key={video.id}>
                            <td style={styles.td}>{video.caption}</td>
                            <td style={styles.td}>
                                <a href={video.video_url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                                    {video.video_url}
                                </a>
                            </td>
                            <td style={styles.actions}>
                                <button onClick={() => handleEdit(video)} style={styles.button}>Edit</button>
                                <button onClick={() => handleDelete(video.id)} style={styles.button}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Internal styles
const styles = {
    container: {
        width: '100%',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        marginTop: '20px',
        boxSizing: 'border-box' as 'border-box',
    } as React.CSSProperties,
    title: {
        textAlign: 'center' as 'center',
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#333',
    } as React.CSSProperties,
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    } as React.CSSProperties,
    input: {
        padding: '10px',
        width: '200px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        transition: 'border 0.3s',
    } as React.CSSProperties,
    button: {
        padding: '10px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        marginLeft: '5px',
    } as React.CSSProperties,
    cancelButton: {
        padding: '10px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '5px',
    } as React.CSSProperties,
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '5px',
        textAlign: 'start',
    } as React.CSSProperties,
    actions: {
        display: 'flex',
        gap: '5px',
    } as React.CSSProperties,
    td: {
        padding: '5px',
    } as React.CSSProperties,
    th: {
        textAlign: 'start',
    } as React.CSSProperties,
};

export default Videos;
