import React from "react";
import BioForm from "./BioForm";

const Form=()=>{
    return (
      <div className="lol p-8">
        <div className="text-2xl text-center text-white">
          Fill your details below!!
        </div>
        <div className="bg-grey-200 border-gray-500 border h-full w-full mt-10 rounded-lg p-8">
          <div className="flex">
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center rounded-2xl cursor-pointer">
              Bio
            </div>
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer ">
              About me
            </div>
            <div className="navButton text-xs border h-8 w-32 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer">
              My Education
            </div>
            <div className="navButton text-xs border h-8 w-32 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer">
              My Experience
            </div>
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer">
              My Projects
            </div>
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer ">
              My Skills
            </div>
            <div className="navButton text-xs border h-8 w-36 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer ">
              My Achivements
            </div>
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer">
              Contact
            </div>
          </div>
          <BioForm/>
        </div>
      </div>
    );
}

export default Form;