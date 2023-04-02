import React from "react";
import { Route, Routes } from "react-router";
import "../App.css"
import Portfolio from "./Portfolio";
import Previewbutton from "./Previewbutton";
// import ReactForm from "./ReactForm";


const HomeRoute=()=>{
    return (
      <Routes>
        <Route path={"/"} element={((<Previewbutton />))} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    );
}

export default HomeRoute;