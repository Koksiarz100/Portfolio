import React from 'react'
import './projects.scss'
import placeholder from '../../assets/placeholder.png'
import git from '../../assets/git.png'

function Projects() {
  return (
    <div className='projects-wrapper' id='projects'>
      <span className='projects-title'>Projects</span>
      <div className='projects-containers-wrapper'>
        <div className='projects-container'>
          <div className='project-main'>
            <img src={placeholder} alt='project1' className='project-image' />
          </div>
          <div className='project-section'>
            <span className='project-card-title'>Projekt 1</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos tenetur velit deserunt, recusandae aliquam ea, porro provident mollitia consequuntur veniam. Quibusdam dolore pariatur vel provident a nesciunt illum iusto?</span>
          </div>
          <div className='project-footer'>
            <a className='project-link' href='index.html'>
              GitHub
              <img src={git} alt='git' className='git-icon' />
            </a>
          </div>
          <div className='border-bottom'></div>
        </div>
        <div className='projects-container'>
          <div className='project-main'>
            <img src={placeholder} alt='project2' className='project-image' />
          </div>
          <div className='project-section'>
            <span className='project-card-title'>Projekt 2</span>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quo asperiores doloremque tempora perferendis. Maxime saepe, neque rerum facilis autem quaerat enim vero voluptates odit? Ullam quaerat voluptas tempore adipisci.</span>
          </div>
          <div className='project-footer'>
            <a className='project-link' href='index.html'>
              GitHub
              <img src={git} alt='git' className='git-icon' />
            </a>
          </div>
          <div className='border-bottom'></div>
        </div>
        <div className='projects-container'>
          <div className='project-main'>
            <img src={placeholder} alt='project3' className='project-image' />
          </div>
          <div className='project-section'>
            <span className='project-card-title'>Projekt 3</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum, libero minima earum quae dolores? Labore cumque dicta, cum magni modi quaerat ipsam ad facere perferendis officiis adipisci consequuntur commodi!</span>
          </div>
          <div className='project-footer'>
            <a className='project-link' href='index.html'>
              GitHub
              <img src={git} alt='git' className='git-icon' />
            </a>
          </div>
          <div className='border-bottom'></div>
        </div>
      </div>
    </div>
  )
}

export default Projects