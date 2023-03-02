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
    <div className='project-main'>
      <img src={placeholder} alt={Card.title} className='project-image' />
    </div>
    <div className='project-section'>
      <span className='project-card-title'>{Card.title}</span>
      <span>{Card1.text}</span>
    </div>
    <div className='project-footer'>
      <a className='project-link' href={Card.link}>
        GitHub
        <img src={git} alt='git' className='git-icon' />
      </a>
    </div>
    <div className='border-bottom'></div>
  </div>
  );
}

function ProjectsCarusel(start : number) {
    
  let slide : number = start;
  let slide1 : number = 1;
  let slide2 : number = 2;
  let slide3 : number = 3;

  if(slide === 2){
    slide1 = 2;
    slide2 = 3;
    slide3 = 1;
  }
  else if(slide === 3){
    slide1 = 3;
    slide2 = 1;
    slide3 = 2;
  }
  
  return (
    <>
      {ProjectCard(slide1)}
      {ProjectCard(slide2)}
      {ProjectCard(slide3)}
    </>
  )
}


function Projects() {
  const [start, setStart] = React.useState(1)

  if(start===4){
    setStart(1)
  }

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