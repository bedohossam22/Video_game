import React, { useState } from 'react';
import { FaHeart, FaBriefcase } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Interface() {
  const showMenu = useState(true);

  function handleMenuClick() {
    let list = document.querySelector('.listo');
    let xIcon = document.querySelector('.Menu');
  
    if (list.style.display === 'block') {
      list.style.display = 'none';
      xIcon.style.visibility = 'hidden';
      let xIconElement = document.querySelector('.X');
      xIconElement.classList.remove('Z');
      list.style.transition = 'all 2s ease-in-out';
    } else {
      list.style.display = 'block';
      xIcon.style.visibility = 'visible';
      let xIconElement = document.querySelector('.X');
      xIconElement.classList.add('Z');
      list.style.transition = 'all 2s ease-in-out';
    }
  }
  function handleIconClick() {
    let list = document.querySelector('.listo');
 
    let xIconElement = document.querySelector('.X');
    
    list.style.display = 'none';
 
    xIconElement.classList.remove('Z');
    list.style.transition = 'all 2s ease-in-out';
  }
  return (
    <div className="head-container">
      <div className="left">
        <div className="interface">
          <h1>Evana</h1>
          <nav className={showMenu ? 'show' : 'hide'}>
            <ul className='listo'>
              <li><a href="google.com">Home</a></li>
              <li><a href="google.com">Shop</a></li>
              <li><a href="google.com">My account</a></li>
              <li><a href="google.com">Compare</a></li>
              <li><a href="google.com">Login</a></li>
            </ul>
            <FontAwesomeIcon icon={faTimes} className='X' onClick={handleIconClick} />
          </nav>
        </div>
        <div className="right">
          <input type="search" placeholder="Search for Items" className="search-b"/>
          <div className='iconzo'>
            <FaHeart style={{marginRight: '10px' , fontSize: '30px'}}/>
            <FaBriefcase style={{marginRight: '10px' , fontSize: '30px'}} />
            <FontAwesomeIcon icon={faBars} className='Menu' style={{marginRight: '10px' , fontSize: '30px'}} onClick={handleMenuClick} />
          </div>
        </div>
      </div>
    </div>
  );
}