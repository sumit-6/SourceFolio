import React, { useState } from "react";
import InputBox from "./InputBox";
import CustomSelect from "./CustomSelect";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
const ToolsAndFrameworks = (props) => {
  const [inputList, setinputList] = useState(props.data);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
    props.onChange(name, value, index);
  };

  const handleremove = (event, index) => {
    event.preventDefault();
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
    props.onRemove(index);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { toolName: "", toolLevel: "" }]);
    props.onObjChange("toolsAndFrameworks", [
      ...inputList,
      { toolName: "", toolLevel: "" },
    ]);
  };
  const toolLevelOptions = ["Expert", "Intermediate", "Beginner"];
  return (
    <>
      {inputList.map((x, index) => {
        return (
          <>
            <div className="mt-6 p-4">
              <InputBox
                field="Tool/Framework Name"
                type="text"
                id={`toolName_${index}`}
                index={index}
                name="toolName"
                value={x.toolName}
                handleChange={handleinputchange}
                placeholder="Enter tool/framework name"
              ></InputBox>
              <CustomSelect
                field="Tool/Framework Level"
                index={index}
                value={x.toolLevel}
                name="toolLevel"
                id={`toolLevel_${index}`}
                array={toolLevelOptions}
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
          </>
        );
      })}
    </>
  );
};

export default ToolsAndFrameworks;
