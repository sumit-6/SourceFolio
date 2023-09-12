import React, {useState} from "react";
import TextArea from "./TextArea";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

function MainDesignations(props) {
    const [inputList, setinputList]= useState(props.mainDesignations);

  const handleinputchange=(e, index)=>{
    const {value}= e.target;
    const list= [...inputList];
    list[index]= value;
    setinputList(list);
    props.handleChange(list);

  }
 
  const handleRemove= (event, index)=>{
    event.preventDefault();
    let list=[...inputList];
    list.splice(index,1);
    setinputList(list);
    props.handleChange(list);
  }

  const handleAddClick=()=>{ 
    setinputList([...inputList, ""]);
    props.handleChange([...inputList, ""]);
  }
    return (
        <>
            {inputList.map((x, index) => {
                return (
                    <>
                    <TextArea field="Designation" id={`mainDesignation_${index}`} name="mainDesignations" placeholder="Full Stack Developer/Coder/App Developer/..." handleChange={handleinputchange} value={x} index={index}></TextArea>
                    <div>
                        {
                            inputList.length - 1 === index && 
                            <IoIosAddCircleOutline className="h-8 w-8 text-black" onClick={(e)=> handleAddClick(e)}/>
                        }
                        {
                            inputList.length !== 1 &&
                            <IoIosRemoveCircleOutline className="h-8 w-8 text-black" onClick={(e)=> handleRemove(e, index)}/> 
                        }
                    
                    </div>
                 </>
                );
            })
            }

            
        </>
    );
}

export default MainDesignations;