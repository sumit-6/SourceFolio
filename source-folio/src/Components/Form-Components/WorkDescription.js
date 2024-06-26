import React from "react";
import TextArea from "./TextArea";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const WorkDescription = (props) => {
  const dispatch = useDispatch();
  const { workDescription } = useSelector(state => state.portfolio.data.myExperience[props.index])
  const { myExperience } = useSelector(state => state.portfolio.data);

  const handleinputchange=(e, index)=>{
    e.preventDefault();
    const {value}= e.target;
    const list= [...workDescription];
    list[index]= value;
    const listOfExperience = [...myExperience];
    const descriptionObj = {
      ...listOfExperience[props.index],
      workDescription: list
    }

    listOfExperience[props.index] = descriptionObj;
    const obj = {
      myExperience: listOfExperience
    }
    dispatch(update_portfolio(obj));
  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=workDescription.filter((value, ind) => {
      return index !== ind;
    });
    const listOfExperience = [...myExperience];
    const descriptionObj = {
      ...listOfExperience[props.index],
      workDescription: list
    }

    listOfExperience[props.index] = descriptionObj;
    
    const obj = {
      myExperience: listOfExperience
    }
    dispatch(update_portfolio(obj));
  }

  const handleaddclick=()=>{ 
    const list = [...workDescription, ""];
    const listOfExperience = [...myExperience];
    const descriptionObj = {
      ...listOfExperience[props.index],
      workDescription: list
    }

    listOfExperience[props.index] = descriptionObj;
    
    const obj = {
      myExperience: listOfExperience
    }
    dispatch(update_portfolio(obj));
  }
    return (
        <>
        {workDescription.map((x, i) => {
            return (
                <>
                <div className="flex">
                  <div className="flex-1">
                    <TextArea field="Enter Description"
                            id={`workDescription_${props.index}_${i}`}
                            placeholder="Enter description of what you did at this workplace..."
                            value={x}
                            handleChange={handleinputchange}
                            name={`workDescription_${props.index}`}
                            index = {i}></TextArea>
                  </div>
                  <div className="flex">
                    {
                      workDescription.length - 1 === i && 
                      <IoIosAddCircleOutline className="h-8 w-8 text-white mt-12" onClick={(e)=> handleaddclick(e)}/>
                    }
                    {
                      workDescription.length !== 1 &&
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

export default WorkDescription;