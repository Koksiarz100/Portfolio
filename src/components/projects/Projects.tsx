import React from 'react'
import './projects.scss'
import github from '../../assets/icons/github.png'

class Projects extends React.Component {

  Card = () => {
    return(
      <div className='card'>
        <div className='card-main'>
          <div className='card-img'>

          </div>
          <div className='card-title'>
            
          </div>
          <div className='card-description'>

          </div>
        </div>
        <div className='card-footer'>
          <a href='#'>Github</a>
          <img src={github} alt='github' id='card-git'/>
        </div>
      </div>
    );
  }

  render(): React.ReactNode {
    return(
      <div className='projects-wrapper' id='projects'>
        <h1>Projects</h1>
        <div className='cards-wrapper'>
          <this.Card />
          <this.Card />
          <this.Card />
        </div>
      </div>
    );
  }
}

export default Projects