import React, { useState } from 'react';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Hardcoded credentials
    const validUsername = 'user';
    const validPassword = 'password';

    // Check if entered credentials are valid
    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true);  // Successful login
      setError('');  // Clear error message
    } else {
      setError('Invalid Credentials');  // Show error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error Message */}
    </div>
  );
};

export default Login;
