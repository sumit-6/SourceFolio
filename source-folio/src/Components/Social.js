import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import "./home.css"

const Social=(props)=>{
    return (
      <div className="home__social">
        <a
          href={`${props.instagram}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiInstagram />
        </a>

        <a
          href={`${props.linkedIn}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiLinkedin />
        </a>

        <a
          href={`${props.githubProfile}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiGithub />
        </a>
      </div>
    );
}

export default Social;