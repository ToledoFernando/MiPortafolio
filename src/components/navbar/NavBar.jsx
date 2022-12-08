import React from 'react'
import './NavBar.scss';

function NavBar() {

  const navBar = React.useRef();

  React.useEffect(()=>{
    window.addEventListener('scroll',(e)=>{
      if(Math.round(e.srcElement.scrollingElement.scrollTop) > 30) navBar.current.setAttribute('style','background-color: #000')
      if(Math.round(e.srcElement.scrollingElement.scrollTop) < 30) navBar.current.setAttribute('style','background-color: #00000000')
    })
  })

  return (
    <nav ref={navBar}>
      <div className='logo'>
        <p>{'< />'}</p>
        <p>FullStack Developer_</p>
      </div>
      <div className='opt'>
        <ul>
          <li>Inicio</li>
          <li>About</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar