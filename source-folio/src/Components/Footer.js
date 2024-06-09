import React, { useContext } from "react";
import "./CssFiles/footer.css"
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./Portfolio";

import axios from "axios";

const Footer = (props) => {
  const { state: { data: { user_id }, auth: { token, user, isLoading } } } = useContext(DataContext);
  const navigate = useNavigate();
  const handleDelete = async (e) => {
      e.preventDefault();
      const config = {
        headers: {
          'authtoken': token
        }
      }
    
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/portfolio/delete/${props.id}`, {}, config);
      if(response.data === "Success") {
        navigate("/")
      } else {
        navigate("/pageDoesn'tExist")
      }
    }
    return (
      <section className="footer__copy">
        <div className="footer__content" style={{ display: "flex", alignItems: "center" }}>
          {!isLoading && user && token && user.uid == user_id && (
            <a
              className="buttonn"
              
              onClick={() => {
                navigate(`/edit/${props.id}`);
              }}
            >
              Edit SourceFolio
            </a>
          )}
          {!isLoading && user && token && user.uid == user_id && (
            <a className="delete buttonn" onClick={handleDelete}>
              Delete SourceFolio
            </a>
          )}
        </div>
        {!isLoading && user && token && user.uid == user_id && (
          <div className="back__home ">
            <div style={{ display: "flex" }}>
              <a
                className="buttonn"
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to home<span className="mt-2 md:mt-0 mb-5 md:mb-2">
                <AiOutlineHome className="home__icon" />
              </span>
              </a>
              
            </div>
          </div>
        )}
      </section>
    );
}

export default Footer;