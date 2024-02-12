import React from "react";
import Data from "./Data";
import "./CssFiles/home.css"
import Social from "./Social";

const Home=(props)=>{
    const {token, user, isLoading, user_id} = props;
    function getThumbnail(url) {
        return url.replace('/upload', '/upload/c_scale,h_300,w_300')
    }
  
    return(
        <section className="home section" id="home">
            <div className="home__container nav__container grid">
                <div className="home__content grid">
                    <Social token={token} user={user} isLoading={isLoading} user_id={user_id} instagram={props.instagram} linkedIn={props.linkedIn} githubProfile={props.githubProfile}/>

                    <div className="home__img" style={{background: `url(${props.profilePicture !== undefined && props.profilePicture.url !== null ? getThumbnail(props.profilePicture.url) : getThumbnail("https://res.cloudinary.com/dk26fyzkl/image/upload/v1707765680/SourceFolio/no-user-image_no8zkv.gif")})`}}></div>
                    
                    <Data name={props.name} description={props.description} mainDesignations={props.mainDesignations}/>
                </div>
            </div>
        </section>
    )
}

export default Home;