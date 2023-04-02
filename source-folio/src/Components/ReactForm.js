import React from "react";
import duration from "./ReactFormBackend/duration.js"
import FirstLayer from "./ReactFormBackend/FirstLayer.js";
import MainDesignation from "./ReactFormBackend/mainDesignation.js";
import MyAchievements from "./ReactFormBackend/myAchievements.js";
import MyEducation from "./ReactFormBackend/myEducation.js";
import MyExperience from "./ReactFormBackend/myExperience.js";
import MyProjects from "./ReactFormBackend/myProjects.js";
import MySkills from "./ReactFormBackend/mySkills.js";
import ProgrammingSkills from "./ReactFormBackend/programmingSkills.js";
import ProjectDescription from "./ReactFormBackend/projectDiscription.js";
import ToolsAndFrameworks from "./ReactFormBackend/toolsAndFrameworks.js";
import WorkDescription from "./ReactFormBackend/workDescription.js";
import "bootstrap/dist/css/bootstrap.min.css";

const ReactForm=()=>{
    return(
        <div>
            <header className="App-header">
                <form action="http://localhost:8000/portfolio/insert" method="POST">
                    <FirstLayer/>
                    <br/>
                    <MyEducation/>
                    <br/>
                    <MyProjects/>
                    <br/>
                    <MySkills/>
                    <br/>
                    <MyAchievements/>
                    <button type="submit" class="btn btn-warning btn-lg m-3">Submit</button>

                </form>
                <br/>
            </header>
        </div>
    )
}

export default ReactForm;