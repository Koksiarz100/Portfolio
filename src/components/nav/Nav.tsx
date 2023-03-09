import React, { useState } from 'react'
import './nav.scss'
import hamburger from '../../assets/nav/hamburger.png'

/** 
  * TODO:
  * ! Dodać informacje gdzie znajduje się użytkownik na stronie (Może border u dołu danego <a>).
*/

class Nav extends React.Component {
  handleClick() {
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.toggle('active');
  }

  render(): React.ReactNode {
      return(
        <div className='nav-wrapper'>
          <button onClick={this.handleClick} className='nav-button'>
            <img src={hamburger} alt='hamburger' id='nav-button-img'/>
          </button>
          <div className='nav-links started'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
          </div>
        </div>
      );
  }
}

export default Nav