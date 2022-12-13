import React from "react";
import { newObserver } from "./observer";
import "./proyects.scss";
import Hostel from "../../../img/proyectos/dinamitaHostelProyect.png";
import Pi from "../../../img/proyectos/pi.png";
import generatos from "../../../img/proyectos/generator.png";
import rym from "../../../img/proyectos/rick and morty.png";
import portafolio from "../../../img/proyectos/MiPortafolio.png";
import typed from "typed.js";

//==========================================//
import css from "../../../img/svg/css.svg";
import express from "../../../img/svg/express.svg";
import nodejs from "../../../img/svg/nodejs.svg";
import reactJS from "../../../img/svg/reactjs.svg";
import redux from "../../../img/svg/redux.svg";
import sass from "../../../img/svg/sass.svg";
import pgsql from "../../../img/svg/pgsql.svg";
import sequelize from "../../../img/svg/sequelize.svg";
import js from "../../../img/svg/js.svg";
import bootstrap from "../../../img/svg/bootstrap-4.svg";
import git from "../../../img/svg/git.svg";
import html from "../../../img/svg/html.svg";
import newW from "../../../img/svg/new.svg";
import github from "../../../img/svg/github-svgrepo-com.svg";

function Proyects() {
  const proyectos = React.useRef();
  const rp = React.useRef();

  React.useEffect(() => {
    new typed(rp.current, {
      strings: ["Realice", "Participe"],
      typeSpeed: 120,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <div ref={proyectos} className="proyects" id="Proyectos">
      <div className="contenedorProyectos">
        <p className="tit">
          Algunos Proyectos que <span ref={rp} className="res"></span>{" "}
        </p>
        <div className="proyectos">
          <div className="proyecto">
            <img src={Hostel} alt="" className="imgProyecto" />
            <div className="infoP">
              <p className="tituloP">PF - Dinamita Hostel</p>
              <p className="description">
                Proyecto final/Grupal del Bootcamp{" "}
                <span className="res">SoyHenry</span> en donde trabaje junto a
                otros 6 desarrolladores <span className="res">FullStack</span>
              </p>
              <div>
                <p>Tecnologias</p>
                <div className="tecnologias">
                  <img src={js} alt="Javascript" />
                  <img src={bootstrap} alt="Bootstrap" />
                  <img src={reactJS} alt="React" />
                  <img src={redux} alt="Redux" />
                  <img src={nodejs} alt="NodeJS" />
                  <img src={express} alt="ExpressJS" />
                  <img src={pgsql} alt="PostgreSQL" />
                  <img src={sequelize} alt="Sequelize" />
                  <img src={git} alt="git" />
                </div>
              </div>
            </div>
            <div className="abrirRepo">
              <a href="https://hostel-project.vercel.app/" target="_blank">
                <img src={newW} alt="deploy" />
              </a>
              <a
                href="https://github.com/kripto-c/HostelProject"
                target="_blank"
              >
                <img src={github} alt="github" />
              </a>
            </div>
          </div>

          <div className="proyecto">
            <img src={portafolio} alt="MiPortafolio" className="imgProyecto" />
            <div className="infoP">
              <p className="tituloP">Mi Portafolio</p>
              <p className="description">
                <span className="res">Mi Portafolio</span> en el que sigo
                trabajando y actualizo constantemente...
              </p>
              <p>Tecnologias</p>
              <div className="tecnologias">
                <img src={html} alt="html5" />
                <img src={css} alt="Css3" />
                <img src={sass} alt="Sass" />
                <img src={js} alt="Javascript" />
                <img src={reactJS} alt="ReactJS" />
              </div>
            </div>
            <div className="abrirRepo">
              <a href="https://ftoledo.online/" target="_blank">
                <img src={newW} alt="deploy" />
              </a>
              <a
                href="https://github.com/ToledoFernando/MiPortafolio"
                target="_blank"
              >
                <img src={github} alt="github" target="_blank" />
              </a>
            </div>
          </div>

          <div className="proyecto">
            <img src={Pi} alt="" className="imgProyecto" />
            <div className="infoP">
              <p className="tituloP">PI - Proyecto individual</p>
              <p className="description">
                Una <span className="res">App</span> que muestra diferentes
                tipos de recetas
              </p>
              <div>
                <p>Tecnologias</p>
                <div className="tecnologias">
                  <img src={js} alt="Javascript" />
                  <img src={reactJS} alt="React" />
                  <img src={redux} alt="Redux" />
                  <img src={nodejs} alt="NodeJS" />
                  <img src={express} alt="ExpressJS" />
                  <img src={pgsql} alt="PostgreSQL" />
                  <img src={sequelize} alt="Sequelize" />
                </div>
              </div>
            </div>
            <div className="abrirRepo">
              <a
                href="https://github.com/ToledoFernando/HenryFood"
                target="_blank"
              >
                <img src={github} alt="github" target="_blank" />
              </a>
            </div>
          </div>

          <div className="proyecto">
            <img
              src={rym}
              alt="RickAndMorty Proyecto React"
              className="imgProyecto"
            />
            <div className="infoP">
              <p className="tituloP">App Rick y Morty</p>
              <p className="description">
                Una App utilizando <span className="res">API</span> de Rick y
                Morty
              </p>
              <div>
                <p>Tecnologias</p>
                <div className="tecnologias">
                  <img src={html} alt="html" />
                  <img src={css} alt="css" />
                  <img src={reactJS} alt="react" />
                  <img src={js} alt="Javascript" />
                </div>
              </div>
            </div>
            <div className="abrirRepo">
              <a href="https://rick-y-morty-prueba.vercel.app/" target="_blank">
                <img src={newW} alt="deploy" />
              </a>
              <a
                href="https://github.com/ToledoFernando/Rick-y-Morty_Prueba"
                target="_blank"
              >
                <img src={github} alt="github" target="_blank" />
              </a>
            </div>
          </div>

          <div className="proyecto">
            <img src={generatos} alt="" className="imgProyecto" />
            <div className="infoP">
              <p className="tituloP">Generador de contraseña</p>
              <p className="description">
                Generador de contraseña de <span className="res">8 a 30</span>{" "}
                digitos
              </p>
              <div>
                <p>Tecnologias</p>
                <div className="tecnologias">
                  <img src={html} alt="html" />
                  <img src={css} alt="css" />
                  <img src={reactJS} alt="react" />
                  <img src={js} alt="Javascript" />
                </div>
              </div>
            </div>
            <div className="abrirRepo">
              <a
                href="https://generator-password-zeta.vercel.app/"
                target="_blank"
              >
                <img src={newW} alt="deploy" />
              </a>
              <a
                href="https://github.com/ToledoFernando/GeneratorPassword"
                target="_blank"
              >
                <img src={github} alt="github" target="_blank" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
