import React from "react";
import "./dashHome.css";
import Typewriter from "typewriter-effect";

const Home=()=>{
    return (
      /*<main>
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
      </main>*/
      <div className="dashboard__body">
        <div className="dashboard__home">
          <div className="home-content">
              <h1 className="dashboard__h1">Welcome to SourceFolio.</h1>
              <h3 className="dashboard__h3">Create, inspire, succeed with our portfolio builder.</h3>
              <p className="dashboard__p">
                  eawfuhwelhncoawrco wcearlwecrnewrcnawenefuhwehfeusadfhleoshfj nsohfweoa huhfawefjlaewhflewf aherf hewahfaoewhflewhfljaewfnrfneawoif aeof awioefnioeafnenaofneafnoirnf wa;nffnaiea;nf efeahfhefjaejfejfnjekslndjkcndfnal anlefefalfaf
              </p>

              <div className="dashboard__btn-box">
                <a href="#" className="dashboard__a">Create My SourceFolio</a>
              </div>
               
          </div>

        </div>
      </div>
    );
}

export default Home;