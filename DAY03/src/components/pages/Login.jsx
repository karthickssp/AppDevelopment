import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css'
function Login() 
{
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' && password === '') 
    {
      setError('Username and Password are required.');
    } 
    else if (username === '') 
    {
      setError('Username is required.');
    } 
    else if (password === '') 
    {
      setError('Password is required.');
    }
    
    else 
    {
      alert('Login successful');
      navigate('/');
    }
  };
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
      <>
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to PerfectGarden</h2>
        <div className="login-form-header" />
        <div className="icon" />

        <div className="form-group">
          <label htmlFor="username"><strong>Username:</strong> </label>
          <input
            type="email"
            placeholder="Enter Your Email ID"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          />
        </div>
        <div className="form-group">
      <label htmlFor="password"><strong>Password:</strong>
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
      />
      <div id="password-btn" onClick={toggleShowPassword}>
        {showPassword ? 'Hide' : 'Show'} Password
      </div>
      <h3 id="forgot-password">Forgot Password?</h3>
    </div>
        {error && <span className="error">{error}</span>}
        <button type="submit" id="login-btn">
          <strong>Login</strong>
        </button>
        <Link to="/register">
          <button id="create-account-btn">Create Account</button>
        </Link>
      </form>
    </div>
    </>
  )
}

export default Login;
