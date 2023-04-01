import React, { useState } from "react";
import { Container } from "react-bootstrap";

function ProgrammingSkills() {
  const [inputList, setinputList]= useState([{skillName: "", skillLevel: ""}]);

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
    setinputList([...inputList, {skillName: "", skillLevel: ""}]);
  }
  return (
    <Container className="content">
     <div className="row m-3">
       <div className="col-sm-12">
           <h2>Skills</h2>
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="form-group row">
                
                 <div className="form-group col-md-4">
                 <label >Skill Name: </label>
                  <input type="text"  name="skillName" className="form-control"  placeholder="Enter Skill Name" onChange={ e=>handleinputchange(e,i)} />
               </div>

               <div className="form-group col-md-4">
                 <label >Level: </label>
                  <input type="number"  name="skillLevel" className="form-control"  placeholder="Enter Skill Level" onChange={ e=>handleinputchange(e,i)} />
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
             } )} 

               
       </div>
     </div>
    </Container>
  );
}
export default ProgrammingSkills;