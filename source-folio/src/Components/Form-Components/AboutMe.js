import React from "react";
import CustomSelect from "./CustomSelect";
import TextArea from "./TextArea";

const AboutMe = (props) => {
    const experienceLevelOptions = ['Fresher', '6+ Months', '1-2 Years', '3-5 Years', '5-10 Years', '10+ Years'];
    const projectNumberOptions = ['Beginner', '1-2 Projects', '3-5 Projects', '5-10 Projects', '10+ Projects'];

    return (
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
            <div>About Me Details</div>
            <CustomSelect field="Work Experience" id="yearsOfExperience" array={experienceLevelOptions}></CustomSelect>
            <CustomSelect field="Project Experience" id="numberOfProjects" array={projectNumberOptions}></CustomSelect>
            <TextArea field="Description" id="description" placeholder="Enter your description of your projessional life...
For Example: 'I am a Full Stack Developer and I can create web pages with UI/UX interfaces. Apart from that I love doing DSA and problem-solving.'"></TextArea>
        </div>
    );
};

export default AboutMe;