import React,{useState} from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const NavBar=(props)=>{
    const handleClickScroll = (name) => {
        const element = document.getElementById(name);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const [Toggle,showMenu]=useState(false);
    const [onFocus, setOnFocus] = useState("aboutme")
    return (
      <header className="w-full top-0 z-40 absolute md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-30 rounded-tl-3xl" 
      id="light"
      style={{marginTop: "0.1rem", width: "calc(100% - 20px)"}}>
        <nav className="nav nav__container">
          <Link onClick={() => {handleClickScroll("aboutme")}} className="nav__logo" style={{ color: "white" }}>
            {props.name} <span style={{color: "orange"}}>.</span>
          </Link>

          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list ">
              <li className="nav__item" onMouseEnter={() => {setOnFocus("aboutme")}}>
                <Link
                  className="nav__link"
                  style={onFocus === "aboutme" ? { color: "orange" } : {color: "white"}}
                  onClick={() => {handleClickScroll("aboutme")}}
                >
                  <i className="nav__icon"></i>About me
                </Link>
              </li>

              <li className="nav__item" onMouseEnter={() => {setOnFocus("education")}}>
                <Link
                  onClick={() => {handleClickScroll("education")}}
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
                  onClick={() => {handleClickScroll("experience")}}
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
                  onClick={() => {handleClickScroll("projects")}}
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
                  onClick={() => {handleClickScroll("skills")}}
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
                  onClick={() => {handleClickScroll("achivements")}}
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
            className="nav__toggle bottom-0"
            onClick={() => {
              showMenu(!Toggle);
            }}
          >
            &nbsp;
          </div>
        </nav>
      </header>
    );
}

export default NavBar;