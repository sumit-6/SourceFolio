import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./dashnavbar.css";
import Home from "./DashHome";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    
      <header className="dashheader">
        <h3 className="logo">
          SourceFolio <span style={{ color: "orange" }}>.</span>
        </h3>
        <nav className="navbarrr" ref={navRef}>
          <a href="/#">About us</a>
          <a href="/#">View sourcefolio</a>
          <a href="/#">Make my SourceFolio</a>
          <a href="/#">Contact</a>
          <div className="btns">
            <a className="action_btn" href="Login/signup">
              Login/Signup
            </a>
            <a style={{marginRight : "0.5rem"}} className="action_btn" href="Logout">
              Logout
            </a>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      

  );
}

export default Navbar;
