import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import "../../assets/styles/Login.css";
import ApiService from "../../Service/Apiservice";
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
    return "Password: 8-15 characters, letters, numbers, and symbol.";
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
  const Service = useMemo(() => new ApiService(), []);

  const userData = async () => {
    try {
      const response = await Service.searchmail(username);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await userData();
      console.log(user);
      const emailError = validateEmail(username);
      const passwordError = validatePassword(password);
      if (!user) {
        setError("User data not found.");
      } else {
        const email = user[0].email;
        const correctpassword = user[0].password;
        const currentuser = user[0].firstName;
        const usercheck = email === username && correctpassword === password;
        if (username === "" && password === "") {
          setError("Username and Password are required.");
        } else if (username === "") {
          setError("Username is required.");
        } else if (password === "") {
          setError("Password is required.");
        } else if (emailError || passwordError) {
          setError(emailError || passwordError);
        } else if (!usercheck) {
          setError("Password is incorrect.");
          return;
        } else {
          dispatch(login(currentuser));
          navigate("/");
          toast.success("Login Successful");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-head">PerfectGarden</h1>
          <div className="login-icon" />

          <div className="login-form-group">
            <label className="login-form-label" htmlFor="username">
              Username(Email):
            </label>
            <input
              className="login-form-input"
              type="text"
              placeholder="Enter Your Email ID"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
            />
          </div>
          <div className="login-form-group">
            <label className="login-form-label" htmlFor="password">
              Password:
            </label>
            <input
              className="login-form-input"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
            <div className="login-password-icon" onClick={toggleShowPassword}>
              {showPassword ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </div>
            <span className="login-form-forget">Forgot Password?</span>
          </div>
          {error && <span className="login-form-error">{error}</span>}
          <button type="submit" className="login-form-login-btn">
            LOGIN
          </button>
          <div className="login-form-no-account">
            New User?&nbsp;
            <Link to="/register" className="login-form-register">
              REGISTER
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
