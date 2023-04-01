import React, { useState } from "react";
import { Container } from "react-bootstrap";

function WorkDescription(props) {
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
     <div className="row card m-3">
       <div className="col-sm-12 box">
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row">
                
                 <div className="form-group col-md-4">
                 <label >Enter Description: </label>
                  <textarea type="text"  name={"workDescription"+"_"+props.index} className="form-control"  placeholder="Enter Description" onChange={ e=>handleinputchange(e,i)} rows="4" cols="40" />
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
export default WorkDescription;