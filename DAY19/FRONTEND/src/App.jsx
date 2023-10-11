import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contactus";
import Home from "./components/pages/Home";
import Journals from "./components/pages/Journals";
import Dashboard from "./components/pages/Dashboard";
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
import Faq from "./components/pages/Faq";
import Profile from "./components/pages/Profile";
import Guide from "./components/pages/Guide";
import AdminLogin from "./admin/adminAccount/AdminLogin";
import AdminRegister from "./admin/adminAccount/AdminRegister";
import GetData from "./admin/GetData";
import AddData from "./admin/AddData";
import ViewData from "./admin/ViewData";
import UpdateData from "./admin/UpdateData";
import Explore from "./components/content/Explore";

function App() {
  const location = useLocation();
  const isAdmin = () => {
    return location.pathname.startsWith("/admin");
  };

  return (
    <>
      {!isAdmin() && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/journal" element={<Journals />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/admin/" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/get" element={<GetData/>}/>
        <Route path="/admin/add" element={<AddData/>}/>
        <Route path="/admin/view/:id" element={<ViewData/>}/>
        <Route path="/admin/edit" element={<UpdateData/>}/>
        <Route path="/admin/edit/:id" element={<UpdateData/>}/>
      </Routes>
      {!isAdmin() && <Footer />}
    </>
  );
}

export default App;
