import React from "react";
import TextArea from "./TextArea";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import { useState } from "react";


const AchievementsForm = (props) => {
    const [inputList, setInputList] = useState(props.data);
    const handleInputChange = (e, index) => {
      const {value} = e.target;
      const list = [...inputList];
      list[index] = value;
      setInputList(list);
      props.handleChange(list);
    }

    const handleRemove= (event, index)=>{
      event.preventDefault();
      const list=[...inputList];
      list.splice(index,1);
      setInputList(list);
      props.handleChange(list);
    }

    const handleAddClick=()=>{ 
      setInputList([...inputList, ""]);
      props.handleChange([...inputList, ""]);
    }    

    return (
      <div
        className="border border-gray-700 rounded-lg p-2 sm:p-4 mt-6"
        style={{ display: props.isSelected ? "" : "none" }}
      >
        <div className="text-xl text-white text-center">
          Achievements Details!
        </div>

        {inputList.map((box, index) => {
          return (
            <div className="w-full flex mt-6">
              <div className="flex-1">
              <TextArea
                name={`myAchievements`}
                field="Achievement"
                id={`myAchievements_${index}`}
                placeholder="Enter your achievement"
                value={box}
                handleChange={handleInputChange}
                index={index}
              ></TextArea>
              </div>
              <div className="flex">
                {inputList.length - 1 === index && (
                  <IoIosAddCircleOutline
                    className="h-8 w-8 text-white mt-12"
                    onClick={(e) => handleAddClick(e)}
                  />
                )}

                {inputList.length !== 1 && (
                  <IoIosRemoveCircleOutline
                    className="h-8 w-8 text-white mt-12"
                    onClick={(e) => handleRemove(e, index)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default AchievementsForm;