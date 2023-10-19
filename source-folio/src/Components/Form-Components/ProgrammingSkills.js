import React, { useState } from "react";
import InputBox from "./InputBox";
import CustomSelect from "./CustomSelect";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

const ProgrammingSkills = (props) => {
  const [inputList, setInputList] = useState(props.data);
  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    props.onChange(name, value, index);
  };

  const handleremove = (event, index) => {
    event.preventDefault();
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    props.onRemove(index);
  };

  const handleaddclick = () => {
    setInputList([...inputList, { skillName: "", skillLevel: "" }]);
    props.onObjChange("programmingSkills", [
      ...inputList,
      { skillName: "", skillLevel: "" },
    ]);
  };
  const skillLevelOptions = ["Expert", "Intermediate", "Beginner"];
  return (
    <>
      {inputList.map((x, index) => {
        return (
          <div className="border border-gray-700 rounded-lg p-2 mt-6">
            <div className="mt-6 p-4">
              <InputBox
                field="Programming Language"
                type="text"
                id={`skillName_${index}`}
                name="skillName"
                placeholder="Enter skill name"
                value={x.skillName}
                handleChange={handleinputchange}
                index={index}
              ></InputBox>
              <CustomSelect
                field="Skill Level"
                index={index}
                value={x.skillLevel}
                id={`skillLevel_${index}`}
                name="skillLevel"
                array={skillLevelOptions} 
                handleChange={handleinputchange}
              ></CustomSelect>
              <div className="flex justify-center">
                {inputList.length - 1 === index && (
                  <IoIosAddCircleOutline
                    className=" text-white h-7 w-7 mt-1"
                    onClick={(e) => handleaddclick(e)}
                  ></IoIosAddCircleOutline>
                )}
                {inputList.length !== 1 && (
                  <IoIosRemoveCircleOutline
                    className=" text-white h-7 w-7 mt-1"
                    onClick={(e) => handleremove(e, index)}
                  ></IoIosRemoveCircleOutline>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProgrammingSkills;
