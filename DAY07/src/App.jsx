import './App.css'
import {Route, Routes} from 'react-router-dom';
import Login from './components/pages/Login'
import Register from './components/pages/Register';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import Home from './components/pages/Home';
import Journals from './components/pages/Journals';
import Dashboard from './components/pages/Dashboard';
function App() {

  return (
    <>
        <Routes>
          <Route path = '/' element ={<Home/>}/>
          <Route path = '/login' element ={<Login/>}/>
          <Route path = '/register' element ={<Register/>}/>
          <Route path = '/about' element ={<Aboutus/>}/>
          <Route path = '/contact' element ={<Contactus/>}/>
          <Route path = '/journal' element ={<Journals/>}/>
          <Route path = '/dashboard' element ={<Dashboard/>}/>
        </Routes>
    </>
  )
}

export default App
