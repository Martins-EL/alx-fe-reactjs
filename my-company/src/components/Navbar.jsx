import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{display:'flex', flexDirection:'row', color:'yellow', backgroundColor:'Blue' , justifyContent:'space-between'}}>
      <ul>
        <li><Link to="/ Home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
