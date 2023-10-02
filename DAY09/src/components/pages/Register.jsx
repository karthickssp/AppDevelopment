import { useState } from "react";
import "../../assets/styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [register, setregister] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    dob: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
    experience: "",
    size: "",
    interest: "",
    location: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [terms, setterms] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const {
    firstname,
    lastname,
    mobile,
    dob,
    email,
    password,
    confirmpassword,
    gender,
    experience,
    size,
    interest,
    location,
  } = register;

  const onInputChange = (e) => {
    setregister({ ...register, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    setEmailError("");
    return true;
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
      setMobileError("Please enter a valid 10-digit phone number");
      return false;
    }

    setMobileError("");
    return true;
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one letter, one number, one symbol, and have a length of 8 to 15 characters"
      );
      return false;
    }

    setPasswordError("");
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isPhoneNumberValid = validatePhoneNumber(mobile);
    if (isEmailValid && isPasswordValid && isPhoneNumberValid && terms) {
      toast.success(
        "Account is created successfully. Now Login to your Account"
      );
      alert("Account is created successfully. Now Login to your Account");
      navigate("/login");
    }
    if (!terms) {
      toast.error("Agree terms...");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="register-page">
        <form className="register-form" onSubmit={(e) => onSubmit(e)}>
          <div className="register-head">PerfectGarden</div>
          <div className="register-icon" />
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="firstname">
              First Name:
            </label>
            <input
              className="register-form-input"
              type="text"
              placeholder="Enter your FirstName"
              name="firstname"
              value={firstname}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="lastname">
              Last Name:
            </label>
            <input
              className="register-form-input"
              type="text"
              placeholder="Enter your LastName"
              name="lastname"
              value={lastname}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="phoneno">
              Phone Number:
            </label>
            <input
              className="register-form-input"
              type="number"
              placeholder="Enter your Mobile Number"
              name="mobile"
              value={mobile}
              onChange={(e) => onInputChange(e)}
            />
            {mobileError && <div className="error">{mobileError}</div>}
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="dob">
              Date of Birth:
            </label>
            <input
              className="register-form-input"
              type="date"
              placeholder="Enter your Date Of Birth"
              name="dob"
              value={dob}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="email">
              Email Address:
            </label>
            <input
              className="register-form-input"
              type="text"
              placeholder="Enter your Email Address (UserName)"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="password">
              Password:
            </label>
            <input
              className="register-form-input"
              type={showPassword ? "text" : "password"}
              placeholder="Create New Password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
            <span
              className="register-password-icon"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </span>
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="confirmpassword">
              Confirm Password:
            </label>
            <input
              className="register-form-input"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              name="confirmpassword"
              value={confirmpassword}
              onChange={(e) => onInputChange(e)}
            />
            <span
              className="register-password-icon"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </span>
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="gender">
              Gender:
            </label>
            <select
              className="register-form-input"
              type="text"
              placeholder="Select your gender"
              name="gender"
              value={gender}
              onChange={(e) => onInputChange(e)}
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="experience">
              Experience:
            </label>
            <select
              className="register-form-input"
              type="text"
              placeholder="Select your experience"
              name="experience"
              value={experience}
              onChange={(e) => onInputChange(e)}
              required
            >
              <option value="">Select your experience</option>
              <option value="male">Beginner</option>
              <option value="female">Intermediate</option>
              <option value="other">Expert</option>
            </select>
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="size">
              Garden Size:
            </label>
            <select
              className="register-form-input"
              type="text"
              placeholder="Select your Garden type"
              name="size"
              value={size}
              onChange={(e) => onInputChange(e)}
              required
            >
              <option value="">Select your Garden type</option>
              <option value="male">Small Balcony</option>
              <option value="female">Medium Backyard</option>
              <option value="other">Large Garden</option>
            </select>
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="interest">
              Interest:
            </label>
            <select
              className="register-form-input"
              type="text"
              placeholder="Select your Interest"
              name="interest"
              value={interest}
              onChange={(e) => onInputChange(e)}
              required
            >
              <option value="">Select your Interest</option>
              <option value="male">Flowers</option>
              <option value="female">Vegetables</option>
              <option value="other">Herbs</option>
              <option value="other">Weeds</option>
            </select>
          </div>
          <div className="register-form-group">
            <label className="register-form-label" htmlFor="location">
              Location:
            </label>
            <input
              className="register-form-input"
              type="text"
              placeholder="Enter your Location"
              name="location"
              value={location}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="register-form-group">
            <label className="register-checkbox-label">
              <input
                id="checkbox"
                className="register-form-checkbox"
                type="checkbox"
                onChange={() => setterms(!terms)}
              />
              <span className="custom-checkbox"></span>
              &ensp;Agree to our{" "}
              <Link to="/terms" className="register-form-login">
                terms and conditions
              </Link>
            </label>
          </div>
          <button type="submit" className="register-form-register-btn">
            Create Account
          </button>
          <div className="register-form-already">
            Already registered!{" "}
            <Link to="/login" className="register-form-login">
              Login{" "}
            </Link>
            here.
          </div>
        </form>
      </div>
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
    </>
  );
}

export default Register;