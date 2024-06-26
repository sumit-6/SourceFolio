import React from 'react';
// import cloud from "../../asset/image/mobilee.jpg"
import "./banner.css"
import Typewriter from "typewriter-effect";
import { useSelector } from 'react-redux';

const DashHome=(props)=>{
    const { user } = useSelector(state => state.portfolio.auth)
    console.log(user)
    return (
      <div className="banner">
        <div className="content">
          {/* <img src={cloud}></img> */}

          <h1 className="heading">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Welcome to SourceFolio.", "Design Your Portfolio."],
              }}
            />
          </h1>
          <p>Create, inspire, succeed with our portfolio builder.</p>
          {user && props.id && <div className="content_a">
            <a className="butt" href={`/portfolio/${props.id}`}>
              View Sourcefolio
            </a>
          </div>}
          {user && !props.id &&
            <div className="content_a">
            <a className="butt" href={`/form`} >
              Create Sourcefolio
            </a>
          </div>
          }
          {!user &&
            <div className="content_a">
            <a className="butt" href="/login">
              Create Sourcefolio
            </a>
          </div>
          }
        </div>
      </div>
    );
}

export default (DashHome);