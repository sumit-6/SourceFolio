import React from "react";
import InputBox from "./InputBox";
import CustomSelect from "./CustomSelect";

const SkillsForm = (props) => {
    const skillLevelOptions = ["Expert", "Intermediate", "Beginner"];
    return (
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
            <div>Skills Details</div>
            <InputBox field="Programming Language" type="text" id="skillName_0" placeholder="Enter skill name"></InputBox>
            <CustomSelect field="Skill Level" id="skillLevel_0" array={skillLevelOptions}></CustomSelect>

            <InputBox field="Tool/Framework Name" type="text" id="toolName_0" placeholder="Enter tool/framework name"></InputBox>
            <CustomSelect field="Tool/Framework Level" id="toolLevel_0" array={skillLevelOptions}></CustomSelect>
        </div>
    );
}

export default SkillsForm;