import React from "react";
import { newObserver } from "./observer";
import "./proyects.scss";
import Hostel from "../../../img/proyectos/dinamitaHostelProyect.png";
import Pi from "../../../img/proyectos/pi.png";
import generatos from "../../../img/proyectos/generator.png";
import rym from "../../../img/proyectos/rick and morty.png";
import portafolio from "../../../img/proyectos/MiPortafolio.png";

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

function Proyects() {
  const proyectos = React.useRef();
  const right = React.useRef();
  const left = React.useRef();

  React.useEffect(() => {
    newObserver(proyectos.current);
  }, []);

  return (
    <div ref={proyectos} className="proyects">
      <span ref={left} className="left"></span>
      <span ref={right} className="right"></span>
      <div className="contenedorProyectos">
        <p className="tit">Algunos que Realize/Participe (Falta estilizar )</p>
        <div className="proyectos">
          <div className="proyecto">
            <img src={Hostel} alt="" width={"300px"} />
            <div className="infoP">
              <p className="tituloP">PF - Dinamita Hostel</p>
              <p className="description">
                Proyecto final del Bootcamp{" "}
                <span className="res">SoyHenry</span> en donde trabaje junto a
                otros 6 desarrolladores <span className="res">FullStack</span>,
                la aplicacion consiste en una pagina de reserva de habitaciones,
                contiene su propio <span className="res">Dashboard</span> para
                el administrador...
              </p>
              <div>
                <p>Tecnologias que se uso</p>
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
          </div>
          <div className="proyecto">
            <img src={portafolio} alt="MiPortafolio" width={"300px"} />
            <div className="infoP">
              <p className="tituloP">Mi Portafolio</p>
              <p className="description">
                Mi Portafolio en el que siguo trabajando y actualizo
                constantemente :D
              </p>
              <div className="tecnologias">
                <p>Tecnologias que se uso</p>
                <img src={html} alt="html5" />
                <img src={css} alt="Css3" />
                <img src={sass} alt="Sass" />
                <img src={js} alt="Javascript" />
                <img src={reactJS} alt="ReactJS" />
              </div>
            </div>
          </div>
          <div className="proyecto">
            <img src={Pi} alt="" width={"300px"} />
            <div className="infoP">
              <p className="tituloP">PI - Proyecto individual</p>
              <p className="description">
                Proyecto individual realizado en el Bootcamp{" "}
                <span className="res">SoyHenry</span>, consiste en una
                aplicacion en la cual podemos ver diferentes tipos de recetas,
                se puede filtrar por nombre, tipo de dieta y puntaje de salud,
                tambien posee su propio <span className="res">SearchBar</span>{" "}
                para la busqueda de receta. Tambien permite la creacion de
                recetas nuevas que se guardan en una base de datos de{" "}
                <span className="res">Postgres</span>
              </p>
              <div>
                <p>Tecnologias que se uso</p>
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
          </div>
          <div className="proyecto">
            <img src={rym} alt="RickAndMorty Proyecto React" width={"300px"} />
            <div className="infoP">
              <p className="tituloP">App Rick y Morty</p>
              <p className="description">
                Una Aplicacion web consumiendo la{" "}
                <span className="res">API</span> de Rick y Morty para poder ver
                informacion de Personajes, Capitulos y/o Episodios
              </p>
              <div>
                <p>Tecnologias que se uso</p>
                <div className="tecnologias">
                  <img src={css} alt="css" />
                  <img src={reactJS} alt="react" />
                  <img src={js} alt="Javascript" />
                </div>
              </div>
            </div>
          </div>
          <div className="proyecto">
            <img src={generatos} alt="" width={"300px"} />
            <div className="infoP">
              <p className="tituloP">Generador de contraseña</p>
              <p className="description">
                Generador de contraseña, permite un minimo de 8 y un maximo de
                30 caracteres, da opcion para incluir numero, mayusculas y
                simbolos especiales.
              </p>
              <div>
                <p>Tecnologias que se uso</p>
                <div className="tecnologias">
                  <img src={css} alt="css" />
                  <img src={reactJS} alt="react" />
                  <img src={js} alt="Javascript" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
