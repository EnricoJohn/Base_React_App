import { NavLink } from "react-router-dom";
import React, { Component } from 'react';

function Header() {
  return (
    <div className='Header'>
        <ul>
          <li><NavLink to='/' className='Header_flex-items'>Home</NavLink></li>
          <li><NavLink to='/about' className='Header_flex-items'>About Me</NavLink></li>
          <li><NavLink to='/projects' className='Header_flex-items'>Projects</NavLink></li>
          <li><NavLink to='/contact' className='Header_flex-items'>Contact</NavLink></li>
        </ul>
       
    </div>
  )
}

export default Header