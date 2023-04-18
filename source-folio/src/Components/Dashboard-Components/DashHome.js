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
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            voluptates <br />
            reprehenderit sint eveniet incidunt ipsa vel officia doloribus
            cumque! <br />
            Eum obcaecati vol uptatibus quam ea totam delectus incidunt
            repudiandae sequi nihil!
          </p> */}
        </div>
      </main>
    );
}

export default Home;