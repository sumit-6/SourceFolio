import { useSelector, useDispatch } from "react-redux";
import React, {useState} from "react";
import CustomSelect from "./CustomSelect";
import TextArea from "./TextArea";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const AboutMe = (props) => {
    const dispatch = useDispatch();
    const { yearsOfExperience, numberOfProjects, description } = useSelector(state => state.portfolio.data);
    const handleinputchange=(e)=>{
        const {name, value} = e.target;
        const obj = {
          [name]: value
        };
        
        dispatch(update_portfolio(obj));
      }
    const experienceLevelOptions = ['Fresher', '6+ Months', '1-2 Years', '3-5 Years', '5-10 Years', '10+ Years'];
    const projectNumberOptions = ['Beginner', '1-2 Projects', '3-5 Projects', '5-10 Projects', '10+ Projects'];
    
    return (
      <div
        className="border border-gray-700 rounded-lg p-2 sm:p-4 mt-6"
        style={{ display: props.isSelected ? "" : "none" }}
      >
        <div className="text-xl text-white text-center">About Me Details!</div>
        <div className="mt-12">
          <CustomSelect
            field="Work Experience"
            id="yearsOfExperience"
            name="yearsOfExperience"
            value={yearsOfExperience}
            handleChange={handleinputchange}
            array={experienceLevelOptions}
          ></CustomSelect>
          <CustomSelect
            field="Project Experience"
            id="numberOfProjects"
            name="numberOfProjects"
            value={numberOfProjects}
            handleChange={handleinputchange}
            array={projectNumberOptions}
          ></CustomSelect>
        </div>
        <TextArea
          field="Description"
          id="description"
          name="description"
          value={description}
          placeholder="Enter your description of your projessional life...
For Example: 'I am a Full Stack Developer and I can create web pages with UI/UX interfaces. Apart from that I love doing DSA and problem-solving.'"
          handleChange={handleinputchange}
        ></TextArea>
      </div>
    );
};

export default AboutMe;