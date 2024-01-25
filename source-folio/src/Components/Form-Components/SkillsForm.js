import React, {useState} from "react";
import ProgrammingSkills from "./ProgrammingSkills";
import ToolsAndFrameworks from "./ToolsAndFrameworks";

const SkillsForm = (props) => {
    const [inputObj, setInputObj] = useState(props.data);
  const handleProgrammingSkills = (name, value, index) => {
    const obj = {...inputObj};
    obj['programmingSkills'][index][name] = value;
    setInputObj(obj);
    props.handleChange(obj);
  };

  const handleProgrammingSkillsRemove = (index) => {
    const obj = {...inputObj};
    obj['programmingSkills'].splice(index, 1);
    setInputObj(obj);
    props.handleChange(obj);
  };

  const handleToolsAndFramework = (name, value, index) => {
    const obj = {...inputObj};
    obj['toolsAndFrameworks'][index][name] = value;
    setInputObj(obj);
    props.handleChange(obj);
  };

  const handleToolsAndFrameworkRemove = (index) => {
    const obj = {...inputObj};
    obj['toolsAndFrameworks'].splice(index, 1);
    setInputObj(obj);
    props.handleChange(obj);
  };

  const handleObjChange = (name, list) => {
    const obj = {...inputObj};
    obj[name] = list;
    setInputObj(obj);
    props.handleChange(obj);
  }
    return (
      <div
        className="p-1 sm:p-4 mt-6"
        style={{ display: props.isSelected ? "" : "none" }}
      >
        
        <div className="border border-gray-700 rounded-lg p-2 sm:p-2 mt-6">
        <div className="text-xl text-white text-center">Programming Skills Details</div>
        <ProgrammingSkills
          data={inputObj.programmingSkills}
          onChange={handleProgrammingSkills}
          onRemove={handleProgrammingSkillsRemove}
          onObjChange={handleObjChange}
        ></ProgrammingSkills>
        </div>
        <div className="border border-gray-700 rounded-lg p-2 mt-6">
        <div className="text-xl text-white text-center">Tools and Frameworks Details</div>
        <ToolsAndFrameworks
          data={inputObj.toolsAndFrameworks}
          onChange={handleToolsAndFramework}
          onRemove={handleToolsAndFrameworkRemove}
          onObjChange={handleObjChange}
        ></ToolsAndFrameworks>
        </div>
      </div>
    );
}

export default SkillsForm;