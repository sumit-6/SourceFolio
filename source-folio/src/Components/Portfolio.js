import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import "../App.css"
import Aboutme from "./Aboutme.js"

const Portfolio = () => {
  return(
    <>
        <NavBar/>
        <main className='main'>
          <Home/>
        </main>
        <hr/>
        <Aboutme/>
        <hr/>
    </>
  )
};

export default Portfolio;
