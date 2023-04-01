import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ProjectDescription from "./projectDiscription";

function MyProjects() {
  const [inputList, setinputList]= useState([{projectName: "", githubLink: "", projectLink: ""}]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);
    
  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, {projectName: "", githubLink: "", projectLink: ""}]);
  }
  return (
    <Container className="content m-3">
     <div className="row card shadow-lg bg-body rounded">
       <div className="col-sm-12 box pt-3">
       <h2>Projects</h2>
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row">
                
                 <div className="form-group col-md-4">
                 <label >Project Name: </label>
                  <input type="text"  name="projectName" className="form-control"  placeholder="Enter Project Name" onChange={ e=>handleinputchange(e,i)} />
               </div>
               
               
                 <div className="form-group col-md-4">
                 <label >Github Link: </label>
                  <input type="text"  name="githubLink" className="form-control"  placeholder="Enter github link" onChange={ e=>handleinputchange(e,i)} />
               </div>

               <ProjectDescription index={i} />
                
                 <div className="form-group col-md-4">
                 <label >Project Link: </label>
                  <input type="text"  name="projectLink" className="form-control"  placeholder="Enter project url" onChange={ e=>handleinputchange(e,i)} />
               </div>

               <div className="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)}>Remove</button>
               }
               { inputList.length-1===i &&
               <button  className="btn btn-success m-1" onClick={ handleaddclick}>Add More</button>
               }
               </div>
            </div>
              );
            })}

               
       </div>
     </div>
    </Container>
  );
}
export default MyProjects;