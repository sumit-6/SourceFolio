import React, { useEffect, useState } from "react";
import TextArea from "./TextArea";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

const ProjectDescription = (props) => {
    const {index:id, onChange, onRemove, data} = props;
    const [inputList, setInputList] = useState(data);
    useEffect(() => {
        const list = data || [""];
        setInputList(list);
    }, [data])

    const handleinputchange=(e, index)=>{
        const {value}= e.target;
        const list= [...inputList];
        list[index]= value;
        setInputList(list);
        onChange(list, id);
      }
     
      const handleremove= (event, index)=>{
        event.preventDefault();
        const list=[...inputList];
        list.splice(index,1);
        setInputList(list);
        onRemove(list, index, id)
      }
    
      const handleaddclick=()=>{ 
        setInputList([...inputList, ""]);
        props.handleChange([...inputList, ""], id);
      }


      return (
        <>
        {inputList.map((x, i) => {
            return (
            <>
            <div className="flex">
              <div className="flex-1">
             <TextArea field="Enter Description"
                            id={`projectDescription_${id}_${i}`}
                            placeholder="Enter your project description"
                            value={x}
                            handleChange={handleinputchange}
                            name={`projectDescription_${id}`}
                            index = {i}></TextArea>
              </div>
            <div className="flex">
              {
                inputList.length - 1 === i && 
                <IoIosAddCircleOutline className="h-8 w-8 text-white  mt-12" onClick={(e)=> handleaddclick(e)}/>
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

export default ProjectDescription;