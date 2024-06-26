import React, { useState } from "react";
import InputBox from "./InputBox";
import CustomSelect from "./CustomSelect";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const ToolsAndFrameworks = () => {
  const dispatch = useDispatch();
  const { mySkills } = useSelector(state => state.portfolio.data);
  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const listOfToolsAndFrameworks = [...mySkills.toolsAndFrameworks];
    const obj = {
      ...listOfToolsAndFrameworks[index],
      [name]: value
    }
    listOfToolsAndFrameworks[index] = obj;
    dispatch(update_portfolio({
      mySkills: {
        ...mySkills,
        toolsAndFrameworks: listOfToolsAndFrameworks
      }
    }))
  };

  const handleremove = (event, index) => {
    event.preventDefault();
    const listOfToolsAndFrameworks = [...mySkills.toolsAndFrameworks];
    listOfToolsAndFrameworks.splice(index, 1);
    //listOfToolsAndFrameworks[index] = obj;
    dispatch(update_portfolio({
      mySkills: {
        ...mySkills,
        toolsAndFrameworks: listOfToolsAndFrameworks
      }
    }))
  };

  const handleaddclick = () => {
    dispatch(update_portfolio({
      mySkills: {
        ...mySkills,
        toolsAndFrameworks: [...mySkills.toolsAndFrameworks, {
          toolName: "",
          toolLevel: ""
        }]
      }
    }))
  };
  const toolLevelOptions = ["Expert", "Intermediate", "Beginner"];
  return (
    <>
      {mySkills.toolsAndFrameworks.map((x, index) => {
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
                {mySkills.toolsAndFrameworks.length - 1 === index && (
                  <IoIosAddCircleOutline
                    className=" text-white h-7 w-7 mt-1"
                    onClick={(e) => handleaddclick(e)}
                  ></IoIosAddCircleOutline>
                )}
                {mySkills.toolsAndFrameworks.length !== 1 && (
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
