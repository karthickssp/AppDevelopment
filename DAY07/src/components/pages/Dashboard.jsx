import '../../assets/styles/Dashboard.css'
import { useState } from 'react'
import {motion} from 'framer-motion'

import { useSelector } from 'react-redux';
import { selectUser } from "../redux/userSlice";
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  return (
    <>
    <div className='head'>
    <div className="head-bar">
    <Link to = "/"><h3>Dashboard of {username}</h3></Link>
    <br/>
    <h4>Hello Gardener!!!</h4>
    </div>
    
    <div className="motioncard">
      <motion.div 
        layout 
        className="card" 
        onClick={() => setIsOpen(!isOpen)}
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
        <motion.div 
          className="card-top" 
          layout="position"
        >
          <div className="card-top__header">       
            <h3>Daily Tasks</h3>
          </div>
        </motion.div>
        
        {isOpen && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p>
            A section displaying upcoming gardening tasks. Include:
            </p>
            <p>
            Task name.
            </p>
            <p>
            Due date.
            </p>
            <p>
            Priority level.
            </p>
          </motion.div>
        )}
      </motion.div>
      <motion.div 
        layout 
        className="card" 
        onClick={() => setIsOpen(!isOpen)}
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
        <motion.div 
          className="card-top" 
          layout="position"
        >
          <div className="card-top__header">       
            <h3>Seasonal Tips</h3>
          </div>
        </motion.div>
        
        {isOpen && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p>
            Provide gardening tips and recommendations based on the current season and the users location.
            </p>
            <p>
            Display the local weather forecast for the users area, helping them plan their gardening activities.
            </p>
            <p>
            List of garden layouts with names and descriptions.
            </p>
          </motion.div>
        )}
      </motion.div>
      <motion.div 
        layout 
        className="card" 
        onClick={() => setIsOpen(!isOpen)}
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
        <motion.div 
          className="card-top" 
          layout="position"
        >
          <div className="card-top__header">       
            <h3>Plant care</h3>
          </div>
        </motion.div>
        
        {isOpen && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p>
            Show a monthly calendar with highlighted dates for specific gardening tasks, events, or reminders.
            </p>
            <p>
            Suggest new plants or varieties based on gardening history.
            </p>
            <p>
            Showcase a featured plant with a beautiful image and interesting facts or care tips
            </p>

          </motion.div>
        )}
      </motion.div>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default Dashboard