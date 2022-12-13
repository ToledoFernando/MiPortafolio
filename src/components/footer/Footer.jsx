import React from "react";
import "./Footer.scss";
import linkedin from "../../../img/svg/linkedin-svgrepo-com.svg";
import github from "../../../img/svg/github-svgrepo-com.svg";
import gmail from "../../../img/svg/gmail-svgrepo-com.svg";

function Footer() {
  return (
    <div className="footer">
      <span className="linea"></span>
      <div className="inf">
        <p>
          <label>©2022 ftoledo.online</label> | Toledo Web Developer
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/toledo-fernando-266612245/"
            target="_blank"
          >
            <img src={linkedin} alt="link LinkedIn" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=toledof764@gmail.com&tf=cm"
            target="_blank"
          >
            <img src={gmail} alt="Link Gmail" />
          </a>{" "}
          <a href="https://github.com/ToledoFernando" target="_blank">
            <img src={github} alt="link github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
