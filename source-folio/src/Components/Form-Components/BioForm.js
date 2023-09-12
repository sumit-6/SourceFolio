import React, {useState} from "react";
import InputBox from "./InputBox";
import TextArea from "./TextArea";
import MainDesignations from "./MainDesignations";

const BioForm=(props)=>{
  const [inputObj, setinputObj]= useState(props.data);

  const handleinputchange=(e)=>{
    const {name, value} = e.target;
    const obj = {...inputObj};
    obj[name] = value;
    setinputObj(obj);
    props.handleChange(e);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setinputObj({...inputObj, profilePicture: file})
    props.handleFileChange(e);
  }


  function handleMainDesignations(list) {
    const obj = {...inputObj};
    obj["mainDesignations"] = list;
    setinputObj(obj);
    props.handleMainDesignations(list);
  }
    return (
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
        <div>Bio Details</div>
        <InputBox field="Full Name" type="text" id="name" name="name" placeholder="Enter name" value={inputObj.name} handleChange={handleinputchange}></InputBox>
        <InputBox field="Profile Picture" type="file" name="profilePicture" id="profilePicture" placeholder="Enter Profile Picture" handleChange={handleFileChange}></InputBox>
        <InputBox field="Instagram" type="text" id="instagram" name="instagram" placeholder="Enter instagram profile url" value={inputObj.instagram} handleChange={handleinputchange}></InputBox>
        <InputBox field="LinkedIn" type="text" id="linkedIn" name="linkedIn" placeholder="Enter linkedIn profile url" value={inputObj.linkedIn} handleChange={handleinputchange}></InputBox>
        <InputBox field="Github" type="text" id="githubProfile" name="githubProfile" placeholder="Enter github profile url" value={inputObj.githubProfile} handleChange={handleinputchange}></InputBox>
        <TextArea field="Bio" id="bio" name="bio" placeholder="Enter a brief description of yours, your hobby, your birthdate, and likings..." value={inputObj.bio} handleChange={handleinputchange}></TextArea>
        <div className="border border-gray-900 rounded-lg p-2">
          <MainDesignations mainDesignations={inputObj.mainDesignations} handleChange={handleMainDesignations}></MainDesignations>
        </div>
      </div>
    );
}

export default BioForm;