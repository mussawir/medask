import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
    id: number;
    title: string;
    date: string;            // New field for date
    description: string;     // New field for description
    link: string;            // New field for link
    image: string;           // New field for image
    dateColor: string;       // New field for date color
}

const AdminDashboard: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
    const [newArticle, setNewArticle] = useState<Article>({
        id: 0,                  // Temporary ID for new articles
        title: '',
        date: '',
        description: '',
        link: '',
        image: '',
        dateColor: ''
    });

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get<Article[]>('http://localhost:8000/api/articles'); // Adjust this endpoint if needed
                setArticles(response.data);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching articles.');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const handleEdit = (article: Article) => {
        setCurrentArticle(article);
        setNewArticle(article); // Set the article to the newArticle state for editing
    };

    const handleUpdate = async () => {
        if (currentArticle) {
            try {
                await axios.put(`http://localhost:8000/api/articles/${currentArticle.id}`, newArticle);
                setArticles(prevArticles =>
                    prevArticles.map(article =>
                        article.id === currentArticle.id ? { ...article, ...newArticle } : article
                    )
                );
                setCurrentArticle(null);
                setNewArticle({
                    id: 0,
                    title: '',
                    date: '',
                    description: '',
                    link: '',
                    image: '',
                    dateColor: ''
                });
            } catch (err) {
                setError('Failed to update article');
            }
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8000/api/articles/${id}`);
            setArticles(prevArticles => prevArticles.filter(article => article.id !== id));
        } catch (err) {
            setError('Failed to delete article');
        }
    };

    const handleAddArticle = async () => {
        if (newArticle.title.trim() === '' || newArticle.description.trim() === '') return;
        try {
            const response = await axios.post('http://localhost:8000/api/articles', newArticle);
            setArticles(prevArticles => [...prevArticles, response.data]);
            setNewArticle({
                id: 0,
                title: '',
                date: '',
                description: '',
                link: '',
                image: '',
                dateColor: ''
            });
        } catch (err) {
            setError('Failed to add new article');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching articles: {error}</p>;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Manage Articles</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Date"
                    value={newArticle.date}
                    onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newArticle.description}
                    onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Link"
                    value={newArticle.link}
                    onChange={(e) => setNewArticle({ ...newArticle, link: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newArticle.image}
                    onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Date Color"
                    value={newArticle.dateColor}
                    onChange={(e) => setNewArticle({ ...newArticle, dateColor: e.target.value })}
                    style={styles.input}
                />
                <button onClick={handleAddArticle} style={styles.button}>Add Article</button>
            </div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>ID</th>
                        <th style={styles.th}>Title</th>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Description</th>
                        <th style={styles.th}>Link</th>
                        <th style={styles.th}>Image</th>
                        <th style={styles.th}>Date Color</th>
                        <th style={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id}>
                            <td style={styles.td}>{article.id}</td>
                            <td style={styles.td}>
                                {currentArticle && currentArticle.id === article.id ? (
                                    <input
                                        type="text"
                                        value={newArticle.title}
                                        onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                                        style={{ ...styles.editInput, width: 'calc(100% - 20px)' }}
                                    />
                                ) : (
                                    article.title
                                )}
                            </td>
                            <td style={styles.td}>
                                {currentArticle && currentArticle.id === article.id ? (
                                    <input
                                        type="text"
                                        value={newArticle.date}
                                        onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })}
                                        style={{ ...styles.editInput, width: 'calc(100% - 20px)' }}
                                    />
                                ) : (
                                    article.date
                                )}
                            </td>
                            <td style={styles.td}>
                                {currentArticle && currentArticle.id === article.id ? (
                                    <input
                                        type="text"
                                        value={newArticle.description}
                                        onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
                                        style={{ ...styles.editInput, width: 'calc(100% - 20px)' }}
                                    />
                                ) : (
                                    article.description
                                )}
                            </td>
                            <td style={styles.td}>
                                {currentArticle && currentArticle.id === article.id ? (
                                    <input
                                        type="text"
                                        value={newArticle.link}
                                        onChange={(e) => setNewArticle({ ...newArticle, link: e.target.value })}
                                        style={{ ...styles.editInput, width: 'calc(100% - 20px)' }}
                                    />
                                ) : (
                                    <a href={article.link} target="_blank" rel="noopener noreferrer">{article.link}</a>
                                )}
                            </td>
                            <td style={styles.td}>
                                {currentArticle && currentArticle.id === article.id ? (
                                    <input
                                        type="text"
                                        value={newArticle.image}
                                        onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}
                                        style={{ ...styles.editInput, width: 'calc(100% - 20px)' }}
                                    />
                                ) : (
                                    <img src={article.image} alt={article.title} style={{ width: '50px', height: '50px' }} />
                                )}
                            </td>
                            <td style={styles.td}>
                                {currentArticle && currentArticle.id === article.id ? (
                                    <input
                                        type="text"
                                        value={newArticle.dateColor}
                                        onChange={(e) => setNewArticle({ ...newArticle, dateColor: e.target.value })}
                                        style={{ ...styles.editInput, width: 'calc(100% - 20px)' }}
                                    />
                                ) : (
                                    <span style={{ color: article.dateColor }}>{article.date}</span>
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
        flexWrap: 'wrap' as 'wrap',
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
        width: '80px',
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

export default AdminDashboard;
