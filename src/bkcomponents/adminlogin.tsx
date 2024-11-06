import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username,
        password,
      });

      // Check if the response is successful
      if (response.status === 200 && response.data.message === 'Login successful') {
        // Store user info or token in local storage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/dashboard');
      } else {
        setError(response.data.error || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <style>
        {`
          .login-container {
            max-width: 400px; 
            margin: 100px auto; 
            padding: 40px; 
            border: 1px solid #ccc;
            border-radius: 10px; 
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
            background-color: #ffffff; 
            font-family: Arial, sans-serif; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
          }

          h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333; 
          }

          .error {
            color: red;
            margin-bottom: 10px;
            text-align: center;
            font-weight: bold; 
          }

          form {
            display: flex;
            flex-direction: column;
            width: 100%; 
          }

          .form-group {
            margin-bottom: 20px; 
          }

          label {
            margin-bottom: 5px;
            font-weight: bold; 
            color: #555; 
          }

          .input-field {
            margin-bottom: 10px; 
            padding: 12px; 
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            transition: border-color 0.3s; 
            width: 100%; 
          }

          .input-field:focus {
            border-color: #4caf50; 
            outline: none; 
          }

          .login-button {
            padding: 12px; 
            background-color: #4caf50; 
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s; 
            width: 100%; 
          }

          .login-button:hover {
            background-color: #45a049; 
          }
        `}
      </style>
    </div>
  );
};

export default LoginPage;
