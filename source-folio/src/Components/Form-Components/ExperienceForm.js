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
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
        <div>Experience Details</div>
        {inputList.map((x, index) => {
          return (
            <>
              <InputBox field="Role" index={index} name="role" type="text" id={`role_${index}`} placeholder="Enter role" handleChange={handleinputchange} value={x.role}></InputBox>
              <div className="border border-gray-900 rounded-lg p-2">
                <WorkDescription index={index} data={x.workDescription} onChange={handleWorkDescriptionChange} onRemove={handleWorkDescriptionDelete} handleWorkDescriptionAdd={handleWorkDescriptionAdd}></WorkDescription>
              </div>
              <InputBox field="Company" index={index} name="company" type="text" id={`company_${index}`} placeholder="Enter company name" handleChange={handleinputchange} value={x.company}></InputBox>
              <InputBox field="Certificate URL" index={index} name="certificate" type="text" id={`certificate_${index}`} placeholder="Enter certificate url" handleChange={handleinputchange} value={x.certificate} ></InputBox>
              <Duration index={index} onChange={handleDurationChange} data={x.duration}></Duration>
              <div className="flex justify-center">
              {
                  inputList.length - 1 === index &&
                  <IoIosAddCircleOutline className=" text-black h-7 w-7 mt-1" onClick={(e) => handleaddclick(e)}></IoIosAddCircleOutline>
              }
              {
                  
                  <IoIosRemoveCircleOutline className=" text-black h-7 w-7 mt-1" onClick={(e)=> handleremove(e, index)}></IoIosRemoveCircleOutline>
              } 
              </div>
            </>
          );
        })}
      <div className="flex justify-center mt-2">
        {(inputList.length === 0) && <IoIosAddCircleOutline className="h-8 w-8 text-black" onClick={(e)=> handleaddclick(e)}/>}
        </div>
      </div>
      
    );
}

export default ExperienceForm;