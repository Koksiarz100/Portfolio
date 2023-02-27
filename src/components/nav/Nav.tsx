import React, { useState } from 'react'
import './nav.scss'
import hamburger from '../../assets/hamburger-light.png'

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className='nav-wrapper'>
      <div className='nav-logo'>
        Portfolio
      </div>
      <button className='nav-button' onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
        <img src={hamburger} alt='menu button' id='nav-button-img'/>
      </button>
      <div className={
          isNavExpanded ? "nav-list expanded" : "nav-list"
        }>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
      </div>
    </div>
  )
}

export default Nav