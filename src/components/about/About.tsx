import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.scss';
import prof from '../../assets/prof.png';
import git from '../../assets/icons/git.png';
import github from '../../assets/icons/github-light.png';
import vsc from '../../assets/icons/vsc.png';
import disc from '../../assets/icons/disc.png';

class About extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  aboutSection() {
    return(
      <div className='about-section'>
        <span className='about-title' data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">About Me</span>
        <span className='about-p' data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">I am a student of Opole University of Technology, studying computer science there. Currently, I am in my second year of studies. I specialize in building websites, mainly focusing on frontend, but I also have no problem with backend. I love creating something out of nothing. I'm not afraid of challenges, but I know I don't have all the answers. I learn quickly, so I don't fall behind. I'm always looking for new knowledge. I'm a team player, but I have no problem being a lone wolf. I prefer working with people, but remote work is not a problem for me. Like everyone else, I enjoy a good coffee and a good Netflix series. I quickly get to know people and can talk about any topic.</span>
      </div>
    );
  }

  aboutTools() {
    return(
      <div className='about-tools'>
        <img src={vsc} alt='vsc' data-aos="flip-right" data-aos-duration="800" data-aos-delay="200"/>
        <img src={git} alt='git' data-aos="flip-right" data-aos-duration="800" data-aos-delay="400"/>
        <img src={github} alt='github' data-aos="flip-right" data-aos-duration="800" data-aos-delay="600"/>
        <img src={disc} alt='discord' data-aos="flip-right" data-aos-duration="800" data-aos-delay="800"/>
      </div>
    );
  }

  render() {
    return (
      <div className='about-wrapper' id='about'>
        <div className='about-img-wrapper'>
          <img src={prof} alt='profile' className='about-img' data-aos="flip-right" data-aos-duration="800" data-aos-delay="200"/>
        </div>
        <this.aboutSection />
        <div className='about-tools-section'>
          <span className='about-tools-title' data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">Tools I use everyday</span>
          <this.aboutTools />
        </div>
      </div>
    );
  }
}

export default About