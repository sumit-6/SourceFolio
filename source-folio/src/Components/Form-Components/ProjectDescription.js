import React from "react";
import TextArea from "./TextArea";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const ProjectDescription = (props) => {
    const dispatch = useDispatch();
    const { myProjects } = useSelector(state => state.portfolio.data);

    const handleinputchange=(e, index)=>{
        e.preventDefault();
        const {value}= e.target;
        const list= [...myProjects];
        const listOfDescription = [...list[props.index].description];
        listOfDescription[index] = value;
        const project = {
          ...list[props.index],
          description: listOfDescription
        }
        list[props.index] = project
        dispatch(update_portfolio({
          myProjects: list
        }))
      }
     
      const handleremove= (event, index)=>{
        event.preventDefault();
        const list=[...myProjects];
        const projectDescriptionList = [...myProjects[props.index].description]
        projectDescriptionList.splice(index,1);
        list[props.index] = {
          ...myProjects[props.index],
          description: projectDescriptionList
        }
        dispatch(update_portfolio({
          myProjects: list
        }))
      }
    
      const handleaddclick=()=>{ 
        const list=[...myProjects];
        const projectDescriptionList = [...myProjects[props.index].description, ""]
        
        list[props.index] = {
          ...myProjects[props.index],
          description: projectDescriptionList
        }
        dispatch(update_portfolio({
          myProjects: list
        }))
      }


      return (
        <>
        {myProjects[props.index].description.map((x, i) => {
            return (
            <>
            <div className="flex">
              <div className="flex-1">
             <TextArea field="Enter Description"
                            id={`projectDescription_${props.index}_${i}`}
                            placeholder="Enter your project description"
                            value={x}
                            handleChange={handleinputchange}
                            name={`projectDescription_${props.index}`}
                            index = {i}></TextArea>
              </div>
            <div className="flex">
              {
                myProjects[props.index].description.length - 1 === i && 
                <IoIosAddCircleOutline className="h-8 w-8 text-white  mt-12" onClick={(e)=> handleaddclick(e)}/>
              }
              {
                myProjects[props.index].description.length !== 1 &&
                <IoIosRemoveCircleOutline className="h-8 w-8 text-white mt-12" onClick={(e)=> handleremove(e, i)}/> 
              }
              
            </div>
            </div>
            </>
            );
        })}
        
        </>
      );
}

export default ProjectDescription;