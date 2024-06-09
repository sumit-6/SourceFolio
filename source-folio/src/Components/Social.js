import React, { useContext } from "react";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import "./CssFiles/home.css"
import Information from "./Information";
import { DataContext } from "./Portfolio";

const Social=()=>{
    const { state } = useContext(DataContext);
    return (
      <div className="home__social">
        {!state.auth.isLoading && state.auth.user && state.auth.token && state.auth.user.uid == state.data.user_id && <Information />}

        {state.data.instagram !== "" ? <a
          href={`${state.data.instagram}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiInstagram />
        </a> : null}

        {state.data.linkedIn !== "" ? <a
          href={`${state.data.linkedIn}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiLinkedin />
        </a> : null}

        {state.data.githubProfile !== "" ? <a
          href={`${state.data.githubProfile}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiGithub />
        </a> : null}
      </div>
    );
}

export default Social;