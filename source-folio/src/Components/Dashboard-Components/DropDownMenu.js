import React, { useState } from 'react';
import CustomSelect from '../Form-Components/CustomSelect';

function DropdownMenu(props) {
  const [filter, setFilter] = useState("name");
  
  //const {field, id, value="", array=[], name, handleChange, index=0, noField=false} = props;
  const array = ["skills", "experience", "education"];
  function handleChange(e) {
    const text = e.target.value
    setFilter(text);
    props.handleSearchChange(text);
  }

  return (
    <div class="md:flex md:items-center mb-6">
           <div class="inline-block relative w-30">
                <select class="block appearance-none w-30 h-8 bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  id="searchBox" value={filter} onChange={(e) => handleChange(e)}>
                    <option key="name" value="name">name</option>
                    {array.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 flex items-center right-0 px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
           </div>
        </div>
  );
}

export default DropdownMenu;
