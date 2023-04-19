import React from "react";

import Navbar from "./Dashboard-Components/DashNavbar";
import "./dashboard.css"
// import Home from "./Dashboard-Components/DashHome";
import { Banner } from "./Dashboard-Components/Banner";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  

  return (

    <div className="dashboard">
    
      <Navbar />
      <Banner/>

    </div>

    
  )
};

export default Dashboard;
