import React, { useState } from 'react'
import './nav.scss'
import hamburger from '../../assets/hamburger-light.png'


function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isNavRotated, setIsNavRotated] = useState(false)
  const [isStarted, setStarted] = useState(false)

  function animations(isStarted: boolean) {
    if(isStarted === true){
      return (
        <>
          <button className='nav-button' onClick={() => {setIsNavExpanded(!isNavExpanded);setIsNavRotated(!isNavRotated)}}>
            <img src={hamburger} alt='menu button' className={
              isNavExpanded ? "nav-button-img rotated" : "nav-button-img"
            }/>
          </button>
          <div className={
            isNavExpanded ? "nav-list expanded" : "nav-list"
          }>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
        </div>
        </>
      )
    }
    else if (isStarted === false){
      return (
        <>
          <button className='nav-button' onClick={() => {setIsNavExpanded(!isNavExpanded);setIsNavRotated(!isNavRotated);setStarted(true)}}>
            <img src={hamburger} alt='menu button' className={
              isNavExpanded ? "nav-button-img rotated" : "nav-button-img normal"
            }/>
          </button>
          <div className={
            isNavExpanded ? "nav-list expanded" : "nav-list normal"
          }>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
        </div>
      </>
      )
    }
  }

  return (
    <div className='nav-wrapper'>
      <div className='nav-logo'>
        Portfolio
      </div>
      <>
        {animations(isStarted)}
      </>
    </div>
  )
}

export default Nav