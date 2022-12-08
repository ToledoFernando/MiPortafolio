import React from "react";
import "./NavBar.scss";

function NavBar() {
  const navBar = React.useRef();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (Math.round(e.srcElement.scrollingElement.scrollTop) > 30)
        navBar.current.setAttribute("style", "background-color: #000");
      if (Math.round(e.srcElement.scrollingElement.scrollTop) < 30)
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
          <li>Inicio</li>
          <li>About</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
