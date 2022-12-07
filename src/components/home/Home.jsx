import React from 'react'
import Typed from 'typed.js'
import LinkedIn from '../../../img/svg/linkedin-svgrepo-com.svg'
import GitHub from '../../../img/svg/github-svgrepo-com.svg'
import Gmail from '../../../img/svg/gmail-svgrepo-com.svg'
import './Home.scss'
import { Gradient } from '../gradient'

// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas


function Home() {

  const fullStack = React.useRef();
  const miNombre = React.useRef();
  const canvas = React.useRef();

  React.useEffect(()=>{
    // new Typed(soy.current,{
    //   strings: ['HTML5','CSS3','ReactJS', 'Redux','NodeJS','Express','PostgreSQL','Sequelize'],
    //   typeSpeed: 130,
    //   backSpeed: 90,
    //   loop: true
    // })

    gradient.initGradient('#gradient-canvas')

    new Typed(fullStack.current,{
      strings: ['FullStack','Developer'],
      typeSpeed: 120,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    })
  },[])

  return (
    <div className='Home'>
      <canvas ref={canvas} id="gradient-canvas" data-js-darken-top data-transition-in />
      <div className="soy">
        <div className="nombre">
          <p><span className='textXD'>Bienvenido</span>, mi nombre es</p>
          <h1>Fernando Toledo</h1>
          <label>Soy </label><label className='textXD' ref={fullStack}></label>
        </div>
        <div className="img">
          <div className="perfil">
            <p>Contactame</p>
            <label className='hoverAdv'>Hover</label>
            <div className="contact">
              <div>
                <img src={LinkedIn} alt="LinkedIn" /><a href='https://www.linkedin.com/in/toledo-fernando-266612245/' target='_blank'>LinkedId</a>
              </div>
              <div>
                <img src={Gmail} alt="Gmail" /><a data-color='#5b60b6' href='https://mail.google.com/mail/u/0/?fs=1&to=toledof764@gmail.com&tf=cm' target='_blank' >Gmail</a>
              </div>
              <div>
                <img src={GitHub} alt="Github" /><a href='https://github.com/ToledoFernando' target='_blank'>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home