import React from "react";
import InputBox from "./InputBox";
import CustomSelect from "./CustomSelect";
import TextArea from "./TextArea";

const BioForm=()=>{
 

    return (
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
        <div>Bio Details</div>
        <InputBox field="Full Name" type="text" id="name" placeholder="Enter name"></InputBox>
        <InputBox field="Instagram" type="text" id="instagram" placeholder="Enter instagram profile url"></InputBox>
        <InputBox field="LinkedIn" type="text" id="linkedIn" placeholder="Enter linkedIn profile url"></InputBox>
        <InputBox field="Github" type="text" id="githubProfile" placeholder="Enter github profile url"></InputBox>
        <TextArea field="Bio" id="bio" placeholder="Enter a brief description of yours, your hobby, your birthdate, and likings..."></TextArea>
      </div>
    );
}

export default BioForm;