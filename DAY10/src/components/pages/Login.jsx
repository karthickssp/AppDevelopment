import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import "../../assets/styles/Login.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { toast, ToastContainer } from "react-toastify";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  return "";
};

const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

  if (!passwordRegex.test(password)) {
    return "Password must contain at least one letter, one number, one symbol, and have a length of 8 to 15 characters";
  }

  return "";
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailError = validateEmail(username);
    const passwordError = validatePassword(password);

    if (username === "" && password === "") {
      setError("Username and Password are required.");
    } else if (username === "") {
      setError("Username is required.");
    } else if (password === "") {
      setError("Password is required.");
    } else if (emailError || passwordError) {
      setError(emailError || passwordError);
    } else {
      dispatch(login(username));
      navigate("/");
      toast.success("Login Successful");
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>PerfectGarden</h2>
          <div className="login-form-header" />
          <div className="icon" />

          <div className="form-group">
            <label htmlFor="username">
              <strong>Username:</strong>{" "}
            </label>
            <input
              type="text"
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
            <Link to="/register" className="register">
              <span className="register">Register</span>
            </Link>
            &nbsp; here.
          </div>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default Login;
