import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../redux/userSlice";
import "../../assets/styles/Header.css";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    dispatch(logout());
    alert("Logout Successful");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          PERFECTGARDEN
        </Link>
        <div className={`nav-icon ${click ? "active" : ""}`} onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/journal"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              JOURNALS
            </Link>
          </li>
          <li className="nav-item">
            {user.user && user.user.username ? (
              <span className="nav-links" onClick={handleLogout}>
                LOGOUT
              </span>
            ) : (
              <Link
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                LOGIN
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
