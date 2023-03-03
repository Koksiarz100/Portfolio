import { useState } from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="app-wrapper">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App