import React from "react";
import TextArea from "./TextArea";
import { IoIosAddCircleOutline } from "react-icons/io";

const AchievementsForm = () => {
    return (
      <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6 flex justify-around">
        <div className=" w-2/3">Achievements Details</div>
        <div className="w-full grid grid-flow-col">
          <TextArea
            field="Achievement"
            id="myAchievements_0"
            placeholder="Enter your achievement"
          ></TextArea>
          <IoIosAddCircleOutline className="h-8 w-8 text-black" />
        </div>
      </div>
    );
};

export default AchievementsForm;