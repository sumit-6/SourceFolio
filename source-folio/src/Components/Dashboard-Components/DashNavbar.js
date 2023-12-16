import React, { useState, useEffect } from "react";
import "./dashnavbar.css";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../index';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import Loading from '../Loading'
import  DashHome  from "./Banner";
import SearchBox from "./SearchBox";
import DropdownMenu from "./DropDownMenu";

const NavBar = () => {
  const [Toggle, showMenu] = useState(false);
  const navigate = useNavigate();
  const [sfid, setsfId] = useState(null);
  const [isAvailable, setIsAvailable] = useState(null);
  const {user, isLoading} = useUser();
  const [Token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("name");
  const [list, setList] = useState([])
  function handleSearchText(text) {
    setFilter(text);
  }

  function handleSearchInput(text) {
    setSearchText(text);
  }

  useEffect(() => {(async() => {
    if(searchText === "") {
      setList([]);
      return new Promise((resolve,reject) => {
        reject();
      });
    }
    const config = {
      headers: {
        'authtoken': Token
      }
    }
    const portfolios = axios.get(`https://source-folio-woad.vercel.app/api/search/${filter}/${searchText}`, config);
    portfolios.then((data) => {
      console.log(data.data);
      setList(data.data);
    }).catch((error) => {
      setList([]);
    });
  })()
  }, [searchText])

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
            <nav className="nav nav__container">
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
                          (window.location.href = ` https://source-folio-frontend.vercel.app/portfolio/${sfid}`)
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
                
                <li>
                  <SearchBox handleInputChange={handleSearchInput} />
                  <div style={{display: list.length > 0 ? "" : "none", maxHeight: "300px", overflowY: "scroll"}}>
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                      {list.map((x, index) => {
                        return (<li className="pb-3 sm:pb-4 cursor-pointer" onClick={() => {navigate(`/portfolio/${x._id}`)}}>
                                    <div class="flex items-center space-x-4">
                                      <div class="flex-shrink-0">
                                          <img className="w-8 h-8 rounded-full" src={x.profilePicture.url} alt={x.name} />
                                      </div>
                                      <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-white truncate dark:text-white">
                                            {x.name}
                                          </p>
                                          <p class="text-sm text-gray-400 truncate dark:text-gray-500">
                                            {x.email}
                                          </p>
                                      </div>
                                    </div>
                                </li>);
                      
                      })}
                    </ul>
                  </div>
                </li>

                <li>
                <DropdownMenu handleSearchChange={handleSearchText}/>
                </li>

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