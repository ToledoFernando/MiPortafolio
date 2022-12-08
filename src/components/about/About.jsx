import React from 'react'
import LinkedIn from '../../../img/svg/linkedin-svgrepo-com.svg'
import GitHub from '../../../img/svg/github-svgrepo-com.svg'
import Gmail from '../../../img/svg/gmail-svgrepo-com.svg'
import './About.scss'

function About() {
  return (
    <div>
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
  )
}

export default About