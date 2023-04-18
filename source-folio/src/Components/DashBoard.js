import React from "react";

import Navbar from "./Dashboard-Components/DashNavbar";
import "./dashboard.css"
import Home from "./Dashboard-Components/DashHome";
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { auth } from '../index';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  
  return (

    <div className="dashboard">
    
      <Navbar />
      <Home/>

      
      
    </div>

    
  )
};

export default Dashboard;
