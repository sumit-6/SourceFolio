import React from "react";
import Data from "./Data";
import "./CssFiles/home.css"
import Social from "./Social";

const Home=(props)=>{
    function getThumbnail(url) {
        return url.replace('/upload', '/upload/c_scale,h_300,w_300')
    }
  
    return(
        <section className="home section" id="home">
            <div className="home__container nav__container grid">
                <div className="home__content grid">
                    <Social instagram={props.instagram} linkedIn={props.linkedIn} githubProfile={props.githubProfile}/>

                    {props.profilePicture.url !== null ? <div className="home__img" style={{background: `url(${getThumbnail(props.profilePicture.url)})`}}></div> : null}
                    
                    <Data name={props.name} description={props.description} mainDesignations={props.mainDesignations}/>
                </div>
            </div>
        </section>
    )
}

export default Home;