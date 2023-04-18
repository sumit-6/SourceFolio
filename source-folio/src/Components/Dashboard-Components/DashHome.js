import React from "react";
import "./dashHome.css";
import Typewriter from "typewriter-effect";

const Home=()=>{
    return (
      <main>
        <div className="head__dash">
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 120,
                strings: ["welcome to SourceFolio.","make your portfolio."],
              }}
            />
          </h1>
          
        </div>
      </main>
    );
}

export default Home;