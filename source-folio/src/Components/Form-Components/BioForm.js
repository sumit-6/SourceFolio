import React, {useState} from "react";
import InputBox from "./InputBox";
import TextArea from "./TextArea";
import MainDesignations from "./MainDesignations";
import { useNavigate } from "react-router-dom";

const BioForm=(props)=>{
  const [inputObj, setinputObj]= useState(props.data);
  const navigate = useNavigate();
  const handleinputchange=(e)=>{
    const {name, value} = e.target;
    const obj = {...inputObj};
    obj[name] = value;
    setinputObj(obj);
    props.handleChange(e);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setinputObj({...inputObj, profilePicture: file})
    props.handleFileChange(file);
  }


  function handleMainDesignations(list) {
    const obj = {...inputObj};
    obj["mainDesignations"] = list;
    setinputObj(obj);
    props.handleMainDesignations(list);
  }
    
    return (
      <div
        className=" p-4 mt-6 rounded-lg flex "
        style={{ display: props.isSelected ? "" : "none" }}
      >
        <div className="border border-gray-700 w-2/4 rounded-lg p-4">
          <div className="text-xl text-white text-center">Bio Details</div>
          <div className="mt-8">
            <InputBox
              field="Full Name"
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              value={inputObj.name}
              handleChange={handleinputchange}
            ></InputBox>
            {inputObj["profilePicture"] != undefined ? <InputBox
              field="Profile Picture"
              type="file"
              name="profilePicture"
              id="profilePicture"
              placeholder="Enter Profile Picture"
              handleChange={handleFileChange}
              value={inputObj.profilePicture}
              isSelected = {true}
            ></InputBox> : 
              <div class="md:flex md:items-center mb-6">
                <div>
                  <label class="block text-gray-300 font-bold mb-1 md:mb-0 whitespace-nowrap mr-2" htmlFor={"profilePicture"}>
                  Profile Picture:
                  </label>
                </div>
                <div class="md:w-2/3">
                    <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="inline-flex items-center rounded px-6 pb-2 pt-2.5 ml-24 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
                    onClick={() => {navigate(`/edit/profilePicture/${props.id}`)}}
                    >
                    Update Profile Picture
                  </button>
                </div>
              </div>}
            <div className="border border-gray-900 rounded-lg w-full">
              <MainDesignations
                mainDesignations={inputObj.mainDesignations}
                handleChange={handleMainDesignations}
              ></MainDesignations>
            </div>
            <TextArea
              field="Bio"
              id="bio"
              name="bio"
              placeholder="Enter a brief description of yours, your hobby, your birthdate, and likings..."
              value={inputObj.bio}
              handleChange={handleinputchange}
            ></TextArea>
          </div>
        </div>

        <div className="border border-gray-700 w-2/4 rounded-lg ml-6 p-4">
          <div className="text-xl text-white text-center">Social Handles!</div>
          <div className="mt-8">
            <InputBox
              field="Instagram"
              type="text"
              id="instagram"
              name="instagram"
              placeholder="Enter instagram profile url"
              value={inputObj.instagram}
              handleChange={handleinputchange}
            ></InputBox>
            <InputBox
              field="LinkedIn"
              type="text"
              id="linkedIn"
              name="linkedIn"
              placeholder="Enter linkedIn profile url"
              value={inputObj.linkedIn}
              handleChange={handleinputchange}
            ></InputBox>
            <InputBox
              field="Github"
              type="text"
              id="githubProfile"
              name="githubProfile"
              placeholder="Enter github profile url"
              value={inputObj.githubProfile}
              handleChange={handleinputchange}
            ></InputBox>
          </div>
        </div>
      </div>
    );
}

export default BioForm;