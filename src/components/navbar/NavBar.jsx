import React from "react";
import "./NavBar.scss";

function NavBar() {
  const navBar = React.useRef();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (Math.round(e.target.scrollingElement.scrollTop) > 30)
        navBar.current.setAttribute("style", "background-color: #000");
      if (Math.round(e.target.scrollingElement.scrollTop) < 30)
        navBar.current.setAttribute("style", "background-color: #00000000");
    });
  });

  return (
    <nav ref={navBar}>
      <div
        className={active ? "menuAct" : "menu"}
        onClick={() => setActive(!active)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logo">
        <p>{"< />"}</p>
        <p>FullStack Developer_</p>
      </div>
      <div className={active ? "menuAv" : "opt"}>
        <ul>
          <li>
            <a href="#" onClick={() => setActive(false)}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActive(false)}>
              Sobre Mi
            </a>
          </li>
          <li>
            <a href="#Proyectos" onClick={() => setActive(false)}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#Contacto" onClick={() => setActive(false)}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
