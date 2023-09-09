import React from "react";

const TextArea = (props) => {
    const {field, type, id, placeholder="", value=""} = props;
    return (
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor={id}
            >
              {field}
            </label>
          </div>
          <div class="md:w-2/3">
            <textarea 
              rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              id={id}
              type={type}
              name={id}
              placeholder={placeholder}
              value={value}
            />
          </div>
        </div>
    );
};

export default TextArea;