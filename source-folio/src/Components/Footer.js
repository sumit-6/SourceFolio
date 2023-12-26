import React, { useState, useEffect } from "react";
import "./CssFiles/footer.css"
import { AiOutlineHome } from "react-icons/ai";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Footer=(props)=>{
  const {user, isLoading} = useUser();
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const t = user && await user.getIdToken();
      setToken(t);
    })();

    
  }, [user])

  const handleDelete = async (e) => {
      e.preventDefault();
      const config = {
        headers: {
          'authtoken': token
        }
      }
    
      const response = await axios.post(`https://source-folio-woad.vercel.app/portfolio/delete/${props.id}`, {}, config);
      if(response.data === "Success") {
        navigate("/")
      } else {
        navigate("/pageDoesn'tExist")
      }
    }
    return (
      <section className="footer__copy">
        <div className="footer__content">
          {!isLoading && user && token && user.uid == props.data.user_id && (
            <a
              className="buttonn"
              onClick={() => {
                navigate(`/edit/${props.id}`);
              }}
            >
              Edit SourceFolio
            </a>
          )}
          {!isLoading && user && token && user.uid == props.data.user_id && (
            <a className="delete buttonn" onClick={handleDelete}>
              Delete SourceFolio
            </a>
          )}
        </div>
        {!isLoading && user && token && user.uid == props.data.user_id && (
          <div className="back__home ">
            <div style={{ display: "flex" }}>
              <a
                className="buttonn"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to home
              </a>{" "}
              <span className="mt-2 md:mt-0">
                <AiOutlineHome className="home__icon" />
              </span>
            </div>
          </div>
        )}
      </section>
    );
}

export default Footer;