import React from 'react'
import './footer.scss'
import fb from '../../assets/icons/socials/fb.png'
import ig from '../../assets/icons/socials/ig.png'
import tg from '../../assets/icons/socials/tg.png'
import li from '../../assets/icons/socials/li.png'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer-wrapper'>
        <div className='footer-section'>
          Contact
          <div className='footer-contact'>

          </div>
        </div>
        <div className='footer-section'>
          Socials
          <div className='footer-socials'>
            <a href='https://www.facebook.com/jarek.zwierz.56'>
              <img src={fb} alt='fb' className='socials-img'/>
            </a>
            <a href='https://www.instagram.com/jarekzwierz/'>
              <img src={ig} alt='ig' className='socials-img'/>
            </a>
            <a href='https://t.me/Koksiarz'>
              <img src={tg} alt='tg' className='socials-img'/>
            </a>
            <a href='https://www.linkedin.com/in/jarosław-zwierz'>
              <img src={li} alt='li' className='socials-img'/>
            </a>
          </div>
        </div>
        <div className='footer-section'>
          Menu
          <div className='footer-nav'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer