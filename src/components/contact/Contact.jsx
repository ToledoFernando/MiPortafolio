import React from "react";
import github from "../../../img/svg/github-svgrepo-com.svg";
import linkedind from "../../../img/svg/linkedin-svgrepo-com.svg";
import "./Contact.scss";
import cargando from "../../../img/svg/cargando.svg";
import emailjs from "@emailjs/browser";

const initial = {
  to_name: "",
  correoContacto: "",
  numero: "",
  message: "",
};

function Contact() {
  const [datos, setDatos] = React.useState(initial);
  const [load, setLoad] = React.useState(false);

  const fail = React.useRef();
  const ok = React.useRef();

  const [error, setError] = React.useState({
    to_name: true,
    correoContacto: true,
    message: true,
  });

  const xd = async (e) => {
    try {
      e.preventDefault();
      setLoad(true);
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        datos,
        import.meta.env.VITE_CODE
      );
      ok.current.className = "AlertaOk";
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
      fail.current.className = "AlertaFail";
    }
  };

  const validate = (e) => {
    if (e.target.name == "to_name") {
      if (e.target.value.length < 3) {
        setError({ ...error, [e.target.name]: true });
        e.target.className = "invalid";
      } else {
        setError({ ...error, [e.target.name]: false });
        e.target.classList.remove("invalid");
      }
    }
    if (e.target.name == "correoContacto") {
      //=========================//
      var copy = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      //=========================//
      if (!copy.test(e.target.value)) {
        setError({ ...error, [e.target.name]: true });
        e.target.className = "invalid";
      } else {
        setError({ ...error, [e.target.name]: false });
        e.target.classList.remove("invalid");
      }
    }
    if (e.target.name == "message") {
      if (e.target.value < 10) {
        setError({ ...error, [e.target.name]: true });
        e.target.className = "invalid";
      } else {
        setError({ ...error, [e.target.name]: false });
        e.target.classList.remove("invalid");
      }
    }
  };

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    validate(e);
  };

  const deleteAlert = (e) => {
    e.target.parentElement.className += " cerrarAlerta";
  };

  return (
    <div className="contacto" id="Contacto">
      <div ref={ok} className="cerrarAlerta AlertaOk">
        <button onClick={deleteAlert} className="cerrarA">
          X
        </button>
        <p>Correo Enviado con exito</p>
      </div>
      <div ref={fail} className="cerrarAlerta AlertaFail">
        <button onClick={deleteAlert} className="cerrarA">
          X
        </button>
        <div>
          <p>Ocurrio un error al enviar el Correo</p>
          <label>
            Si el problema continua comunicate por otro medio mientras arreglo
            el problema
          </label>
        </div>
      </div>
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
      <form onSubmit={xd}>
        <span className="span">
          <input
            autoComplete="off"
            onFocus={(e) => e.target.classList.remove("invalid")}
            onBlur={validate}
            type="text"
            onChange={handleChange}
            value={datos.to_name}
            placeholder="Nombre y Apellido*"
            name="to_name"
          />
        </span>
        <span className="span">
          <input
            autoComplete="off"
            onFocus={(e) => e.target.classList.remove("invalid")}
            onBlur={validate}
            type="text"
            onChange={handleChange}
            value={datos.correoContacto}
            name="correoContacto"
            placeholder="Email*"
          />
        </span>
        <span className="span">
          <input
            autoComplete="off"
            onChange={handleChange}
            value={datos.numero}
            type="text"
            name="numero"
            placeholder="Numero de Contacto (No obligatorio)"
          />
        </span>
        <span className="span textarea">
          <textarea
            autoComplete="off"
            onFocus={(e) => e.target.classList.remove("invalid")}
            onBlur={validate}
            onChange={handleChange}
            value={datos.message}
            name="message"
            cols="30"
            rows="10"
            placeholder="Mensaje*"
          ></textarea>
        </span>
        <button
          type="submit"
          disabled={error.to_name || error.correoContacto || error.message}
          className={load ? "enviar dos" : "enviar"}
        >
          {load ? <img src={cargando} alt="Cargando" /> : "Enviar"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
