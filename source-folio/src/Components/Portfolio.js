import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import "../App.css"
import Aboutme from "./Aboutme.js"
import Skills from "./Skills";
// import "./PortFolio.module.css";
import Achivements from "./Achivements";
import Experience from "./Experience";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <NavBar />
      <main className="main">
        <Home />
        <hr/>
        <Aboutme />
        <hr/>
        <Experience/>
        <hr/>
        <Skills />
        <hr/>
        <Achivements/>
        <hr/>
      </main>
    </div>
  );
};

export default Portfolio;
