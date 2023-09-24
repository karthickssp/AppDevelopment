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
      
      <div className="home">
      <center>
        <h6> Login as <span className=' username-color'>{username} </span>  </h6>
        <h3>Welcome To PerfectGarden!!!</h3>
      </center>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src="https://i.pinimg.com/736x/6a/fa/b1/6afab14f6bf85a8a04890e7a3971fd2a.jpg" />
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
              src="https://www.bhg.com/thmb/yoa-gJvBBPmwHqV8e7qQ7reNsGA=/1983x0/filters:no_upscale():strip_icc()/Fertilizing-plants-0440837aeee64749832645ba62572f95.jpg"
            />
          <div className="imgButton">
                <button className="imgageButton">Fertilizers</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
