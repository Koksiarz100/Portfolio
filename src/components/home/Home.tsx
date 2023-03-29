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
        <div className='home-left'>

        </div>
        <div className='home-right'>
          <span className='home-title' data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">Hi</span>
          <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="700">I'm Jarek, a web developer.</p>
        </div>
      </div>
    )
  }
}

export default Home