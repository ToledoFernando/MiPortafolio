import React from "react";
import Typed from "typed.js";
import { Gradient } from "../gradient";
import logoPC from "../../../img/pngLap.png";
import "./Home.scss";

// Create your instance
const gradient = new Gradient();

// Call `initGradient` with the selector to your canvas

function Home(props) {
  const fullStack = React.useRef();
  const canvas = React.useRef();

  React.useEffect(() => {
    gradient.initGradient("#gradient-canvas");

    new Typed(fullStack.current, {
      strings: ["FullStack", "Developer"],
      typeSpeed: 120,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <div className="Home">
      <canvas
        ref={canvas}
        id="gradient-canvas"
        data-js-darken-top
        data-transition-in
      />
      <div className="soy">
        <div className="nombre">
          <p>
            <span className="textXD">Bienvenido</span>, mi nombre es
          </p>
          <h1>Fernando Toledo</h1>
          <label>Soy </label>
          <label className="textXD" ref={fullStack}></label>
        </div>
        <div className="img2">
          <img ref={props.mov} data-value="3" src={logoPC} alt="" />
        </div>
      </div>
      <div className="sobre">
        <p>Sobre Mi</p>
      </div>
    </div>
  );
}

export default Home;
