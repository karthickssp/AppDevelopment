import "../../assets/styles/Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import User from "../structure/User.json";
import { Link } from "react-router-dom";

function Profile() {
  const user = useSelector(selectUser);
  const isLoggedIn = user.user && user.user.username;
  const username =
    user.user && user.user.username ? user.user.username : "Guest";

  return (
    <div className="pro-back">
      {isLoggedIn ? (
        <div className="user-details">
          <center>
            <h2>USER DETAILS</h2>
          </center>
          <div className="user-info">
            <p>
              <strong>Email:</strong> {username}
            </p>
            <p>
              <strong>First Name:</strong> {User.user.first_name}
            </p>
            <p>
              <strong>Last Name:</strong> {User.user.last_name}
            </p>
            <p>
              <strong>Date of Birth:</strong> {User.user.date_of_birth}
            </p>
            <div className="address">
              <p>
                <strong>Address:</strong>
              </p>
              <p>{User.user.address.street}</p>
              <p>
                {User.user.address.city}, {User.user.address.state}{" "}
                {User.user.address.postal_code}
              </p>
            </div>
            <p>
              <strong>Phone Number:</strong> {User.user.phone_number}
            </p>
            <p>
              <strong>Created At:</strong> {User.user.created_at}
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
              <button className="lbutton">Login</button>
            </Link>
          </center>
        </div>
      )}
    </div>
  );
}

export default Profile;
