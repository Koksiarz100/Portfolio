import React from 'react'
import './nav.scss'
import hamburger from '../../assets/hamburger-light.png'

function Nav() {
  return (
    <div className='nav-wrapper'>
      <div className='nav-logo'>
        Portfolio
      </div>
      <div className='nav-hamburger'>
        <img src={hamburger} alt='hamburger menu' id='nav-hamburger'/>
      </div>
      <div className='nav-list-wrapper'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
      </div>
    </div>
  )
}

export default Nav