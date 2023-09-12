import React from "react";

const TextArea = (props) => {
    const {field, id, name, handleChange, placeholder="", value="", index=0} = props;
    return (
        <div class="md:flex md:items-center mb-6">
          <div >
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor={id}
            >
              {field}
            </label>
          </div>
          <div className="w-full">
            <textarea 
              rows="4" class="w-full block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              id={id}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {handleChange(e, index)}}
            />
          </div>
        </div>
    );
};

export default TextArea;