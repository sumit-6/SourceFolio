import React, { useState, useEffect } from "react";
import "./footer.css"
import { AiOutlineHome } from "react-icons/ai";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

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
    return (
      <section className="footer__copy">
        <div className="footer__content">
          {!isLoading && user && token && (user.uid == props.data.user_id) && <a className="buttonn" onClick={()=>{window.location.href=`https://react-form-ten-steel.vercel.app/form?q=${token}&sfid=${props.id}&where=edit`}}>Edit SourceFolio</a>}
          {!isLoading && user && token && (user.uid == props.data.user_id) && <a className="delete buttonn">Delete SourceFolio</a>}
        </div>
        {!isLoading && user && <div className="back__home ">
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