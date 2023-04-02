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

        <div>
          <h3>Create My own PortFolio ❤️</h3>
          <button
            onClick={() => navigate("ReactForm")}
            style={{ backgroundColor: "orange", borderRadius: "4px" }}
          >
            Enter Data
          </button>
        </div>
      </div>
    );
}

export default Previewbutton;