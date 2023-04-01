import React, {useState} from "react";
import { Container } from "react-bootstrap";
import ProgrammingSkills from "./programmingSkills";
import ToolsAndFrameworks from "./toolsAndFrameworks";

function MySkills() {
    
  return (
    <Container className="content m-3">
     <div className="row card shadow-lg bg-body rounded">
       <div className="col-sm-12 box">
              <div className="row">
                 <ProgrammingSkills />
                 <br></br>
                 <ToolsAndFrameworks />

               </div>
            </div>

               
       </div>
    </Container>
  );
}
export default MySkills;