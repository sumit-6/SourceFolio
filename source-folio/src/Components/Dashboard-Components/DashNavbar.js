import React, { useState } from "react";
import "./dashnavbar.css";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import ReactSwitch from "react-switch";

const NavBar = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header class="header" id="light">
      <nav className="nav container">
        <Link className="nav__logo" style={{ color: "white" }}>
          SourceFolio <span style={{ color: "orange" }}>.</span>
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                // smooth={true}
                // duration={1000}
                className="nav__link"
                style={{ color: "orange" }}
              >
                <i className="nav__icon"></i>About us
              </Link>
            </li>

            <li className="nav__item">
              <Link
                // duration={1000}
                className="nav__link"
                style={{ color: "white" }}
              >
                <i className="nav__icon"></i>View sourceFolio
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="experience"
                // smooth={true}
                // duration={1000}
                className="nav__link"
                style={{ color: "white" }}
              >
                <i className="nav__icon"></i>View My SourceFolio
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="projects"
                // smooth={true}
                // duration={1000}
                className="nav__link"
                style={{ color: "white" }}
              >
                <i className="nav__icon"></i>Contact
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="projects"
                // smooth={true}
                // duration={1000}
                className="nav__link"
                style={{ color: "white" }}
              >
                <i className="nav__icon"></i>Login/Signup
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="projects"
                // smooth={true}
                // duration={1000}
                className="nav__link"
                style={{ color: "white" }}
              >
                <i className="nav__icon"></i>Logout
              </Link>
            </li>
          </ul>

          <i
            style={{ color: "white" }}
            className="nav__close"
            onClick={() => {
              showMenu(!Toggle);
            }}
          >
            <RxCross2 />
          </i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => {
            showMenu(!Toggle);
          }}
        >
          <i style={{ color: "white" }} className="navbar__menu__list">
            <AiOutlineMenu />
          </i>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
