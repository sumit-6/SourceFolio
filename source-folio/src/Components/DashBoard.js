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
import Loading from "./Loading";

const Dashboard = () => {
  const navigate = useNavigate();
  const [sfid, setsfId] = useState(null);
  const [isAvailable, setIsAvailable] = useState(null);
  const {user, isLoading} = useUser();
  const [Token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {(async() => {
    console.log(user);
    const token = user && await user.getIdToken();
    setToken(token);
    const response = await axios.get(`https://source-folio-backend.onrender.com/api/getID/${user.uid}`, {headers: {authtoken: token}});
    
    if(response.data !== 'Failure') {
      const dataRes = response.data;
      setsfId(dataRes);
      const userData = await axios.get(`https://source-folio-backend.onrender.com/api/portfolio/${sfid}`);
      setData(userData.data);
      setIsAvailable(true);
      setIsReady(true);
    }
    else {
      setIsAvailable(false);
      setIsReady(true);
    }
  })();
  }, [user, sfid]);

  useEffect(() => {
    setIsReady(false);
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate('/');
    }).catch((err) => {
      console.log(err.message);
    })
  }

  return (
    <div className="dashboard"> 

      <Navbar/>
      <Home/>
      
    </div>
  );
};

export default Dashboard;
