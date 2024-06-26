import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import "../App.css";
import Aboutme from "./Aboutme.js";
import Skills from "./Skills";
import Achivements from "./Achivements";
import { useLocation } from "react-router-dom";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";
import "./CssFiles/portfolio.css";
import "../index.css";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { set_portfolio } from "../redux/features/portfolioSlice.js";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({myExperience: [], myProjects: [], myEducation: []});
  const dispatch = useDispatch();
  //const data = useSelector(state => state.portfolio.data);
  
  const path = useLocation().pathname;
  const ID = path.split("/")[2];
  
  useEffect(() => {
    
      (async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/portfolio/${ID}`
        );
        if (typeof response.data === "object") {
          const portfolio = response.data;
          dispatch(set_portfolio(portfolio));
          setIsLoading(false);
          setData(portfolio);
        }
      })();
    
  }, [])

  return (
    <>
      <div className="Portfolio">
        {!isLoading && (
          <NavBar />
        )}
        {!isLoading && (
          <main className="main">
            <Home />
            <hr />
            <Aboutme />
            <hr />
            {data.myEducation.length ? <><Education />
            <hr /></>: null}
            {data.myExperience.length ? (
              <>
                <Experience />
                <hr />
              </>
            ) : (
              null
            )}
            {data.myProjects.length ? (<>
                <Projects />
                <hr />
              </>
            ) : (
              null
            )}
            <Skills />
            <hr />
            <Achivements />
            <hr />
            <Contact />
            <Footer />
          </main>
        )}
      </div>
    </>
  );
};

export default Portfolio;
