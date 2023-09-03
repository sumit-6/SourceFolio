import React, { useState, useEffect } from "react";
import "./dashnavbar.css";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import ReactSwitch from "react-switch";
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../index';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import Loading from '../Loading'
import  DashHome  from "./Banner";

const NavBar = () => {
  const [Toggle, showMenu] = useState(false);
  const navigate = useNavigate();
  const [sfid, setsfId] = useState(null);
  const [isAvailable, setIsAvailable] = useState(null);
  const {user, isLoading} = useUser();
  const [Token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {(async() => {

    const token = user && await user.getIdToken();
    setToken(token);
    const response = await axios.get(`https://source-folio-woad.vercel.app/api/getID/${user.uid}`, {headers: {authtoken: token}});
    
    if(response.data !== 'Failure') {
      const dataRes = response.data;
      setsfId(dataRes);
      const userData = await axios.get(`https://source-folio-woad.vercel.app/api/portfolio/${sfid}`);
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
    <>
      {!isReady && <Loading />}
      {isReady && (
        <>
          <header className="header" id="light">
            <nav className="nav container">
              <Link className="nav__logo" style={{ color: "white" }}>
                SourceFolio <span style={{ color: "orange" }}>.</span>
              </Link>

              <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                  <li className="nav__item">
                    <Link
                      onClick={() =>
                        (window.location.href =
                          "https://react-form-ten-steel.vercel.app/about-us")
                      }
                      // smooth={true}
                      // duration={1000}
                      className="nav__link"
                      style={{ color: "orange" }}
                    >
                      <i className="nav__icon"></i>About us
                    </Link>
                  </li>

                  {user && sfid && (
                    <li className="nav__item">
                      <Link
                        onClick={() =>
                          (window.location.href = `https://source-folio.vercel.app/portfolio/${sfid}`)
                        }
                        // duration={1000}
                        className="nav__link"
                        style={{ color: "white" }}
                      >
                        <i className="nav__icon"></i>View My sourceFolio
                      </Link>
                    </li>
                  )}

                  {user && !sfid && (
                    <li className="nav__item">
                      <Link
                        onClick={() =>
                          (window.location.href = `https://react-form-ten-steel.vercel.app/form?q=${Token}&where=form`)
                        }
                        // smooth={true}
                        // duration={1000}
                        className="nav__link"
                        style={{ color: "white" }}
                      >
                        <i className="nav__icon"></i>Make My SourceFolio
                      </Link>
                    </li>
                  )}


                  <li className="nav__item">
                    <a
                      href="mailto:sourcefolio2023@gmail.com"
                      className="nav__link"
                      style={{color: "white"}}
                    >
                      Contact
                    </a>
                  </li>

                  {!user && (
                    <li className="nav__item">
                      <Link
                        onClick={() => navigate(`login`)}
                        // smooth={true}
                        // duration={1000}
                        className="nav__link"
                        style={{ color: "white" }}
                      >
                        <i className="nav__icon"></i>Login/Signup
                      </Link>
                    </li>
                  )}
                   
                  {user && (
                    <li className="nav__item">
                      <Link
                        onClick={(e) => handleLogout(e)}
                        // smooth={true}
                        // duration={1000}
                        className="nav__link"
                        style={{ color: "white" }}
                      >
                        <i className="nav__icon"></i>Logout
                      </Link>
                    </li>
                  )}
                </ul>

                <i
                  style={{ color: "white" }}
                  className="nav__close"
                  onClick={() => {
                    showMenu(!Toggle);
                  }}
                >
                  <RxCross2 />
                </i>
              </div>

              <div
                className="nav__toggle"
                onClick={() => {
                  showMenu(!Toggle);
                }}
              >
                <i style={{ color: "white" }} className="navbar__menu__list">
                  <AiOutlineMenu />
                </i>
              </div>
            </nav>
          </header>
          <DashHome user={user} id={sfid} token={Token}/>
        </>
      )}
    </>
  );
};

export default NavBar;
