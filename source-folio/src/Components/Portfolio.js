import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import "../App.css";
import Aboutme from "./Aboutme.js";
import Skills from "./Skills";
import Achivements from "./Achivements";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";
import axios from "axios";
import "./CssFiles/portfolio.css";
import "../index.css";
import Footer from "./Footer";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { helper } from "../asset/helperObject.js";

export const DataContext = React.createContext();

const initialUserState = {
  loading: false,
  error: "",
  data: {...helper},
  auth: {
    user: null,
    token: null,
    isLoading: true
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        loading: false,
        error: '',
        data: action.data,
        auth: {
          user: action.user,
          token: action.token,
          isLoading: action.isLoading
        }
      }
    case 'NO_USER_FOUND': {
      return {
        loading: false,
        error: 'No logged in user is found',
        data: {...helper},
        auth: {
          user: action.user,
          token: action.token,
          isLoading: action.isLoading
        }
      }
    } 
    default: {
        return state
      }
  }
}

const Portfolio = () => {
  const path = useLocation().pathname;
  const ID = path.split("/")[2];
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialUserState)

  const {user, isLoading} = useUser();

  useEffect(() => {
    (async () => {
      const token = user && await user.getIdToken();
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/portfolio/${ID}`
      );
      if (typeof response.data === "object") {
        const data = response.data;
        dispatch({type: "LOGGED_IN", data: data, user: user, token: token, isLoading: isLoading});
      }
      else {
        dispatch({type: "NO_USER_FOUND"});
        navigate("error");
      }
    })();
  }, [ID, user]);
  return (
    <DataContext.Provider value={{
      state: state, dispatch: dispatch
    }}>
      <div className="Portfolio">
        {
          !state.loading && (
            <NavBar />
          )
        }
        {!state.loading && (
          <main className="main">
            <Home profilePicture={state.data.profilePicture} />
            <hr />
            <Aboutme />
            <hr />
            {
              state.data.myEducation.length ? (
                <>
                  <Education data = { state.data.myEducation } />
                  <hr />
                </> 
              ) : (
                null
              )
            }
            {
              state.data.myExperience.length ? (
                <>
                  <Experience data = { state.data.myExperience } />
                  <hr />
                </>
              ) : (
                null
              )
            }
            {
              state.data.myProjects.length ? (
                <>
                  <Projects data = { state.data.myProjects } />
                  <hr />
                </>
              ) : (
                null
              )
            }
            <Skills data = { state.data.mySkills } />
            <hr />
            <Achivements data = { state.data.myAchievements } />
            <hr />
            <Contact />
            <Footer id = {ID} />
          </main>
        )}
      </div>
    </DataContext.Provider>
  );
};

export default Portfolio;
