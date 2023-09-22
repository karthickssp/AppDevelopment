import '../../assets/styles/Contact.css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
function Contactus() {
  return (
    <>
    <Header/>
    <center>
      <div className="conatiner">
        <p className="para1 mt-3">Contact Us!</p>
      </div>
      <div className="container">
        <p className="cp">
          <i className="bx bxs-home-smile"></i> Coimbatore,India
        </p>
        <p className="cp">
          <i className="bx bx-envelope"></i> 727821tuit047@skct.edu.in
        </p>
        <p className="cp">
          <i className="bx bx-phone"></i> +91 9953485843
        </p>
        <p className="cp">
          <i className="bx bx-printer"></i>+01 238 238 23
        </p>
      </div>
      </center>
      <Footer/>
    </>
  );
}

export default Contactus;
