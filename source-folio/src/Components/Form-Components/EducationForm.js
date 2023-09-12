import React, {useState} from "react";
import InputBox from "./InputBox";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

const EducationForm=(props)=>{
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

  const handleaddclick=()=>{ 
    setinputList([...inputList, {institutionName: "", place: "", year: "", aggregate: "", coursePursuied: ""}]);
    props.handleChange([...inputList, {institutionName: "", place: "", year: "", aggregate: "", coursePursuied: ""}]);
  }
    return (
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
        <div>Education Details</div>
        { inputList.map((x, index) => {
            return (
              <>
                <InputBox field="Institution Name" name="institutionName" index={index} type="text" id={`institutionName_${index}`} handleChange={handleinputchange} value={x.institutionName} placeholder="Enter your institution name"></InputBox>
                <InputBox field="Year" name="year" type="number" index={index} id={`year_${index}`} placeholder="Enter end year" value={x.year} handleChange={handleinputchange}></InputBox>
                <InputBox field="Place" name="place" type="text" index={index} id="place_0" placeholder="Enter place (like... Delhi, India)" value={x.place} handleChange={handleinputchange}></InputBox>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor={`aggregate_${index}`}
                    >
                      Aggregate
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id={`aggregate_${index}`}
                      name="aggregate"
                      value={x.aggregate}
                      placeholder="if GPA enter X.XX and if Percentage enter XX.X"
                      type="number"
                      step="0.01"
                      onChange={e => handleinputchange(e, index)} 
                    />
                  </div>
                </div>
                <InputBox field="Course Pursued" index={index} name="coursePursuied" type="text" id={`coursePursuied_${index}`} placeholder="12th/B.Tech IT/M.Tech ME/..." handleChange={handleinputchange} value={x.coursePursuied}></InputBox>
                <div className="flex justify-center">
                {
                    inputList.length - 1 === index &&
                    <IoIosAddCircleOutline className=" text-black h-7 w-7 mt-1" onClick={(e) => handleaddclick(e)}></IoIosAddCircleOutline>
                }
                {
                    inputList.length !== 1 &&
                    <IoIosRemoveCircleOutline className=" text-black h-7 w-7 mt-1" onClick={(e)=> handleremove(e, index)}></IoIosRemoveCircleOutline>
                } 
                </div>
              </>
            );
        })}
        
        
      </div> 
    );
}

export default EducationForm;