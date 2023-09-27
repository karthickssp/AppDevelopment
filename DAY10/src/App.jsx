import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/pages/Login'
import Register from './components/pages/Register';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import Home from './components/pages/Home';
import Journals from './components/pages/Journals';
import Dashboard from './components/pages/Dashboard';
import Terms from './components/pages/Terms';
import Privacy from './components/pages/Privacy';
import Faq from './components/pages/Faq';
import Profile from './components/pages/Profile';
import Guide from './components/pages/Guide';
function App() {
  const scrollBehavior = (props) => {
    if (props.history.action === 'PUSH') {
      window.scrollTo(0, 0);
    }
    return null;
  };
  return (
    <>
     <BrowserRouter getUserConfirmation={scrollBehavior}>
        <Routes>
          <Route path = '/' element ={<Home/>}/>
          <Route path = '/login' element ={<Login/>}/>
          <Route path = '/register' element ={<Register/>}/>
          <Route path = '/about' element ={<Aboutus/>}/>
          <Route path = '/contact' element ={<Contactus/>}/>
          <Route path = '/journal' element ={<Journals/>}/>
          <Route path = '/dashboard' element ={<Dashboard/>}/>
          <Route path = '/profile' element ={<Profile/>}/>
          <Route path = '/terms' element ={<Terms/>}/>
          <Route path = '/privacy' element ={<Privacy/>}/>
          <Route path = '/faq' element ={<Faq/>}/>
          <Route path = '/guide' element ={<Guide/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
