import React from "react";
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { auth } from '../index';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from "./Loading";

const Previewbutton = () => {
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
    <div>
      
      {(!isReady) && <Loading />}
      {isReady && <>
      <h1>Home Page</h1>
      {user && sfid && <button
        onClick={() => navigate(`portfolio/${sfid}`)}
        style={{ backgroundColor: "orange", borderRadius: "4px" }}
      >
        View My SourceFolio
      </button>}

      {user && !sfid && <div>
        <a
          href={`https://react-form-ten-steel.vercel.app/form?q=${Token}&where=form`}
          rel="noopener noreferrer"
        >
          <button
            style={{
              marginTop: "1rem",
              backgroundColor: "orange",
              borderRadius: "4px",
            }}
          >
            Create My SourceFolio
          </button>
        </a>
      </div>}

      {isAvailable && user && sfid && user.uid === data.user_id && <div>
        <a
          href={`https://react-form-ten-steel.vercel.app/form?q=${Token}&sfid=${sfid}&where=edit`}
          rel="noopener noreferrer"
        >
          <button
            style={{
              marginTop: "1rem",
              backgroundColor: "orange",
              borderRadius: "4px",
            }}
          >
            Edit My SourceFolio
          </button>
        </a>
      </div>}

      {!user && <div>
          <button
          onClick={() => navigate(`login`)}
            style={{
              marginTop: "1rem",
              backgroundColor: "orange",
              borderRadius: "4px",
            }}
          >
            Login / Sign Up
          </button>
      </div>}

      {user && <div>
          <button
          onClick={(e) => handleLogout(e)}
            style={{
              marginTop: "1rem",
              backgroundColor: "orange",
              borderRadius: "4px",
            }}
          >
            Logout
          </button>
      </div>}

      <div>
      <button
          onClick={() => {window.location.href = `https://react-form-ten-steel.vercel.app/about-us`}}
            style={{
              marginTop: "1rem",
              backgroundColor: "orange",
              borderRadius: "4px",
            }}
          >
            About Us
          </button>
      </div>
      </>}
    </div>
  );
};

export default Previewbutton;
