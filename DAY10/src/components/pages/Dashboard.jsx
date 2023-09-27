import "../../assets/styles/Dashboard.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import Plantveiw from "./Plantveiw";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector(selectUser);
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
  const isLoggedIn = user.user && user.user.username;
  return (
    <>
      <Header />
      <div className="head-bar-out">
        {isLoggedIn ? (
          <div className="head-bar-out1">
            <h2>
              Dashboard of <span>{username}</span>
            </h2>
            <h2>Hello Gardener!!!</h2>
            <h5>Plants and Tasks </h5>
            <br />
            <Plantveiw />
            <Modal className="motioncard" />
          </div>
        ) : (
          <div className="head-bar">
            <center>
              <h2>DASHBOARD</h2>
              <p>Login to display the information.</p>
              <Link to="/login">
                <button className="lbutton">Login</button>
              </Link>
            </center>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
