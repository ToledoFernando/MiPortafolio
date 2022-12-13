import React from "react";
import github from "../../../img/svg/github-svgrepo-com.svg";
import linkedind from "../../../img/svg/linkedin-svgrepo-com.svg";
import "./Contact.scss";

const initial = {
  nombre: "",
  apellido: "",
  email: "",
};

function Contact() {
  const [datos, setDatos] = React.useState({});

  return (
    <div className="contacto" id="Contacto">
      <div className="contactame">
        <p className="contactTitle">Contactame</p>
        <p>Tambien puedes ver mis perfiles en:</p>
        <div className="perfiles">
          <a href="https://github.com/ToledoFernando" target="_blank">
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/toledo-fernando-266612245/"
            target="_blank"
          >
            <img src={linkedind} alt="linkedin" />
          </a>
        </div>
        <label>
          Salta - <span className="res">Argentina</span>
        </label>
        <br />
        <br />
        <a
          className="whats"
          href="https://api.whatsapp.com/send/?phone=5493875500569&text&type=phone_number&app_absent=0"
        >
          Contactarme por WhatsApp
        </a>
      </div>
      <form>
        <span className="span">
          <input type="text" placeholder="Nombre y Apellido*" />
        </span>
        <span className="span">
          <input type="text" placeholder="Email*" />
        </span>
        <span className="span">
          <input
            type="text"
            placeholder="Numero de Contacto (No obligatorio)"
          />
        </span>
        <span className="span textarea">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Mensaje*"
          ></textarea>
        </span>
        <input type="submit" className="enviar" value="Enviar" />
      </form>
    </div>
  );
}

export default Contact;
