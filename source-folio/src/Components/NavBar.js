import React,{useState} from "react";
import "./CssFiles/navbar.css"
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
// import ReactSwitch from "react-switch";
// import DarkMode from "./DarkMode";

const NavBar=(props)=>{

    const [Toggle,showMenu]=useState(false);
    const [onFocus, setOnFocus] = useState("aboutme")
    return (
      <header className="header" id="light">
        <nav className="nav nav__container">
          <Link to="aboutme" className="nav__logo" style={{ color: "white" }}>
            {props.name} <span style={{color: "orange"}}>.</span>
          </Link>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list ">
              <li className="nav__item" onMouseEnter={() => {setOnFocus("aboutme")}}>
                <Link
                  to="aboutme"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={onFocus === "aboutme" ? { color: "orange" } : {color: "white"}}
                >
                  <i className="nav__icon"></i>About me
                </Link>
              </li>

              <li className="nav__item" onMouseEnter={() => {setOnFocus("education")}}>
                <Link
                  to="education"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={onFocus === "education" ? { color: "orange" } : {color: "white"}}
                >
                  <i className="nav__icon"></i>Education
                </Link>
              </li>

              {props.myExperience.length ? <li className="nav__item" onMouseEnter={() => {setOnFocus("experience")}}>
                <Link
                  to="experience"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={onFocus === "experience" ? { color: "orange" } : {color: "white"}}
                >
                  <i className="nav__icon"></i>Experience
                </Link>
              </li> : ""}

              <li className="nav__item" onMouseEnter={() => {setOnFocus("projects")}}>
                <Link
                  to="projects"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={onFocus === "projects" ? { color: "orange" } : {color: "white"}}
                >
                  <i className="nav__icon"></i>Projects
                </Link>
              </li>

              <li className="nav__item" onMouseEnter={() => {setOnFocus("skills")}}>
                <Link
                  to="skills"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={onFocus === "skills" ? { color: "orange" } : {color: "white"}}
                >
                  <i className="nav__icon"></i>Skills
                </Link>
              </li>

              <li className="nav__item" onMouseEnter={() => {setOnFocus("achivements")}}>
                <Link
                  to="achivements"
                  // smooth={true}
                  // duration={1000}
                  className="nav__link"
                  style={onFocus === "achivements" ? { color: "orange" } : {color: "white"}}
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