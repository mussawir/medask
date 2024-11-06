// LatestNews.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsArticle {
    id: number;
    n_paragraph: string;
}

const LatestNews: React.FC = () => {
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentArticle, setCurrentArticle] = useState<NewsArticle | null>(null);
    const [newContent, setNewContent] = useState<string>('');
    const [newArticleContent, setNewArticleContent] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<NewsArticle[]>('http://localhost:8000/api/latestnews');
                setNews(response.data);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (article: NewsArticle) => {
        setCurrentArticle(article);
        setNewContent(article.n_paragraph);
    };

    const handleUpdate = async () => {
        if (currentArticle) {
            try {
                await axios.put(`http://localhost:8000/api/latestnews/${currentArticle.id}`, {
                    n_paragraph: newContent,
                });
                setNews(prevNews =>
                    prevNews.map(article =>
                        article.id === currentArticle.id ? { ...article, n_paragraph: newContent } : article
                    )
                );
                setCurrentArticle(null);
                setNewContent('');
            } catch (err) {
                setError('Failed to update article');
            }
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8000/api/latestnews/${id}`);
            setNews(prevNews => prevNews.filter(article => article.id !== id));
        } catch (err) {
            setError('Failed to delete article');
        }
    };

    const handleAddArticle = async () => {
        if (newArticleContent.trim() === '') return;
        try {
            const response = await axios.post('http://localhost:8000/api/latestnews', {
                n_paragraph: newArticleContent,
            });
            setNews(prevNews => [...prevNews, response.data]);
            setNewArticleContent('');
        } catch (err) {
            setError('Failed to add new article');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error}</p>;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Latest News</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Add a new article"
                    value={newArticleContent}
                    onChange={(e) => setNewArticleContent(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleAddArticle} style={styles.button}>Add Article</button>
            </div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>ID</th>
                        <th style={styles.th}>Content</th>
                        <th style={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map(article => (
                        <tr key={article.id}>
                            <td style={styles.td}>{article.id}</td>
                            <td style={styles.td}>
                                {currentArticle && currentArticle.id === article.id ? (
                                    <input
                                        type="text"
                                        value={newContent}
                                        onChange={(e) => setNewContent(e.target.value)}
                                        style={{ ...styles.editInput, width: 'calc(100% - 20px)' }}
                                    />
                                ) : (
                                    article.n_paragraph
                                )}
                            </td>
                            <td style={styles.actions}>
                                {currentArticle && currentArticle.id === article.id ? (
                                    <button onClick={handleUpdate} style={styles.button}>Update</button>
                                ) : (
                                    <button onClick={() => handleEdit(article)} style={styles.button}>Edit</button>
                                )}
                                <button onClick={() => handleDelete(article.id)} style={styles.button}>Delete</button>
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
        width: '300px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        transition: 'border 0.3s',
    } as React.CSSProperties,
    button: {
        padding: '5px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '60px',
        transition: 'background-color 0.3s',
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
    editInput: {
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    } as React.CSSProperties,
    td: {
        padding: '5px',
    } as React.CSSProperties,
    th: {
        textAlign: 'start',
    } as React.CSSProperties,
};

export default LatestNews;
