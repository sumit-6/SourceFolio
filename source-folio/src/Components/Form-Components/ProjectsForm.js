import React, { useState } from "react";
import InputBox from "./InputBox";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import ProjectDescription from "./ProjectDescription";

const ProjectsForm = (props) => {
    const [inputList, setInputList] = useState(props.data);
    const handleProjectDescription=(list, index) => {
      const newList = [...inputList];
      newList[index].description = list;
      setInputList(newList);
      props.handleChange(newList);
    }
    const handleinputchange=(e, index)=>{
        const {name, value}= e.target;
        const list= [...inputList];
        list[index][name]= value;
        setInputList(list);
        props.handleChange(list);
      }
    
      const handleProjectDescriptionChange = (value, index) => {
        const list = [...inputList];
        list[index].description = value;
        setInputList(list);
        props.handleChange(list);
      };
    
      const handleProjectDescriptionDelete = (value, index, ind) => {
        const list = [...inputList];
        list[ind]['description'].splice(index, 1);
        setInputList(list);
        props.handleChange(list);
      };
     
      const handleremove= (event, index)=>{
        event.preventDefault();
        const list=[...inputList];
        list.splice(index,1);
        setInputList(list);
        props.handleChange(list);
      }
    
      const handleaddclick=()=>{ 
        setInputList([...inputList, {projectName: "", gitHubLink: "", projectLink: "", description: [""]}]);
        props.handleChange([...inputList, {projectName: "", gitHubLink: "", projectLink: "", description: [""]}]);
      }
    return (
        <>
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6" style={{display: props.isSelected?"":"none"}}>
            <div>Projects Details</div>
            { inputList.map((x, index) => {
                return (
                    <>
                        <InputBox field="Project Name" type="text" index = {index} handleChange={handleinputchange} id={`projectName_${index}`} name="projectName" placeholder="Enter project name" value={x.projectName}></InputBox>
                        <div className="border border-gray-900 rounded-lg p-2">
                            <ProjectDescription index={index} onChange={handleProjectDescriptionChange} onRemove={handleProjectDescriptionDelete} data={x.description} handleChange={handleProjectDescription} />
                        </div>
                        <InputBox field="Githib Link" index={index} handleChange={handleinputchange} type="text" id={`githubLink_${index}`} name="gitHubLink" placeholder="Enter github link" value={x.gitHubLink}></InputBox>
                        <InputBox field="Project Link" index={index} handleChange={handleinputchange} type="text" id={`projectLink_${index}`} name="projectLink" placeholder="Enter project url" value={x.projectLink}></InputBox>
                        <div className="flex justify-center">
                        {
                            inputList.length - 1 === index &&
                            <IoIosAddCircleOutline className=" text-black h-7 w-7 mt-1" onClick={(e) => handleaddclick(e)}></IoIosAddCircleOutline>
                        }
                        {
                            
                            <IoIosRemoveCircleOutline className=" text-black h-7 w-7 mt-1" onClick={(e)=> handleremove(e, index)}></IoIosRemoveCircleOutline>
                        } 
                        </div>
                        
                    </>
                    
                );
                
            })
            
}
<div className="flex justify-center mt-2">
        {(inputList.length === 0) && <IoIosAddCircleOutline className="h-8 w-8 text-black" onClick={(e)=> handleaddclick(e)}/>}
        </div>
        </div>
        
        
        </>
    );
}

export default ProjectsForm;