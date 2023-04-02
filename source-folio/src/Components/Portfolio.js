import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import "../App.css"
import Aboutme from "./Aboutme.js"
import Skills from "./Skills";
// import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Home />
        <hr />
        <Aboutme />
        <hr />
        <Skills/>
      </main>
    </>
  );
};

export default Portfolio;
