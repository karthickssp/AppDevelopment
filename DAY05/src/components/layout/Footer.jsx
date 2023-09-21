import { Link } from 'react-router-dom';
import '../../assets/styles/Footer.css'
function Footer() {
  return (
    <>
      <section>
        <footer className="top">
          <div className="links">
            <div className="links-column">
              <h2>Get Started</h2>
              <Link to = "/"> Home Page </Link>
              <Link to = "/about"> Aboutus Page </Link>
              <Link to = "/login"> Login </Link>
              <Link to = "/register"> Register </Link>
            </div>
            <div className="links-column">
            <h2>Products</h2>
            <Link to = "/flower">Flowers</Link>
            <Link to = "/fruit">Fruits</Link>
            <Link to = "/tree">Trees</Link>
            <Link to = "/herbs">Herbs</Link>
            </div>
            <div className="links-column socials-column">
              <h2>Social Media</h2>
              <p>
                Follow us on social media to find out the latest updates on our
                progress.
              </p>
              <div className="socials">
                <p className="fa-brands fa-facebook"></p>
                <p className="fa-brands fa-instagram"></p>
                <p className="fa-brands fa-linkedin"></p>
              </div>
            </div>
          </div>
        </footer>
        <footer className="bottom">
          <p className="copyright">© 2023 All rights reserved</p>
          <div className="legal">
            <a> License </a>
            <a> Terms </a>
            <a> Privacy </a>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
