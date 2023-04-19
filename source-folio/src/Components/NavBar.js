import React,{useState} from "react";
import "./navbar.css"
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
// import ReactSwitch from "react-switch";
// import DarkMode from "./DarkMode";

const NavBar=(props)=>{

    const [Toggle,showMenu]=useState(false);
    return (
      <header class="header" id="light">
        <nav className="nav container">
          <Link to="aboutme" className="nav__logo" style={{ color: "white" }}>
            {props.name} <span>.</span>
          </Link>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list ">
              <li className="nav__item">
                <Link
                  to="aboutme"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={{ color: "orange" }}
                >
                  <i className="nav__icon"></i>About me
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="education"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={{ color: "white" }}
                >
                  <i className="nav__icon"></i>Education
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
                  <i className="nav__icon"></i>Experience
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
                  <i className="nav__icon"></i>Projects
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="skills"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={{ color: "white" }}
                >
                  <i className="nav__icon"></i>Skills
                </Link>
              </li>

              <li className="nav__item">
                <Link
                  to="achivements"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={{ color: "white" }}
                >
                  <i className="nav__icon"></i>Achivements
                </Link>
              </li>

              {/* <DarkMode/> */}
 
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
            <i style={{ color: "white"}} className="navbar__menu__list">
              <AiOutlineMenu />
            </i>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;