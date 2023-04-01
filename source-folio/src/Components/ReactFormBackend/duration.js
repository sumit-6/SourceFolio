import React, {useState} from "react";
import { Container } from "react-bootstrap";

function Duration() {
    const [inputObj, setinputObj]= useState({start:'', end:''});

    const handleinputchange=(e)=>{
      const {name, value} = e.target;
      const obj = {...inputObj};
      obj[name] = value;
      setinputObj(obj);
    }
  return (
    <Container className="content">
     <div className="row">
       <div className="col-sm-12">
              <div className="row mb-3">
                 <div className="form-group col-md-4">
                 <label >Start: </label>
                  <input type="text"  name="start" className="form-control"  placeholder="Enter Start Date" onChange={(e)=> handleinputchange(e)}/>
               </div>
               
               <div className="form-group col-md-4">
                <label>End: </label>
                <input type="text" name="end" className="form-control" placeholder="Enter End Date" onChange={(e)=> handleinputchange(e)}/>
               </div>

               </div>
            </div>

               
       </div>
    </Container>
  );
}
export default Duration;