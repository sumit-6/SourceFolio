import React from "react";
import Data from "./Data";
import "./CssFiles/home.css"
import Social from "./Social";
import { useSelector } from "react-redux";

const Home=()=>{
    
    const { profilePicture } = useSelector(state => state.portfolio.data);
    function getThumbnail(url) {
        return url.replace('/upload', '/upload/c_scale,h_300,w_300')
    }
  
    return(
        <section className="home section" id="home">
            <div className="home__container nav__container grid">
                <div className="home__content grid">
                    <Social />

                    <div className="home__img" style={{background: `url(${profilePicture !== undefined && profilePicture.url !== null && profilePicture.url !== undefined ? getThumbnail(profilePicture.url) : getThumbnail("https://res.cloudinary.com/dk26fyzkl/image/upload/v1707765680/SourceFolio/no-user-image_no8zkv.gif")})`}}></div>
                    
                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home;