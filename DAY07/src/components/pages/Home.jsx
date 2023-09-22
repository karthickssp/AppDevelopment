import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../../assets/styles/Home.css";
import { useSelector } from 'react-redux';
import { selectUser } from "../redux/userSlice";

function Home() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';  
  return (
    <>
      <Header />
      <center>
        <h6> Login as <span className=' username-color'>{username} </span>  </h6>
        <h3>Welcome To PerfectGarden!!!</h3>
      </center>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/blogs/IMG_20200427_220724_683/44ac3be0abe3df3ad5edce96310b029d.jpg" />
          <div className="imgButton">
                <button className="imgageButton">Seeding</button>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20181120_070744-1/162c24ab54eab11262c859ce14c2dfd0.jpg"
            />
          <div className="imgButton">
                <button className="imgageButton">Organize</button>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20190903_203844/d8465d131c0a29e6548b3d46b08bbf82.jpg"
            />
          <div className="imgButton">
                <button className="imgageButton">Fertilizers</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
