import React from "react";
import ProgrammingSkills from "./ProgrammingSkills";
import ToolsAndFrameworks from "./ToolsAndFrameworks";

const SkillsForm = (props) => {

    return (
      <div
        className="p-1 sm:p-4 mt-6"
        style={{ display: props.isSelected ? "" : "none" }}
      >
        
        <div className="border border-gray-700 rounded-lg p-2 sm:p-2 mt-6">
        <div className="text-xl text-white text-center">Programming Skills Details</div>
        <ProgrammingSkills />
        </div>
        <div className="border border-gray-700 rounded-lg p-2 mt-6">
        <div className="text-xl text-white text-center">Tools and Frameworks Details</div>
        <ToolsAndFrameworks />
        </div>
      </div>
    );
}

export default SkillsForm;