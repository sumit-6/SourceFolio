import React, { useState } from "react";
import { Container } from "react-bootstrap";

function ToolsAndFrameworks() {
  const [inputList, setinputList]= useState([{toolName: "", toolLevel: ""}]);

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
    setinputList([...inputList, {toolName: "", toolLevel: ""}]);
  }
  return (
    <Container className="content">
     <div className="row m-3">
       <div className="col-sm-12 box pt-3">
       <h2>Tools And Frameworks</h2>
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3">
                 <div className="form-group col-md-4">
                 <label >Tool Name: </label>
                  <input type="text"  name="toolName" className="form-control"  placeholder="Enter Tool Name" onChange={ e=>handleinputchange(e,i)} />
               </div>

               <div className="form-group col-md-4">
                 <label >Level: </label>
                  <input type="number"  name="toolLevel" className="form-control"  placeholder="Enter Tool Level" onChange={ e=>handleinputchange(e,i)} />
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
export default ToolsAndFrameworks;