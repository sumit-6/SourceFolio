import React from "react";
import "./navbar.css"

const NavBar=()=>{
    return (
      <header class="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo" style={{ color: "white" }}>
            Vin Diesel
          </a>

          <div className="nav__menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#about me"
                  className="nav__link"
                  style={{ color: "orange" }}
                >
                  <i className="nav__icon"></i>About me
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#Education"
                  className="nav__link"
                  style={{ color: "white" }}
                >
                  <i className="nav__icon"></i>Education
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="Experience"
                  className="nav__link"
                  style={{ color: "white" }}
                >
                  <i className="nav__icon"></i>Experience
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="Projects"
                  className="nav__link"
                  style={{ color: "white" }}
                >
                  <i className="nav__icon"></i>Projects
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="Skills"
                  className="nav__link"
                  style={{ color: "white" }}
                >
                  <i className="nav__icon"></i>Skills
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="Achivements"
                  className="nav__link"
                  style={{ color: "white" }}
                >
                  <i className="nav__icon"></i>Achivements
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle">
            <i class="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;