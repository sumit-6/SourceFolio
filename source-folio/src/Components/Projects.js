import React from "react";
import "./project.css";

import backgroundd from "../asset/image/back.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects=()=>{
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    
    return (
      <section className="section projects">
        <h2 className="section__title">
          My <span style={{ color: "orange" }}>Projects.</span>
        </h2>
        <span className="section__subtitle">My work Places</span>
        <Carousel responsive={responsive}>
          <div className="card">
            <img className="product--iamge" src={backgroundd} alt="image" />
            <h2>Yelp-Camp</h2>
            <p style={{ color: "white" }}>
              It is an application where different users can register/login to
              create, view, update and delete campgrounds as well as to add or
              remove reviews on any campground.
            </p>
            <p className="price">
              Tech Stacks: HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB,
              Mongoose, Passport.js
            </p>

            <p style={{ marginTop: "0.6rem" }}>
              <button style={{ marginRight: "0.6rem", marginBottom: "0.6rem" }}>
                Web Link
              </button>
              <button>Github</button>
            </p>
          </div>

          <div className="card">
            <img className="product--iamge" src={backgroundd} alt="image" />
            <h2>Yelp-Camp</h2>
            <p style={{ color: "white" }}>
              It is an application where different users can register/login to
              create, view, update and delete campgrounds as well as to add or
              remove reviews on any campground.
            </p>
            <p className="price">
              Tech Stacks: HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB,
              Mongoose, Passport.js
            </p>

            <p style={{ marginTop: "0.6rem" }}>
              <button style={{ marginRight: "0.6rem", marginBottom: "0.6rem" }}>
                Web Link
              </button>
              <button>Github</button>
            </p>
          </div>

          <div className="card">
            <img className="product--iamge" src={backgroundd} alt="image" />
            <h2>Yelp-Camp</h2>
            <p style={{ color: "white" }}>
              It is an application where different users can register/login to
              create, view, update and delete campgrounds as well as to add or
              remove reviews on any campground.
            </p>
            <p className="price">
              Tech Stacks: HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB,
              Mongoose, Passport.js
            </p>

            <p style={{ marginTop: "0.6rem" }}>
              <button style={{ marginRight: "0.6rem", marginBottom: "0.6rem" }}>
                Web Link
              </button>
              <button>Github</button>
            </p>
          </div>

          <div className="card">
            <img className="product--iamge" src={backgroundd} alt="image" />
            <h2>Yelp-Camp</h2>
            <p style={{ color: "white" }}>
              It is an application where different users can register/login to
              create, view, update and delete campgrounds as well as to add or
              remove reviews on any campground.
            </p>
            <p className="price">
              Tech Stacks: HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB,
              Mongoose, Passport.js
            </p>

            <p style={{ marginTop: "0.6rem" }}>
              <button style={{ marginRight: "0.6rem", marginBottom: "0.6rem" }}>
                Web Link
              </button>
              <button>Github</button>
            </p>
          </div>

          <div className="card">
            <img className="product--iamge" src={backgroundd} alt="image" />
            <h2>Yelp-Camp</h2>
            <p style={{ color: "white" }}>
              It is an application where different users can register/login to
              create, view, update and delete campgrounds as well as to add or
              remove reviews on any campground.
            </p>
            <p className="price">
              Tech Stacks: HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB,
              Mongoose, Passport.js
            </p>

            <p style={{ marginTop: "0.6rem" }}>
              <button style={{ marginRight: "0.6rem", marginBottom: "0.6rem" }}>
                Web Link
              </button>
              <button>Github</button>
            </p>
          </div>

          <div className="card">
            <img className="product--iamge" src={backgroundd} alt="image" />
            <h2>Yelp-Camp</h2>
            <p style={{ color: "white" }}>
              It is an application where different users can register/login to
              create, view, update and delete campgrounds as well as to add or
              remove reviews on any campground.
            </p>
            <p className="price">
              Tech Stacks: HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB,
              Mongoose, Passport.js
            </p>

            <p style={{ marginTop: "0.6rem" }}>
              <button style={{ marginRight: "0.6rem", marginBottom: "0.6rem" }}>
                Web Link
              </button>
              <button>Github</button>
            </p>
          </div>
          
        </Carousel>
        ;
        {/* <slider {...settings}>
          <div className="card">
            <div className="card-top">
              <img src={backgroundd} />
              <h1>YelpCamp </h1>
            </div>
            <div className="card-bottom">
              <ul>
                <li>
                  It is an application where different users can register/login
                  to create, view, update and delete campgrounds as well as to
                  add or remove reviews on any campground.
                </li>
                <li>
                  Tech. Stacks involved: HTML, CSS, Bootstrap, Node.js,
                  Express.js, MongoDB, Mongoose, Passport.js
                </li>
              </ul>

              <a>Link</a>
              <a>Github</a>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={backgroundd} />
              <h1>YelpCamp </h1>
            </div>
            <div className="card-bottom">
              <ul>
                <li>
                  It is an application where different users can register/login
                  to create, view, update and delete campgrounds as well as to
                  add or remove reviews on any campground.
                </li>
                <li>
                  Tech. Stacks involved: HTML, CSS, Bootstrap, Node.js,
                  Express.js, MongoDB, Mongoose, Passport.js
                </li>
              </ul>

              <a>Link</a>
              <a>Github</a>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={backgroundd} />
              <h1>YelpCamp </h1>
            </div>
            <div className="card-bottom">
              <ul>
                <li>
                  It is an application where different users can register/login
                  to create, view, update and delete campgrounds as well as to
                  add or remove reviews on any campground.
                </li>
                <li>
                  Tech. Stacks involved: HTML, CSS, Bootstrap, Node.js,
                  Express.js, MongoDB, Mongoose, Passport.js
                </li>
              </ul>

              <a>Link</a>
              <a>Github</a>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={backgroundd} />
              <h1>YelpCamp </h1>
            </div>
            <div className="card-bottom">
              <ul>
                <li>
                  It is an application where different users can register/login
                  to create, view, update and delete campgrounds as well as to
                  add or remove reviews on any campground.
                </li>
                <li>
                  Tech. Stacks involved: HTML, CSS, Bootstrap, Node.js,
                  Express.js, MongoDB, Mongoose, Passport.js
                </li>
              </ul>

              <a>Link</a>
              <a>Github</a>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={backgroundd} />
              <h1>YelpCamp </h1>
            </div>
            <div className="card-bottom">
              <ul>
                <li>
                  It is an application where different users can register/login
                  to create, view, update and delete campgrounds as well as to
                  add or remove reviews on any campground.
                </li>
                <li>
                  Tech. Stacks involved: HTML, CSS, Bootstrap, Node.js,
                  Express.js, MongoDB, Mongoose, Passport.js
                </li>
              </ul>

              <a>Link</a>
              <a>Github</a>
            </div>
          </div>
        </slider> */}
      </section>
    );
}

export default Projects;