import React, {useState} from "react";
import { Container } from "react-bootstrap";
import MainDesignation from "./mainDesignation";

function FirstLayer() {
    const [inputObj, setinputObj]= useState({name:'', description:''});

    const handleinputchange=(e)=>{
      const {name, value} = e.target;
      const obj = {...inputObj};
      obj[name] = value;
      setinputObj(obj);
    }
  return (
    <Container className="content m-3">
     <div className="row card box shadow-lg bg-body rounded">
       <div className="col-sm-12">
              <div className="row">
                 <div className="form-group col-md-4">
                 <label >Name: </label>
                  <input type="text"  name="name" className="form-control"  placeholder="Enter Name" onChange={(e)=> handleinputchange(e)}/>
               </div>
               
               <div className="form-group col-md-4">
                <label>Description: </label>
                <textarea type="text" name="description" className="form-control" placeholder="Enter Description" onChange={(e)=> handleinputchange(e)} rows="4" cols="40" />
               </div>

               <div className="form-group col-md-4">
                <label>Profile Picture: </label>
                <input type="text" name="profilePicture" className="form-control" placeholder="Enter profile picture" onChange={(e)=> handleinputchange(e)}/>
               </div>
               
               <div className="form-group col-md-4">
                <label>LinkedIn: </label>
                <input type="text" name="linkedIn" className="form-control" placeholder="Enter linkedIn profile url" onChange={(e)=> handleinputchange(e)}/>
               </div>

               <div className="form-group col-md-4">
                <label>Instagram: </label>
                <input type="text" name="instagram" className="form-control" placeholder="Enter instagram profile url" onChange={(e)=> handleinputchange(e)}/>
               </div>

               <div className="form-group col-md-4">
                <label>Mobile Number: </label>
                <input type="number" name="telephone" className="form-control" placeholder="Enter mobile number" onChange={(e)=> handleinputchange(e)}/>
               </div>

               <div className="form-group col-md-4">
                <label>Email: </label>
                <input type="text" name="email" className="form-control" placeholder="Enter email" onChange={(e)=> handleinputchange(e)}/>
               </div>

               <MainDesignation />
               </div>
            </div>

               
       </div>
    </Container>
  );
}
export default FirstLayer;