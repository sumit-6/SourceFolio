import React, { useState, useEffect } from "react";
import "./footer.css"
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
    
      const response = await axios.post(`https://source-folio-backend.onrender.com/portfolio/delete/${props.id}`, {}, config);
      if(response.data === "Success") {
        window.location.href = `https://source-folio-frontend.vercel.app/`;
      } else {
        window.location.href = `https://source-folio-frontend.vercel.app/pageDoesn'tExist`;
      }
    }
    return (
      <section className="footer__copy">
        <div className="footer__content">
          {!isLoading && user && token && (user.uid == props.data.user_id) && <a className="buttonn" onClick={()=>{window.location.href=`https://react-form-ten-steel.vercel.app/form?q=${token}&sfid=${props.id}&where=edit`}}>Edit SourceFolio</a>}
          {!isLoading && user && token && (user.uid == props.data.user_id) && <a className="delete buttonn" onClick={handleDelete}>Delete SourceFolio</a>}
        </div>
          {!isLoading && user && token && (user.uid == props.data.user_id) && <div className="back__home ">
          <a className="buttonn" onClick={() => {navigate("/")}}>Back to home</a>
          {" "}
          <span className="home__icon">
            <AiOutlineHome />
          </span>
        </div>}
      </section>
    );
}

export default Footer;