import React, {useState, useEffect} from "react";
import TextArea from "./TextArea";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

const WorkDescription = (props) => {
    const [inputList, setinputList]= useState(props.data);

  useEffect(() => {
    const list = props.data || [""]; // initialize the inputList with the workDescriptionList from props or with an empty string
    setinputList(list);
  }, [props.data]);

  const handleinputchange=(e, index)=>{
    const {value}= e.target;
    const list= [...inputList];
    list[index]= value;
    setinputList(list);
    props.onChange(list, props.index);
  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=inputList.filter((value, ind) => {
      return index !== ind;
    });
    setinputList(list);
    props.onRemove(list, index, props.index);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, ""]);
    props.handleWorkDescriptionAdd([...inputList, ""], props.index)
  }
    return (
        <>
        {inputList.map((x, i) => {
            return (
                <>
                <div className="grid grid-flow-col">
             <TextArea field="Enter Description"
                            id={`workDescription_${props.index}_${i}`}
                            placeholder="Enter description of what you did at this workplace..."
                            value={x}
                            handleChange={handleinputchange}
                            name={`workDescription_${props.index}`}
                            index = {i}></TextArea>
            <div className="flex">
              {
                inputList.length - 1 === i && 
                <IoIosAddCircleOutline className="h-8 w-8 text-white mt-12" onClick={(e)=> handleaddclick(e)}/>
              }
              {
                inputList.length !== 1 &&
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