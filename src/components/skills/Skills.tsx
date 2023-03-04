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

function Skills() {
  return (
    <div className='skills-wrapper' id='skills'>
      <span className='skills-title'>My skills</span>
      <div className='skills-img-wrapper'>
        <span className='skills-img-titles'>Languages</span>
        <div className='skills-img-section'>
          <img src={html} alt='html' className='skills-img'/>
          <img src={css} alt='css' className='skills-img'/>
          <img src={js} alt='js' className='skills-img'/>
          <img src={ts} alt='ts' className='skills-img'/>
          <img src={php} alt='php' className='skills-img'/>
        </div>
        <span className='skills-img-titles'>Frameworks</span>
        <div className='skills-img-section'>
          <img src={react} alt='react' className='skills-img'/>
          <img src={node} alt='node' className='skills-img'/>
          <img src={fdb} alt='fdb' className='skills-img'/>
          <img src={sass} alt='sass' className='skills-img'/>
          <img src={json} alt='json' className='skills-img'/>
        </div>
        <span className='skills-img-titles'>Tools</span>
        <div className='skills-img-section'>
          <img src={github} alt='github' className='skills-img'/>
          <img src={git} alt='git' className='skills-img'/>
        </div>
      </div>
    </div>
  )
}

export default Skills