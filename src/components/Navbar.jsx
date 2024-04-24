import React, {useState} from 'react'
import {motion} from 'framer-motion';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className='nav-wrapper'>
      <div className='nav-container'>
        <div className='left-nav'>
         <img src={logo} alt='amrutam_logo'/>
         <ul>
         <li><Link to="/" className={activeItem === 'Home' ? 'active-link' : ''}
         onClick={() => handleItemClick('Home')}>Home</Link></li>

         <li><Link to="/find-doctors" className={activeItem === 'Find Doctors' ? 'active-link' : ''}
         onClick={() => handleItemClick('Find Doctors')}>Find Doctors</Link></li>

         <li><Link to="/about-us" className={activeItem === 'About Us' ? 'active-link' : ''}
         onClick={() => handleItemClick('About Us')}>About Us</Link></li>
         </ul>
        </div>
        <div className='right-nav'>
         <motion.div className='login'
         whileHover={{ scale: 1.1 }} 
         whileTap={{ scale: 0.9 }} 
         animate={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -10 }}>Login</motion.div>
         <motion.div className='signup' 
         whileHover={{ scale: 1.1 }} 
         whileTap={{ scale: 0.9 }} 
         animate={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -10 }}>Sign-up</motion.div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
