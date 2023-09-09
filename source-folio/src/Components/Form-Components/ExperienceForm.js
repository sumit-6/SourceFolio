import React from "react";
import InputBox from "./InputBox";

const ExperienceForm=()=>{
    return (
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
        <div>Experience Details</div>
        <InputBox field="Role" type="text" id="role_0" placeholder="Enter role"></InputBox>
        <InputBox field="Company" type="text" id="company_0" placeholder="Enter company name"></InputBox>
        <InputBox field="Certificate URL" type="text" id="certificate_0" placeholder="Enter certificate url"></InputBox>
      </div>
    );
}

export default ExperienceForm;