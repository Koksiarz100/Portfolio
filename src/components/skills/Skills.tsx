import React from 'react'
import './skills.scss'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import ts from '../../assets/ts.png'
import github from '../../assets/github.png'
import git from '../../assets/git.png'
import fdb from '../../assets/fdb.png'
import node from '../../assets/node.png'
import sass from '../../assets/sass.png'
import json from '../../assets/json.png'
import php from '../../assets/php.png'

function Skills() {
  return (
    <div className='skills-wrapper' id='skills'>
      <span className='skills-title'>My skills</span>
      <div>
        <img src={html} alt='html' className='skills-img'/>
        <img src={css} alt='css' className='skills-img'/>
        <img src={js} alt='js' className='skills-img'/>
        <img src={ts} alt='ts' className='skills-img'/>
        <img src={react} alt='react' className='skills-img'/>
        <img src={github} alt='github' className='skills-img'/>
        <img src={git} alt='git' className='skills-img'/>
        <img src={fdb} alt='fdb' className='skills-img'/>
        <img src={node} alt='node' className='skills-img'/>
        <img src={sass} alt='sass' className='skills-img'/>
        <img src={json} alt='json' className='skills-img'/>
        <img src={php} alt='php' className='skills-img'/>
      </div>
    </div>
  )
}

export default Skills