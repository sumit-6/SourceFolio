import React from "react";
import InputBox from "./InputBox";

const ProjectsForm = () => {
    return (
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
            <div>Projects Details</div>
            <InputBox field="Project Name" type="text" id="projectName_0" placeholder="Enter project name"></InputBox>
            <InputBox field="Githib Link" type="text" id="githubLink_0" placeholder="Enter github link"></InputBox>
            <InputBox field="Project Link" type="text" id="projectLink_0" placeholder="Enter project url"></InputBox>
        </div>
    );
}

export default ProjectsForm;