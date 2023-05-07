import React from 'react';
import "../styles/Header.css";
import "../styles/App.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>    
        </nav> 
    </>
  )
}
