import React from "react";
import InputBox from "./InputBox";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import ProjectDescription from "./ProjectDescription";
import { useDispatch, useSelector } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const ProjectsForm = (props) => {
    const dispatch = useDispatch();
    const { myProjects } = useSelector(state => state.portfolio.data);
    
    const handleinputchange=(e, index)=>{
        e.preventDefault();
        const {name, value}= e.target;
        const list= [...myProjects];
        const project = {
          ...list[index],
          [name]: value
        }
        list[index] = project;
        dispatch(update_portfolio({
          myProjects: list
        }));
      }
     
      const handleremove= (event, index)=>{
        event.preventDefault();
        const list=[...myProjects];
        list.splice(index,1);
        dispatch(update_portfolio({
          myProjects: list
        }));
      }
    
      const handleaddclick=()=>{ 
        dispatch(update_portfolio({
          myProjects: [...myProjects, {projectName: "", gitHubLink: "", projectLink: "", description: [""]}]
        }));
      }
    return (
      <>
        <div
          className="border border-gray-700 rounded-lg p-2 sm:p-4 mt-6"
          style={{ display: props.isSelected ? "" : "none" }}
        >
          <div className="text-xl text-white text-center">
            Projects Details!
          </div>
          {myProjects.map((x, index) => {
            return (
              <>
                <div className="mt-6 ">
                  <InputBox
                    field="Project Name"
                    type="text"
                    index={index}
                    handleChange={handleinputchange}
                    id={`projectName_${index}`}
                    name="projectName"
                    placeholder="Enter project name"
                    value={x.projectName}
                  ></InputBox>
                  <div className="border border-gray-900 rounded-lg">
                    <ProjectDescription
                      index={index}
                    />
                  </div>
                  <InputBox
                    style={{ marginTop: "3rem" }}
                    field="Github Link"
                    index={index}
                    handleChange={handleinputchange}
                    type="text"
                    id={`githubLink_${index}`}
                    name="gitHubLink"
                    placeholder="Enter github link"
                    value={x.gitHubLink}
                  ></InputBox>
                  <InputBox
                    field="Project Link"
                    index={index}
                    handleChange={handleinputchange}
                    type="text"
                    id={`projectLink_${index}`}
                    name="projectLink"
                    placeholder="Enter project url"
                    value={x.projectLink}
                  ></InputBox>
                </div>
                <div className="flex justify-center">
                  {myProjects.length - 1 === index && (
                    <IoIosAddCircleOutline
                      className=" text-white h-7 w-7 mt-1"
                      onClick={(e) => handleaddclick(e)}
                    ></IoIosAddCircleOutline>
                  )}
                  {
                    <IoIosRemoveCircleOutline
                      className=" text-white h-7 w-7 mt-1"
                      onClick={(e) => handleremove(e, index)}
                    ></IoIosRemoveCircleOutline>
                  }
                </div>
              </>
            );
          })}
          <div className="flex justify-center mt-6">
            {myProjects.length === 0 && (
              <IoIosAddCircleOutline
                className="h-8 w-8 text-white"
                onClick={(e) => handleaddclick(e)}
              />
            )}
          </div>
        </div>
      </>
    );
}

export default ProjectsForm;