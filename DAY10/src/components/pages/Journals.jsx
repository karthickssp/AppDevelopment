import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../../assets/styles/Journal.css";
import coolcrop from '../../assets/images/coolcrop.png'
import warmcrop from '../../assets/images/warmcrop.png'
 import ediblef from '../../assets/images/ediblef.png'
import herbs from '../../assets/images/herbs.png'
import ediblew from '../../assets/images/ediblew.png'
function Journals() {
  return (
    <>
      <Header />
      <center>
        <h1>Some of published Journals</h1>
      </center>
      <section className="featured">
        <div className="product-list">
          <div className="product-card">
            <img
              src={coolcrop}
              className="product-image1"
            />
          </div>
          <div className="product-card">
            <img
              src={warmcrop}
              className="product-image1"
            />
          </div>
          <div className="product-card">
            <img
              src={ediblef}
              className="product-image1"
            />
          </div>
          <div className="product-card">
            <img
              src={herbs}
              className="product-image1"
            />
          </div>
          <div className="product-card">
            <img
              src={ediblew}
              className="product-image1"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Journals;
