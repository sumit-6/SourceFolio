import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import "./CssFiles/home.css"
import { useSelector } from "react-redux";
import Information from "./Information";

const Social=()=>{
  const { token, user, isLoading } = useSelector(state => state.portfolio.auth);
    const { user_id, instagram, linkedIn, githubProfile } = useSelector(state => state.portfolio.data);
    return (
      <div className="home__social">
        {!isLoading && user && token && user.uid == user_id && <Information />}

        {instagram !== "" ? <a
          href={`${instagram}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiInstagram />
        </a> : null}

        {linkedIn !== "" ? <a
          href={`${linkedIn}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiLinkedin />
        </a> : null}

        {githubProfile !== "" ? <a
          href={`${githubProfile}`}
          className="home__social-icon"
          target="_blank"
        >
          <SiGithub />
        </a> : null}
      </div>
    );
}

export default Social;