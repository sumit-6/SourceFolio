import React from "react";
import Data from "./Data";
import "./home.css";
import Social from "./Social";

const Home=(props)=>{
    console.log(props);
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social instagram={props.instagram} linkedIn={props.linkedIn} githubProfile={props.githubProfile}/>

                    <div className="home__img" style={{background: `url(${props.profilePicture.url})`}}></div>
                    {/* <h1>lol</h1> */}
                    <Data name={props.name} description={props.description} mainDesignations={props.mainDesignations}/>
                </div>
            </div>
        </section>
    )
}

export default Home;