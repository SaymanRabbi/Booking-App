import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <div class="navbar bg-base-100 px-5">
            <div class="navbar-start">
                
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            {/* for mobile devices */}
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href='rent' className=' font-bold'>Rent</a></li>
              <li><a href='Buy' className=' font-bold'>Buy</a></li>
              <li><a href='Sell' className=' font-bold'>Sell</a></li>
             
              <li><a href='Resources' className=' font-bold'>Resources</a></li>
            </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl flex gap-1 text-primary" href='logo'> <FontAwesomeIcon icon={faEnvelopeOpenText}/> Estatery</a>
                <div class=" hidden lg:flex navbar-start">
            <ul class="menu menu-horizontal p-0">
              {/* for desktop */}
          <li><a href='rent' className=' font-bold'>Rent</a></li>
              <li><a href='Buy' className=' font-bold'>Buy</a></li>
              <li><a href='Sell' className=' font-bold'>Sell</a></li>
             
              <li><a href='Resources' className=' font-bold'>Resources</a></li>
          </ul>
        </div>
        </div>
       
        <div class="navbar-end flex gap-5">
        <button class="btn">Login</button>
        <button class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    );
};

export default Navbar;