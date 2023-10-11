import "../../assets/styles/Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  const user = useSelector(selectUser);
  console.log(user);
  const isLoggedIn = user.user && user.user.username;
  const[CurrentUser, setCurrentUser] = useState("");
  const GetUser = async () => {
    try {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("auth");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.get(
        `http://localhost:8080/api/v1/auth/user/getuser/${email}`
      );
      setCurrentUser(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  useEffect(()=>{
    GetUser();
  },[]);
  return (
    <div className="pro-back">
      {isLoggedIn ? (
        <div className="user-details">
          <center>
            <h2>USER DETAILS</h2>
          </center>
          <div className="user-info">
            <p>
              <strong>Email:</strong>{CurrentUser.email}
            </p>
            <p>
              <strong>First Name:</strong>{CurrentUser.firstName}
            </p>
            <p>
              <strong>Last Name:</strong>{CurrentUser.lastName}
            </p>
            <p>
              <strong>Date of Birth:</strong>{CurrentUser.dob}
            </p>
            <p>
              <strong>Phone Number:</strong>{CurrentUser.mobile}
            </p>
            <p>
              <strong>Location:</strong>{CurrentUser.location}
            </p>
            <p>
              <strong>Gender:</strong>{CurrentUser.gender}
            </p>
            <p>
              <strong>Experience:</strong>{CurrentUser.experience}
            </p>
            <p>
              <strong>Garden Size:</strong>{CurrentUser.size}
            </p>
            <p>
              <strong>Interest:</strong>{CurrentUser.interest}
            </p>
            <button className="s-button">Setting</button>
          </div>
        </div>
      ) : (
        <div className="user-details1">
          <center>
            <h2>USER DETAILS</h2>
            <p>Login to display the information.</p>
            <Link to="/login">
              <button className="l-button">Login</button>
            </Link>
          </center>
        </div>
      )}
    </div>
  );
}

export default Profile;
