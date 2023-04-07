import React from 'react'
import './projects.scss'
import github from '../../assets/icons/github.png'

class Projects extends React.Component {

  CardImg = (project : number ) => {
    if(project === 1) {
      return(
        <div className='card-img'>
          
        </div>
      );
    }
    else if(project === 2) {
      return(
        <div className='card-img'>
          
        </div>
      );
    }
    else if(project === 3) {
      return(
        <div className='card-img'>
          
        </div>
      );
    }
  }

  CardTitle = (project : number) => {
    if(project === 1) {
      return(
        <span className='card-title'>Project 1</span>
      );
    }
    else if(project === 2) {
      return(
        <span className='card-title'>Project 2</span>
      );
    }
    else if(project === 3) {
      return(
        <span className='card-title'>Project 3</span>
      );
    }
  }

  CardFooter = (project : number) => {
    if(project === 1) {
      return(
        <div className='card-footer'>
          <a href='#'>Github</a>
          <img src={github} alt='github' id='card-git'/>
        </div>
      );
    }
    else if(project === 2) {
      return(
        <div className='card-footer'>
          <a href='#'>Github</a>
          <img src={github} alt='github' id='card-git'/>
        </div>
      );
    }
    else if(project === 3) {
      return(
        <div className='card-footer'>
          <a href='#'>Github</a>
          <img src={github} alt='github' id='card-git'/>
        </div>
      );
    }
  }

  Card = (card : number) => {
    return(
      <div className='card' data-aos="flip-right" data-aos-duration="800" data-aos-delay="600">
        <div className='card-main'>
          {this.CardImg(card)}
          {this.CardTitle(card)}
        </div>
        {this.CardFooter(card)}
      </div>
    );
  }

  render(): React.ReactNode {
    return(
      <div className='projects-wrapper' id='projects'>
        <span className='projects-title' data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">Projects</span>
        <div className='cards-wrapper'>
          {this.Card(1)}
          {this.Card(2)}
          {this.Card(3)}
        </div>
      </div>
    );
  }
}

export default Projects