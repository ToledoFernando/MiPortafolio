import LinkedIn from "../../../img/svg/linkedin-svgrepo-com.svg";
import GitHub from "../../../img/svg/github-svgrepo-com.svg";
import Gmail from "../../../img/svg/gmail-svgrepo-com.svg";

//=======ICON TECH======//
import css from "../../../img/svg/css.svg";
import express from "../../../img/svg/express.svg";
import nodejs from "../../../img/svg/nodejs.svg";
import reactJS from "../../../img/svg/reactjs.svg";
import redux from "../../../img/svg/redux.svg";
import sass from "../../../img/svg/sass.svg";
import pgsql from "../../../img/svg/pgsql.svg";
import sequelize from "../../../img/svg/sequelize.svg";
import html from "../../../img/svg/html.svg";
import js from "../../../img/svg/js.svg";
import git from "../../../img/svg/git.svg";
import scrum from "../../../img/scrum.png";

import "./About.scss";

function About() {
  return (
    <div className="about" id="about">
      <section>
        <div className="img">
          <div className="perfil">
            <p>Mis Redes</p>
            <label className="hoverAdv">Hover</label>
            <div className="contact">
              <div>
                <img src={LinkedIn} alt="LinkedIn" />
                <a
                  href="https://www.linkedin.com/in/toledo-fernando-266612245/"
                  target="_blank"
                >
                  LinkedId
                </a>
              </div>
              <div>
                <img src={Gmail} alt="Gmail" />
                <a
                  data-color="#5b60b6"
                  href="https://mail.google.com/mail/u/0/?fs=1&to=toledof764@gmail.com&tf=cm"
                  target="_blank"
                >
                  Gmail
                </a>
              </div>
              <div>
                <img src={GitHub} alt="Github" />
                <a href="https://github.com/ToledoFernando" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="informacion">
          <p>
            Me llamo <span className="res">Fernando Toledo</span>
          </p>
          <p>
            Tengo 20 años, me inicie en la programacion a los 18 años, comenze
            de forma <span className="res">autodidacta</span> con tecnologias
            como HTML5, CSS3, PHP, Ajax y MySQL. Actualmente me encuentro en la
            etapa final del bootcamp de <span className="res">SoyHenry</span> en
            el que me recibo como{" "}
            <span className="res">FullStack - Developer</span>. En el mismo
            adquiri conocimientos en tecnologias de desarrollo web con
            Javascript, NodeJS, Express, PostgreSQL y Sequelize. <br /> Me gusta
            la programacion y siempre estoy buscando{" "}
            <span className="res">aprender mas</span>...
          </p>
          <a
            className="cv"
            href="https://drive.google.com/file/d/19tEhh0nnvXpCAnTzDxyansZgvdBFXl9p/view?usp=sharing"
          >
            Descargar CV
          </a>
        </div>
      </section>
      <section>
        <p className="tech">Tech Skills</p>
        <div className="tech_Skills">
          <div className="frontEnd">
            <div>
              <p>Front-End</p>
            </div>
            <img src={html} alt="html" title="HTML5" />
            <img src={css} alt="css" title="CSS3" />
            <img src={sass} alt="sass" title="sass" />
            <img src={js} alt="javascript" title="Javascript" />
            <img src={reactJS} alt="reactJS" title="ReactJS" />
            <img src={redux} alt="redux" title="Redux" />
          </div>
          <div className="backEnd">
            <div>
              <p>Back-End</p>
            </div>
            <img src={nodejs} alt="NodeJS" title="NodeJS" />
            <img src={express} alt="Express" title="Express" />
            <img src={pgsql} alt="PostgreSQL" title="PostgreSQL" />
            <img src={sequelize} alt="Sequelize" title="Sequelize" />
          </div>
          <div className="otros">
            <div>
              <p>Otros</p>
            </div>
            <img src={git} alt="Git" title="Git" />
            <img src={scrum} alt="Scrum" title="scrum" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
