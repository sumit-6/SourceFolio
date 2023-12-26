import React, {useState} from "react";
import InputBox from "./InputBox";
import WorkDescription from "./WorkDescription";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import Duration from "./Duration";

const ExperienceForm=(props)=>{
  const [inputList, setinputList]= useState(props.data);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);
    props.handleChange(list);
  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
    props.handleChange(list);
  }

  const handleWorkDescriptionChange = (value, index) => {
    const list = [...inputList];
    list[index].workDescription = value;
    setinputList(list); 
    props.handleChange(list);
  };

  const handleWorkDescriptionDelete = (value, index, ind) => {
    const list = [...inputList];
    list[ind]['workDescription'].splice(index, 1);
    setinputList(list);
    props.handleChange(list);
  };

  const handleWorkDescriptionAdd = (list, index) => {
    const newList = [...inputList];
      newList[index].workDescription = list;
      setinputList(newList);
      props.handleChange(newList);
  }

  const handleDurationChange = (value, index) => {
    const list = [...inputList];
    list[index].duration = value;
   
    setinputList(list);
    props.handleChange(list);
  };

  const handleaddclick=()=>{ 
    setinputList([...inputList, {role: "", company: "", certificate: "", workDescription: [""], duration: {start: "", end: ""}}]);
    props.handleChange([...inputList, {role: "", company: "", certificate: "", workDescription: [""], duration: {start: "", end: ""}}]);
  }
    return (
      <div
        className="p-4 mt-6 border border-gray-700 rounded-lg"
        style={{ display: props.isSelected ? "" : "none" }}
      >
        <div className="text-xl text-white text-center">
          Experience Details!
        </div>
        {inputList.map((x, index) => {
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
                    data={x.workDescription}
                    onChange={handleWorkDescriptionChange}
                    onRemove={handleWorkDescriptionDelete}
                    handleWorkDescriptionAdd={handleWorkDescriptionAdd}
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
                  onChange={handleDurationChange}
                  data={x.duration}
                ></Duration>
                <div className="flex justify-center">
                  {inputList.length - 1 === index && (
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
          {inputList.length === 0 && (
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