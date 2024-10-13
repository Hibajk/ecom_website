import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'



const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className='navbar-menu'>
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile App</li>
          <li>Contact us</li>
        </ul>
        <div className='navbar-right'>
          <div className='navbar-search-icon'>
          <img src={assets.searchicon} alt="" />
          </div>
          <div className='navbar-right1'>
            <img src={assets.cardicon} alt="" />
            <div className='dot'></div>
          </div>
          <button>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar