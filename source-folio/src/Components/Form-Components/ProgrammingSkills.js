import React from "react";
import InputBox from "./InputBox";
import CustomSelect from "./CustomSelect";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const ProgrammingSkills = () => {
  const dispatch = useDispatch();
  const { mySkills } = useSelector(state => state.portfolio.data);
  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const listOfProgrammingSkills = [...mySkills.programmingSkills];
    const obj = {
      ...listOfProgrammingSkills[index],
      [name]: value
    }
    listOfProgrammingSkills[index] = obj;
    dispatch(update_portfolio({
      mySkills: {
        ...mySkills,
        programmingSkills: listOfProgrammingSkills
      }
    }))
  };

  const handleremove = (event, index) => {
    event.preventDefault();
    const listOfProgrammingSkills = [...mySkills.programmingSkills];
    listOfProgrammingSkills.splice(index, 1);
    //listOfProgrammingSkills[index] = obj;
    dispatch(update_portfolio({
      mySkills: {
        ...mySkills,
        programmingSkills: listOfProgrammingSkills
      }
    }))
  };

  const handleaddclick = () => {
    dispatch(update_portfolio({
      mySkills: {
        ...mySkills,
        programmingSkills: [...mySkills.programmingSkills, {
          skillName: "",
          skillLevel: ""
        }]
      }
    }))
  };
  const skillLevelOptions = ["Expert", "Intermediate", "Beginner"];
  return (
    <>
      {mySkills.programmingSkills.map((x, index) => {
        return (
          <>
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
                {mySkills.programmingSkills.length - 1 === index && (
                  <IoIosAddCircleOutline
                    className=" text-white h-7 w-7 mt-1"
                    onClick={(e) => handleaddclick(e)}
                  ></IoIosAddCircleOutline>
                )}
                {mySkills.programmingSkills.length !== 1 && (
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

export default ProgrammingSkills;
