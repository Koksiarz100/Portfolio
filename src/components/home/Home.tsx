import React, {Component} from 'react'
import './home.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className='home-wrapper' id='home'>
        <div className='home-main'>
          <span className='home-title' data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">Hi</span>
          <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="700" className='home-subtitle'>I'm Jarek,</p>
          <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="900" className='home-subtitle'>a frontend developer</p>
          <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="1100" className='home-subtitle'>a backend developer</p>
          <p data-aos="flip-up" data-aos-duration="800" data-aos-delay="1500" className='home-subtitle'>or just a <span className='orange'>fullstack</span> developer.</p>
        </div>
      </div>
    )
  }
}

export default Home