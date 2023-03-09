import React from 'react'
import './home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className='home-wrapper' id='home'>
        <span className='home-title'>Hello</span>
        <p>I'm Jarek, a web developer.</p>
      </div>
    )
  }
}

export default Home