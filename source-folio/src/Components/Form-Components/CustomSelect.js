import React from "react";

const CustomSelect = (props) => {
    const {field, id, value="", array=[], name, handleChange, index=0} = props;
    return (
        <div class="md:flex md:items-center mb-6">
           <div >
                <label
                class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor={id}
                >
                    {field}
                </label>
           </div>
           <div class="inline-block relative w-64 ml-[4.5rem]">
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                 name={name} id={id} value={value} onChange={(e) => handleChange(e, index)}>
                    <option value="">{field} Options</option>
                    {array.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
           </div>
        </div>
    );
};

export default CustomSelect;
