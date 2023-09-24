import "../../assets/styles/Contact.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Feedback from "./Feedback";
function Contactus() {
  return (
    <>
      <Header />
      <center>
      <div className="contact">
        <h1 className="para1 mt-3">Contact Us!</h1>
        <p className="cp">
          <i className="bx bxs-home-smile"></i> Coimbatore,Tamil Nadu
        </p>
        <p className="cp">
          <i className="bx bx-envelope"></i> perfectgarden@gmail.com
        </p>
        <p className="cp">
          <i className="bx bx-phone"></i> +91 68234 56788
        </p>
        <p className="cp">
          <i className="bx bx-printer"></i>+91 89234 56789
        </p>
      </div>
      </center>
      <div className="feedback">
        <Feedback />
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
