import React from 'react'
import './skills.scss'
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import js from '../../assets/icons/js.png'
import react from '../../assets/icons/react.png'
import ts from '../../assets/icons/ts.png'
import github from '../../assets/icons/github.png'
import git from '../../assets/icons/git.png'
import fdb from '../../assets/icons/fdb.png'
import node from '../../assets/icons/node.png'
import sass from '../../assets/icons/sass.png'
import json from '../../assets/icons/json.png'
import php from '../../assets/icons/php.png'
import bs from '../../assets/icons/bs.png'
import jq from '../../assets/icons/jq.png'

/**
 * TODO:
 * * - Pokazać jakoś jakie umiejętności posiadam.
 * ? - Może rowijane na hover?
 * ! - Przepisać na componenty.
 */

class Skills extends React.Component {
  render() {
      return(
        <div className='skills-wrapper' id='skills'>
          <span className='skills-title' data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">My Skills</span>
          <div className='skills-cards-wrapper'>
            <div className='skills-card' data-aos="flip-right" data-aos-duration="600" data-aos-delay="500">
              <span className='card-title'>Languages</span>
              <div className='card-main'>
                <div className='card-icons-wrapper'>
                  <div className='icon-row'>
                    <img src={html} alt='html' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="600"/>
                    <img src={css} alt='css' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="700"/>
                    <img src={js} alt='js' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="800"/>
                  </div>
                  <div className='icon-row'>
                    <img src={ts} alt='ts' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="900"/>
                    <img src={php} alt='php' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="1000"/>
                  </div>
                </div>
              </div>
            </div>
            <div className='skills-card' data-aos="flip-right" data-aos-duration="600" data-aos-delay="500">
              <span className='card-title'>Frameworks</span>
              <div className='card-main'>
                <div className='card-icons-wrapper'>
                  <div className='icon-row'> 
                    <img src={react} alt='react' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="600"/>
                    <img src={node} alt='node' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="700"/>
                    <img src={bs} alt='bs' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="800"/>
                  </div>
                  <div className='icon-row'> 
                    <img src={json} alt='json' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="900"/>
                    <img src={jq} alt='jquery' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="900"/>
                  </div>
                </div>
              </div>
            </div>
            <div className='skills-card' data-aos="flip-right" data-aos-duration="600" data-aos-delay="500">
              <span className='card-title'>Tools</span>
              <div className='card-main'>
                <div className='card-icons-wrapper'>
                  <div className='icon-row'>
                    <img src={github} alt='github' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="600"/>
                    <img src={git} alt='git' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="700"/>
                  </div>
                  <div className='icon-row'>
                    <img src={fdb} alt='fdb' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="800"/>
                    <img src={sass} alt='sass' className='card-icon' data-aos="flip-right" data-aos-duration="800" data-aos-delay="800"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Skills