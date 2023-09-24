import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import "../../assets/styles/Login.css";
import Header from "../layout/Header";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username));
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        return false;
      }
      setError("");
      return true;
    };
    const validatePassword = (password) => {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

      if (!passwordRegex.test(password)) {
        setError(
          "Password must contain at least one letter, one number, one symbol, and have a length of 8 to 15 characters"
        );
        return false;
      }

      setError("");
      return true;
    };
    if (username === "" && password === "") {
      setError("Username and Password are required.");
    } else if (username === "") {
      setError("Username is required.");
    } else if (password === "") {
      setError("Password is required.");
    } else if (validateEmail && validatePassword) {
      //alert('Login successful');
      navigate("/");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Header />
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to PerfectGarden</h2>
          <div className="login-form-header" />
          <div className="icon" />

          <div className="form-group">
            <label htmlFor="username">
              <strong>Username:</strong>{" "}
            </label>
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
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
            <div className="display">
              <div id="password-btn" onClick={toggleShowPassword}>
                {showPassword ? (
                  <RemoveRedEyeOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </div>
            </div>
            <h3 id="forgot-password">Forgot Password?</h3>
          </div>
          {error && <span className="error">{error}</span>}
          <button type="submit" id="login-btn">
            Login
          </button>
          <div id="create-account-btn">
            New User?&nbsp;
            <Link to="/register">
              <span className="register">Register</span>
            </Link>
            &nbsp; here.
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
