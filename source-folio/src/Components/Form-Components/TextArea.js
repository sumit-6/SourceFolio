import React from "react";

const TextArea = (props) => {
    const {field, id, name, handleChange, placeholder="", value="", index=0} = props;
    return (
      <div class="md:flex md:items-center mb-6">
        <div>
          <label
            class="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor={id}
          >
            {field}:
          </label>
        </div>
        <div className="w-full">
          <textarea
            rows="4"
            class="bg-[#18162b] block p-2.5 text-sm text-white rounded-lg border-2 border-gray-700 dark:focus:ring-purple-500 dark:focus:border-purple-500 ml-32 w-3/4 mt-6"
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              handleChange(e, index);
            }}
          />
        </div>
      </div>
    );
};

export default TextArea;