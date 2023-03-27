import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import "./home.css"

const Social=()=>{
    return (
      <div className="home__social">
        <a
          href="https://www.instagram.com"
          className="home__social-icon"
          target="_blank"
        >
          <SiInstagram />
        </a>

        <a
          href="https://www.instagram.com"
          className="home__social-icon"
          target="_blank"
        >
          <SiLinkedin />
        </a>

        <a
          href="https://www.instagram.com"
          className="home__social-icon"
          target="_blank"
        >
          <SiGithub />
        </a>
      </div>
    );
}

export default Social;