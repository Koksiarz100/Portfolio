import React from 'react'
import './projects.scss'
import placeholder from '../../assets/placeholder.png'
import git from '../../assets/git.png'


const Card1 = {
  link: 'index.html',
  title: 'Projekt 1',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos tenetur velit deserunt, recusandae aliquam ea, porro provident mollitia consequuntur veniam. Quibusdam dolore pariatur vel provident a nesciunt illum iusto?',
}

const Card2 = {
  link: 'index.html',
  title: 'Projekt 2',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos tenetur velit deserunt, recusandae aliquam ea, porro provident mollitia consequuntur veniam. Quibusdam dolore pariatur vel provident a nesciunt illum iusto?',
}

const Card3 = {
  link: 'index.html',
  title: 'Projekt 3',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos tenetur velit deserunt, recusandae aliquam ea, porro provident mollitia consequuntur veniam. Quibusdam dolore pariatur vel provident a nesciunt illum iusto?',
}

function ProjectCard(card : number) {

  let Card : any;

  
  if(card === 1) {
    Card = Card1
  }
  else if(card === 2) {
    Card = Card2
  }
  else if(card === 3) {
    Card = Card3
  }
  
  return (
    <div className='projects-container'>
      <div className='project-card-main'>
        <div className='project-card-img'>
          <img src={placeholder} alt={Card.title} className='project-image' />
        </div>
        <div className='project-section'>
          <span className='project-card-title'>{Card.title}</span>
          <span>{Card.text}</span>
        </div>
        <div className='project-footer'>
          <a className='project-link' href={Card.link}>
            GitHub
            <img src={git} alt='git' className='git-icon' />
          </a>
        </div>
        <div className='border-bottom'></div>
      </div>
    </div>
  );
}

const slides = [1, 2, 3];

function ProjectsCarusel(start : number) {
  let slide1 : number;
  let slide2 : number;
  let slide3 : number;

  if(start === 1) {
    return (
      <>
        {ProjectCard(1)}
        {ProjectCard(2)}
        {ProjectCard(3)}
      </>
    )
  }
  else {
    slide1 = slides[0];
    slide2 = slides[1];
    slide3 = slides[2];

    let goingUp = slides[0];
    slides.push(goingUp);
    slides.shift();
    console.log(slides);
    
    return (
      <>
        {ProjectCard(slide1)}
        {ProjectCard(slide2)}
        {ProjectCard(slide3)}
      </>
    )
  }
}


function Projects() {
  const [start, setStart] = React.useState(1)

  return (
    <div className='projects-wrapper' id='projects'>
      <span className='projects-title'>Projects</span>
      <div className='projects-containers-wrapper'>
        <button onClick={() => setStart(start+1)}>Next</button>
        {ProjectsCarusel(start)}
        <button>Previous</button>
      </div>
    </div>
  )
}

export default Projects