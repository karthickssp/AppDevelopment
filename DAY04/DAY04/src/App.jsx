import './App.css'
import {Route, Routes} from 'react-router-dom';
import Login from './components/pages/Login'
import Register from './components/pages/Register';
import Home from './components/pages/Home';
function App() {

  return (
    <>
        <Routes>
          <Route path = '/' element ={<Home/>}/>
          <Route path = '/login' element ={<Login/>}/>
          <Route path = '/register' element ={<Register/>}/>
        </Routes>
    </>
  )
}

export default App
