import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import "./CssFiles/home.css"

const Social=(props)=>{
    return (
      <div className="home__social">
        {props.instagram !== "" ? <a
          href={`${props.instagram}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiInstagram />
        </a> : null}

        {props.linkedIn !== "" ? <a
          href={`${props.linkedIn}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiLinkedin />
        </a> : null}

        {props.githubProfile !== "" ? <a
          href={`${props.githubProfile}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiGithub />
        </a> : null}
      </div>
    );
}

export default Social;