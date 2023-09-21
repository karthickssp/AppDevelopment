import { Link } from "react-router-dom";
import "../../assets/styles/Header.css";

function Header() {

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <i className="fa-solid fa-font-awesome"></i>
          <Link to="/">
            PERFECTGARDEN
          </Link>
        </div>
        <div className="menu">
          <div className="menu-links">
            <Link to="/">
              Home
            </Link>
            <Link to="/about">
              About
            </Link>
            <Link to="/contact">
              Contact
            </Link>
            <Link to="/journal">
              Journals
            </Link>
          </div>
          <Link to="/login">
            <button className="log-in">Log IN</button>
          </Link>
        </div>
        <div className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
}

export default Header;
