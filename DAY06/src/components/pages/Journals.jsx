import Header from '../layout/Header';
import Footer from '../layout/Footer';

function Journals() {
  return (
    <>
    <Header/>
    <center>
    <h3>Some of published Journals</h3>
    </center>
    <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src="https://www.thehomegarden.com/static/resources/THGCoolSeasonCropPoster.png" />
          </div>
          <div className="col-sm-4">
            <img
              src="https://www.thehomegarden.com/static/resources/THGHerbPoster.png"
            />
          </div>
          <div className="col-sm-4">
            <img
              src="https://www.thehomegarden.com/static/resources/THGEdibleFlowersPoster.png"
            />
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Journals