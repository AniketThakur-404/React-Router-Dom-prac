import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='main'>
        <h1 className='header'>Navbar</h1>
        <div className='sub'>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/services">Services</Link>
        </div>
    </div>
  );
}

export default Navbar;