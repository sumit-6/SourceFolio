import React, {useState} from "react";
import InputBox from "./InputBox";
import WorkDescription from "./WorkDescription";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import Duration from "./Duration";
import { useSelector, useDispatch } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const ExperienceForm=(props)=>{
  const dispatch = useDispatch();
  const { myExperience } = useSelector(state => state.portfolio.data);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...myExperience];
    const obj = {
      ...list[index],
      [name]: value
    }
    list[index] = obj;
    dispatch(update_portfolio({
      myExperience: list
    }));
  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=[...myExperience];
    list.splice(index,1);
    dispatch(update_portfolio({
      myExperience: list
    }));
  }

  const handleaddclick=()=>{ 
    dispatch(update_portfolio({
      myExperience: [...myExperience, {role: "", company: "", certificate: "", workDescription: [""], duration: {start: "", end: ""}}]
    }));
  }
    return (
      <div
        className="p-2 sm:p-4 mt-6 border border-gray-700 rounded-lg"
        style={{ display: props.isSelected ? "" : "none" }}
      >
        <div className="text-xl text-white text-center">
          Experience Details!
        </div>
        {myExperience.map((x, index) => {
          return (
            <>
              <div className="mt-6">
                <InputBox
                  field="Role"
                  index={index}
                  name="role"
                  type="text"
                  id={`role_${index}`}
                  placeholder="Enter role"
                  handleChange={handleinputchange}
                  value={x.role}
                ></InputBox>
                
                  <WorkDescription
                    index={index}
                  ></WorkDescription>
                
                <InputBox
                  field="Company"
                  index={index}
                  name="company"
                  type="text"
                  id={`company_${index}`}
                  placeholder="Enter company name"
                  handleChange={handleinputchange}
                  value={x.company}
                ></InputBox>
                <InputBox
                  field="Certificate URL"
                  index={index}
                  name="certificate"
                  type="text"
                  id={`certificate_${index}`}
                  placeholder="Enter certificate url"
                  handleChange={handleinputchange}
                  value={x.certificate}
                ></InputBox>
                <Duration
                  index={index}
                  data={x.duration}
                ></Duration>
                <div className="flex justify-center">
                  {myExperience.length - 1 === index && (
                    <IoIosAddCircleOutline
                      className=" text-white h-7 w-7 mt-1"
                      onClick={(e) => handleaddclick(e)}
                    ></IoIosAddCircleOutline>
                  )}
                  {
                    <IoIosRemoveCircleOutline
                      className=" text-white h-7 w-7 mt-1"
                      onClick={(e) => handleremove(e, index)}
                    ></IoIosRemoveCircleOutline>
                  }
                </div>
              </div>
            </>
          );
        })}
        <div className="flex justify-center mt-6">
          {myExperience.length === 0 && (
            <IoIosAddCircleOutline
              className="h-8 w-8 text-white"
              onClick={(e) => handleaddclick(e)}
            />
          )}
        </div>
      </div>
    );
}

export default ExperienceForm;