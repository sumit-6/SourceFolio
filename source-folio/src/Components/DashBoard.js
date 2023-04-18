import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Dashboard-Components/DashNavbar";
import "./dashboard.css"
import Home from "./Dashboard-Components/DashHome";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard"> 

      <Navbar/>
      <Home/>
      
      <button
        onClick={() => navigate("portfolio/:id")}
        style={{ backgroundColor: "orange", borderRadius: "4px" }}
      >
        Preview
      </button>

      {/* <a href="https://react-form-ten-steel.vercel.app/">Open React Form</a> */}
      <div>
        <a
          href="https://react-form-ten-steel.vercel.app/"
          rel="noopener noreferrer"
        >
          <button
            style={{
              marginTop: "1rem",
              backgroundColor: "orange",
              borderRadius: "4px",
            }}
          >
            Open React Form
          </button>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
