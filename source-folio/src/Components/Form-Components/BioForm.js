import React, {useState} from "react";
import InputBox from "./InputBox";
import TextArea from "./TextArea";
import MainDesignations from "./MainDesignations";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const BioForm=(props)=>{
  const dispatch = useDispatch();
  const { name, profilePicture, bio, instagram, linkedIn, githubProfile } = useSelector(state => state.portfolio.data);
  const navigate = useNavigate();
  const handleinputchange=(e)=>{
    const { name, value } = e.target;
    dispatch(update_portfolio({ 
      [name]: value
    }))
  }
    
    return (
      <div
        className="p-1 sm:p-4 mt-6 rounded-lg lg:flex lg:flex-wrap"
        style={{ display: props.isSelected ? "" : "none" }}
      >
        <div className="border border-gray-700 lg:w-2/4 rounded-lg p-2 sm:p-4 mt-2">
          <div className="text-xl text-white text-center">Bio Details</div>
          <div className="mt-8">
            <InputBox
              field="Full Name"
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              value={name}
              handleChange={handleinputchange}
            ></InputBox>
            {profilePicture === undefined || profilePicture.url === undefined || profilePicture.url === "" ? <InputBox
              field="Profile Picture"
              type="file"
              name="profilePicture"
              id="profilePicture"
              placeholder="Enter Profile Picture"
              isSelected = {true}
            ></InputBox> : 
              <div class="md:flex md:items-center md:justify-between mb-6">
                <div>
                  <label class="block text-gray-300 font-bold mb-1 md:mb-0 whitespace-nowrap" htmlFor={"profilePicture"}>
                  Profile Picture:
                  </label>
                </div>
                <div class="md:w-2/3">
                    <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="inline-flex items-center rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
                    onClick={() => {navigate(`/edit/profilePicture/${props.id}`)}}
                    >
                    Update Profile Picture
                  </button>
                </div>
              </div>}
            <div className="border border-gray-900 rounded-lg w-full">
              <MainDesignations />
            </div>
            <TextArea
              field="Bio"
              id="bio"
              name="bio"
              placeholder="Enter a brief description of yours, your hobby, your birthdate, and likings..."
              value={bio}
              handleChange={handleinputchange}
            ></TextArea>
          </div>
        </div>

        <div className="border border-gray-700 lg:w-2/4 rounded-lg p-4 mt-2">
          <div className="text-xl text-white text-center">Social Handles!</div>
          <div className="mt-8">
            <InputBox
              field="Instagram"
              type="text"
              id="instagram"
              name="instagram"
              placeholder="Enter instagram profile url"
              value={instagram}
              handleChange={handleinputchange}
            ></InputBox>
            <InputBox
              field="LinkedIn"
              type="text"
              id="linkedIn"
              name="linkedIn"
              placeholder="Enter linkedIn profile url"
              value={linkedIn}
              handleChange={handleinputchange}
            ></InputBox>
            <InputBox
              field="Github"
              type="text"
              id="githubProfile"
              name="githubProfile"
              placeholder="Enter github profile url"
              value={githubProfile}
              handleChange={handleinputchange}
            ></InputBox>
          </div>
        </div>
      </div>
    );
}

export default BioForm;