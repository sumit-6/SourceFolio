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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [successMessage, setSuccessMessage] = useState(queryParams.get('success'));

  /*useEffect(() => {
    // Set a timeout to remove the flash message after 3 seconds
    const timeout = setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
    
    // Clear the timeout if the component unmounts before the timeout finishes
    return () => {
      clearTimeout(timeout);
    };
  }, []);*/
  return (
    <div className="Portfolio">
      {successMessage && <div className="container" style={{marginBottom: '1.5rem', textAlign: 'center'}}>{successMessage}</div>}
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
