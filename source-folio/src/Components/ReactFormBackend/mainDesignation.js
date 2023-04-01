import React, { useState } from "react";
import { Container } from "react-bootstrap";

function MainDesignation() {
  const [inputList, setinputList]= useState([""]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index]= value;
    setinputList(list);

  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, ""]);
  }
  return (
    <Container className="content">
     <div className="row card m-3 box">
       <div className="col-sm-12 box">
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row">
                 <div className="form-group col-md-4">
                 <label >Designation: </label>
                  <input type="text"  name="mainDesignations" className="form-control"  placeholder="Enter First Name" onChange={ e=>handleinputchange(e,i)} />
               </div>
               
               <div className="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button className="btn btn-danger mx-1" onClick={()=> handleremove(i)}>Remove</button>
               }
               { inputList.length-1===i &&
               <button className="btn btn-success m-1" onClick={ handleaddclick}>Add More</button>
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
export default MainDesignation;