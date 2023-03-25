import React from "react";
import { useNavigate } from "react-router-dom";

const Previewbutton=()=>{
    const navigate=useNavigate();
    return(
        
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>navigate('portfolio')}>Preview</button>
        </div>
    )
}

export default Previewbutton;