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

/**
 * TODO:
 * * - Dodać animacje.
 * ! - Dodać responsywność.
 * * - Pokazać jakoś jakie umiejętności posiadam.
 * ? - Może rowijane na hover?
 */

class Skills extends React.Component {
  render() {
      return(
        <div className='skills-wrapper' id='skills'>
          
          <span className='skills-title'>My skills</span>
          <div className='skills-img-wrapper'>
            <div className='skills-card'>
              <div className='skills-card-background'>
                <span className='skills-img-titles'>Languages</span>
                <div className='skills-img-section'>
                  <img src={html} alt='html' className='skills-img'/>
                  <img src={css} alt='css' className='skills-img'/>
                  <img src={js} alt='js' className='skills-img'/>
                  <img src={ts} alt='ts' className='skills-img'/>
                  <img src={php} alt='php' className='skills-img'/>
                </div>
                <div className='skills-card-article'>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Html</span>
                    <div className='graph'><div className='graph-html-value'>100%</div></div>
                  </div>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Css</span>
                    <div className='graph'><div className='graph-css-value'>100%</div></div>
                  </div>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Javascript</span>
                    <div className='graph'><div className='graph-js-value'>70%</div></div>
                  </div>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Typescript</span>
                    <div className='graph'><div className='graph-ts-value'>90%</div></div>
                  </div>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>PHP</span>
                    <div className='graph'><div className='graph-php-value'>50%</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='skills-card'>
              <div className='skills-card-background'>
                <span className='skills-img-titles'>Frameworks</span>
                <div className='skills-img-section'>
                  <img src={react} alt='react' className='skills-img'/>
                  <img src={node} alt='node' className='skills-img'/>
                  <img src={json} alt='json' className='skills-img'/>
                  <img src={sass} alt='sass' className='skills-img'/>
                </div>
                <div className='skills-card-article'>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>React.js</span>
                    <div className='graph'><div className='graph-react-value'>80%</div></div>
                  </div>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Node.js</span>
                    <div className='graph'><div className='graph-node-value'>60%</div></div>
                  </div>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Json</span>
                    <div className='graph'><div className='graph-json-value'>90%</div></div>
                  </div>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Sass</span>
                    <div className='graph'>
                      <div className='graph-sass-value'>100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='skills-card'>
              <div className='skills-card-background'>
                <span className='skills-img-titles'>Tools</span>
                <div className='skills-img-section'>
                  <img src={github} alt='github' className='skills-img'/>
                  <img src={git} alt='git' className='skills-img'/>
                  <img src={fdb} alt='fdb' className='skills-img'/>
                </div>
                <div className='skills-card-article'>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Github</span>
                    <div className='graph'><div className='graph-github-value'>90%</div></div>
                  </div>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Git</span>
                    <div className='graph'><div className='graph-git-value'>80%</div></div>
                  </div>
                  <div className='graph-wrapper'>
                    <span className='graph-title'>Firebase</span>
                    <div className='graph'>
                      <div className='graph-fb-value'>60%</div>
                    </div>
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