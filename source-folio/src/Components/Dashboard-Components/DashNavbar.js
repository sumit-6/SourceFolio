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
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const [sfid, setsfId] = useState(null);
  const {user, isLoading} = useUser();
  const [Token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("name");
  const [list, setList] = useState([]);
  const [onFocus, setOnFocus] = useState("aboutus");

  function HandleSetFocused(focus) {
    setFocused(focus);
  }
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
      //console.log(data.data);
      setList(data.data);
    }).catch(() => {
      setList([]);
    });
  })()
  }, [searchText, Token, filter])

  useEffect(() => {(async() => {

    const token = user && await user.getIdToken();
    setToken(token);
    if(user){
      const response = await axios.get(`https://source-folio-woad.vercel.app/api/getID/${user.uid}`, {headers: {authtoken: token}});

      if(response.data !== 'Failure') {
        const dataRes = response.data;
        setsfId(dataRes);
        const userData = await axios.get(`https://source-folio-woad.vercel.app/api/portfolio/${sfid}`);
        setData(userData.data);
      }
    } 
  })();
  }, [user, sfid]);

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
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <header className="header" id="light">
            <nav className="nav nav__container">
              <Link className="nav__logo" style={{ color: "white" }}>
                SourceFolio&nbsp;<span style={{ color: "orange" }}>.</span>
              </Link>

              <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list" style={{ marginTop: "2rem" }}>
                  <li
                    className="nav__item"
                    onMouseEnter={() => {
                      setOnFocus("aboutus");
                    }}
                  >
                    <Link
                      onClick={() => navigate(`aboutus`)}
                      // smooth={true}
                      // duration={1000}
                      className="nav__link"
                      style={
                        onFocus === "aboutus"
                          ? { color: "orange" }
                          : { color: "white" }
                      }
                    >
                      <i className="nav__icon"></i>About&nbsp;us
                    </Link>
                  </li>

                  {user && sfid && (
                    <li
                      className="nav__item"
                      onMouseEnter={() => {
                        setOnFocus("view");
                      }}
                    >
                      <Link
                        onClick={() => {
                          navigate(`/portfolio/${sfid}`);
                        }}
                        // duration={1000}
                        className="nav__link"
                        style={
                          onFocus === "view"
                            ? { color: "orange" }
                            : { color: "white" }
                        }
                      >
                        <i className="nav__icon"></i>
                        View&nbsp;My&nbsp;sourceFolio
                      </Link>
                    </li>
                  )}

                  {user && !sfid && (
                    <li
                      className="nav__item"
                      onMouseEnter={() => {
                        setOnFocus("make");
                      }}
                    >
                      <Link
                        onClick={() =>
                          {navigate('form')}
                        }
                        // smooth={true}
                        // duration={1000}
                        className="nav__link"
                        style={
                          onFocus === "make"
                            ? { color: "orange" }
                            : { color: "white" }
                        }
                      >
                        <i className="nav__icon"></i>
                        Make&nbsp;My&nbsp;SourceFolio
                      </Link>
                    </li>
                  )}

                  <li
                    className="nav__item"
                    onMouseEnter={() => {
                      setOnFocus("contact");
                    }}
                  >
                    <a
                      href="mailto:sourcefolio2023@gmail.com"
                      className="nav__link"
                      style={
                        onFocus === "contact"
                          ? { color: "orange" }
                          : { color: "white" }
                      }
                    >
                      Contact
                    </a>
                  </li>

                  {!user && (
                    <li
                      className="nav__item"
                      onMouseEnter={() => {
                        setOnFocus("login");
                      }}
                    >
                      <Link
                        onClick={() => navigate(`login`)}
                        // smooth={true}
                        // duration={1000}
                        className="nav__link"
                        style={
                          onFocus === "login"
                            ? { color: "orange" }
                            : { color: "white" }
                        }
                      >
                        <i className="nav__icon"></i>Login/Signup
                      </Link>
                    </li>
                  )}

                  {user && (
                    <li
                      className="nav__item"
                      onMouseEnter={() => {
                        setOnFocus("logout");
                      }}
                    >
                      <Link
                        onClick={(e) => handleLogout(e)}
                        // smooth={true}
                        // duration={1000}
                        className="nav__link"
                        style={
                          onFocus === "logout"
                            ? { color: "orange" }
                            : { color: "white" }
                        }
                      >
                        <i className="nav__icon"></i>Logout
                      </Link>
                    </li>
                  )}

                  <li className="hidden md:block">
                    <div
                      onFocus={() => {
                        HandleSetFocused(true);
                      }}
                      onBlur={() => {
                        HandleSetFocused(false);
                      }}
                      tabIndex={0}
                    >
                      <SearchBox handleInputChange={handleSearchInput} />
                      <div
                        className="md:w-48 lg:w-48"
                        style={{
                          display:
                            searchText.length > 0 && focused ? "" : "none",
                          maxHeight: "300px",
                          overflowY: "scroll",
                        }}
                      >
                        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                          {list.map((x, index) => {
                            return (
                              <li
                                className="pb-3 sm:pb-4 cursor-pointer"
                                onClick={() => {
                                  navigate(`/portfolio/${x._id}`);
                                }}
                              >
                                <div class="flex items-center space-x-4">
                                  <div class="flex-shrink-0">
                                    <img
                                      className="w-8 h-8 rounded-full"
                                      src={
                                        x.profilePicture !== undefined &&
                                        x.profilePicture.url !== null
                                          ? x.profilePicture.url
                                          : "https://res.cloudinary.com/dk26fyzkl/image/upload/v1707765680/SourceFolio/no-user-image_no8zkv.gif"
                                      }
                                      alt={x.name}
                                    />
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
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li
                    className={`hidden ${focused ? "md:hidden" : "md:block"}`}
                  >
                    <DropdownMenu handleSearchChange={handleSearchText} />
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
          <DashHome user={user} id={sfid} token={Token} />
        </>
      )}
    </>
  );
};

export default NavBar;