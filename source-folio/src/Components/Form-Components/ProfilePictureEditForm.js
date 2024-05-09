import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import useUser from "../../hooks/useUser";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputBox from "./InputBox";

const ProfilePictureEditForm=(props)=>{
    const navigate = useNavigate();
    const path = useLocation().pathname;
    const ID = path.split("/")[3];
    const {user, isLoading} = useUser();
    const [Token, setToken] = useState(null);
    useEffect(() => {(async() => {
        const token = user && await user.getIdToken();
        setToken(token);
    })();

    }, [ID, user])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.querySelector('.form');
     
        const formData_empty = new FormData(form);
        const formData = {};
        for(const key of formData_empty.entries()) {
            formData[key[0]] = key[1];
        }
     
        const config = {
          headers: {
            'authtoken': Token,
            'Content-Type': 'multipart/form-data'
          },
          enctype: 'multipart/form-data'
        }
      
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/edit/profilePicture/${ID}`, formData, config)
        if(response.data === "Success") {
            navigate(`/edit/${ID}`);
        } else {
            navigate("/pageDoesn'tExist");
        }
      }
    
    return (
      <div className="p-8">
        <div className="text-2xl text-center text-white">
          Update your Profile Picture here!!
        </div>
        <form
          encType="multipart/form-data"
          className="form bg-grey-200 border-gray-500 border h-full w-full mt-10 rounded-lg p-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          

          <InputBox
              field="Profile Picture"
              type="file"
              name="profilePicture"
              id="profilePicture"
              placeholder="Enter Profile Picture"

              isSelected = {true}
            ></InputBox>
          <button
            type="submit"
            className={`btn btn-lg flex items-center justify-center m-5 text-orange-400`}
          >
            Submit Form
          </button>
        </form>
      </div>
    );
}

export default ProfilePictureEditForm;