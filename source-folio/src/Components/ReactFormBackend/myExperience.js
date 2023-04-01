import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Duration from "./duration";
import WorkDescription from "./workDescription";

function MyExperience() {
  const [inputList, setinputList]= useState([{role: "", company: "", certificate: ""}]);

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
    setinputList([...inputList, {role: "", company: "", certificate: ""}]);
  }
  return (
    <Container className="content m-3">
     <div className="row card shadow-lg bg-body rounded">
       <div className="col-sm-12 box">
    
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row pt-3">
                <h2>Experience</h2>
                 <div className="form-group col-md-4">
                 <label >Role: </label>
                  <input type="text"  name="role" className="form-control"  placeholder="Enter Role" onChange={ e=>handleinputchange(e,i)} />
               </div>
               
               
                 <div className="form-group col-md-4">
                 <label >Company: </label>
                  <input type="text"  name="company" className="form-control"  placeholder="Enter company name" onChange={ e=>handleinputchange(e,i)} />
               </div>

               <WorkDescription index={i} />
                
                 <div className="form-group col-md-4">
                 <label >Certificate Url: </label>
                  <input type="text"  name="certificate" className="form-control"  placeholder="Enter certficate url" onChange={ e=>handleinputchange(e,i)} />
               </div>

               
                <Duration />
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
export default MyExperience;