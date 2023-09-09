import React from "react";
import InputBox from "./InputBox";

const EducationForm=()=>{
    return (
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
        <div>Education Details</div>
        <InputBox field="Institution Name" type="text" id="institutionName_0" placeholder="Enter your institution name"></InputBox>
        <InputBox field="Year" type="number" id="year_0" placeholder="Enter end year"></InputBox>
        <InputBox field="Place" type="text" id="place_0" placeholder="Enter place (like... Delhi, India)"></InputBox>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="aggregate_0"
            >
              Aggregate
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="aggregate_0"
              name="aggregate_0"
              placeholder="if GPA enter X.XX and if Percentage enter XX.X"
              type="number"
              step="0.01"
            />
          </div>
        </div>
        <InputBox field="Course Pursued" type="text" id="coursePursuied_0" placeholder="12th/B.Tech IT/M.Tech ME/..."></InputBox>
      </div> 
    );
}

export default EducationForm;