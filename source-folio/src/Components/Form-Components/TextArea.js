import React from "react";

const TextArea = (props) => {
    const {field, id, name, handleChange, placeholder="", value="", index=0} = props;
    return (
      <div class="md:flex md:items-center md:justify-between mb-6">
        <div>
          <label
            class="block text-gray-300 font-bold mb-1 md:mb-0 pr-4"
            htmlFor={id}
          >
            {field}:
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            rows="4"
            class="bg-[#18162b] block p-2.5 text-white rounded-lg border-2 leading-tight border-gray-700 dark:focus:ring-purple-500 dark:focus:border-purple-500 sm:w-full w-full lg:mt-4"
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