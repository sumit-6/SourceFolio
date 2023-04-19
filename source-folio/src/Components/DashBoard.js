import React from "react";

import Navbar from "./Dashboard-Components/DashNavbar";
import "./dashboard.css"
import Home from "./Dashboard-Components/DashHome";


const Dashboard = () => {
  

  return (

    <div className="dashboard">
    
      <Navbar />
      <Home/>

      
      
    </div>

    
  )
};

export default Dashboard;
