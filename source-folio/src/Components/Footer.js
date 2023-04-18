import React from "react";
import "./footer.css"
import { AiOutlineHome } from "react-icons/ai";

const Footer=()=>{
    return (
      <section className="footer__copy">
        <div className="footer__content">
          <a className="buttonn">Edit SourceFolio</a>
          <a className="delete buttonn">Delete SourceFolio</a>
        </div>
        <div className="back__home ">
          <a className="buttonn">Back to home</a>
          <span className="home__icon">
            <AiOutlineHome />
          </span>
        </div>
      </section>
    );
}

export default Footer;