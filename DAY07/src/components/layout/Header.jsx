import { Link } from "react-router-dom";
import "../../assets/styles/Header.css";
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from "../redux/userSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logout());
    alert("Logout Successful");
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <i className="fa-solid fa-font-awesome"></i>
          <Link to = "/dashboard">PERFECTGARDEN</Link>
        </div>
        <div className="menu">
          <div className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/journal">Journals</Link>
          </div>
          <div className="actions">
        {user.user && user.user.username ? (
          <>
            <button className="log-in" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
          <Link to="/login">
            <button className="log-in">Login</button>
          </Link>
          </>
        )}
      </div>

        </div>
        <div className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
}

export default Header;
