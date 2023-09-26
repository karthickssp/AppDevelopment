import {useSelector, useDispatch} from 'react-redux';
import login from '../redux/actions'

function Home() {
  const user = useSelector(state=>state.login);
  const dispatch = useDispatch();
  return (
    <>
    <div>Home</div>
    <button onClick={()=>dispatch(login())}>Login</button>
    <button>Register</button>
    </>
  )
}

export default Home