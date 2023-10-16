// import "./Login.css";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../components/redux/userSlice";
// import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";

// const validateEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailRegex.test(email)) {
//     return "Please enter a valid email address";
//   }
//   return "";
// };

// const validatePassword = (password) => {
//   const passwordRegex =
//     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

//   if (!passwordRegex.test(password)) {
//     return "Password: 8-15 characters, letters, numbers, and symbol.";
//   }

//   return "";
// };

// function Login(props) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const logincredentials = { email, password };

//   const authenticateUser = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/garden/auth/user/authenticate",
//         logincredentials
//       );
//       const token = response.data.token;
//       localStorage.setItem("auth", token);
//       localStorage.setItem("email", email);
//       return token;
//     } catch (error) {
//       console.error("Error:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const emailError = validateEmail(email);
//     const passwordError = validatePassword(password);

//     if (email === "" && password === "") {
//       setError("Email and Password are required.");
//     } else if (email === "") {
//       setError("Email is required.");
//     } else if (password === "") {
//       setError("Password is required.");
//     } else if (emailError || passwordError) {
//       setError(emailError || passwordError);
//     } else {
//       const token = await authenticateUser();
//       if (token == null) {
//         setError("Invalid Email or Password");
//         return;
//       } else {
//         const response = axios.get(
//           `http://localhost:8080/garden/auth/user/get/${email}`
//         );
//         const CurrentUser = (await response).data;
//         dispatch(login(CurrentUser.firstName));
//         console.log(CurrentUser);
//         navigate("/");
//         toast.success("Login Successful");
//       }
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   return props.trigger ? (
//     <>
//       <div className="login-wrap-main">
//         <div className="login">
//           <div className="login-wrap">
//             <h1>LOGIN</h1>

//             <h1 onClick={() => props.Trigger(false)}>
//               <i className="fa-regular fa-circle-xmark"></i>
//             </h1>
//           </div>

//           <form className="fromInput" onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//             <br></br>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <br></br>

//             <input type="submit" id="login-btn" />
//           </form>

//           <h3>Do not have an Account ??</h3>
//         </div>
//       </div>
//       <ToastContainer
//           position="bottom-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//     </>
//   ) : (
//     ""
//   );
// }
// export default Login;
