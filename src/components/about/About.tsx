import React, { useEffect, useRef, useState } from 'react';
import './about.scss';
import prof from '../../assets/prof.png';

class About extends React.Component {
  render() {
    return (
      <div className='about-wrapper' id='about'>
        <div>
          <img src={prof} alt='prof' className='about-img'/>
        </div>
        <div className='about-section'>
          <span className='about-title'>About Me</span>
          <span className='about-p'>I'm a student at the Opole University of Technology in Poland. I'm currently studying Computer Science and I'm in my seccond year. I specialize in building websites, mainly focusing on frontend, but I also have no problem with backend.</span>
          <span className='about-p'>I love doing it because it brings me joy. I'm not afraid of challenging tasks, even though I know I don't have all the answers. I'm a fast learner and I'm always looking for new knowledge. I'm a team player, but I can also work alone. I prefer working among people, but I have no problem with remote work.</span>
          <span className='about-p'>Like everyone else, I enjoy a good coffee and a good Netflix series. I am passionate about computer science in general, but I can talk about any topic.</span>
        </div>
      </div>
    );
  }
}

export default About