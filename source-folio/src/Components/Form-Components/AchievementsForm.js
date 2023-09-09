import React from "react";
import TextArea from "./TextArea";

const AchievementsForm = () => {
    return (
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
            <div>Achievements Details</div>
            <TextArea field="Achievement" id="myAchievements_0" placeholder="Enter your achievement"></TextArea>
        </div>
    );
};

export default AchievementsForm;