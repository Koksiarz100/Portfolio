import React from 'react'
import './footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer-wrapper'>
        <div className='footer-section'>
          <div className='footer-section-box'>
            Contact
          </div>
        </div>
        <div className='footer-section'>
          <div className='footer-section-box'>
            Socials
          </div>
        </div>
        <div className='footer-section'>
          <div className='footer-section-box'>
            Menu
          </div>
        </div>
      </div>
    );
  }
}

export default Footer