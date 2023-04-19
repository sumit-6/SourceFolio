import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../..//asset/image/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "./banner.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
 
  return (
    <div className="banner" id="home">
      <div className="contt">
        <Row className="aligh-items-center conn" >
          <Col xs={12} md={6} xl={7} className="dataa">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className="center"
                >
                  
                  <h1 className="name">
                    Welcome to SourceFolio!
                  </h1>
                  <p>Create, inspire, succeed with our portfolio builder.</p>
                  <button onClick={() => console.log("connect")}>
                    View SourceFolio <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col className="imagee" xs={12} md={6} xl={5} >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </div>
    </div>
  );
};
