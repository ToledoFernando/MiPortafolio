import React from "react";
import Typed from "typed.js";
import { Gradient } from "../gradient";
import logoPC from "../../../img/pngLap.png";
import "./Home.scss";

import express from "../../../img/svg/express.svg";
import nodejs from "../../../img/svg/nodejs.svg";
import reactJS from "../../../img/svg/reactjs.svg";
import redux from "../../../img/svg/redux.svg";
import js from "../../../img/svg/js.svg";

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
      <div className="back">
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
            <img src={js} alt="Javascript" className="iconoIMG" />
            <img src={reactJS} alt="reactJS" className="iconoIMG" />
            <img src={redux} alt="redux" className="iconoIMG" />
            <img src={nodejs} alt="nodeJS" className="iconoIMG" />
            <img src={express} alt="express" className="iconoIMG" />
            <img
              className="imglaptop"
              ref={props.mov}
              data-value="3"
              src={logoPC}
              alt="laptop"
            />
          </div>
        </div>
        <div className="sobre">
          <p>
            <a id="sobreMi" href="#about">
              Sobre Mi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
