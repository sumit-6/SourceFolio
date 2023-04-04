import React from "react";
import { useNavigate } from "react-router-dom";

const Previewbutton=()=>{
    const navigate=useNavigate();

    return (
      <div>
        <h1>Home Page</h1>
        <button
          onClick={() => navigate("portfolio")}
          style={{ backgroundColor: "orange", borderRadius: "4px" }}
        >
          Preview
        </button>
        {/* <a href="https://react-form-ten-steel.vercel.app/">Open React Form</a> */}
       <div >
       <a href="https://react-form-ten-steel.vercel.app/" rel="noopener noreferrer">
        <button style={{marginTop: "1rem" , backgroundColor: "orange", borderRadius: "4px" }}>Open React Form</button>
       </a>
       </div>
 
      </div>
    );
}

export default Previewbutton;